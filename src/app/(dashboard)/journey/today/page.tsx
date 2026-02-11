"use client";

import { useState, useEffect, useCallback } from "react";
import { Heart, Ear, Users, Play, Pause, RotateCcw, Flame } from "lucide-react";
import { TOUCHPOINTS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { TouchpointType } from "@/types";

interface TouchpointState {
  completed: boolean;
  notes: string;
  timerRunning: boolean;
  timeLeft: number;
}

const touchpointConfig: {
  type: TouchpointType;
  icon: typeof Heart;
  headerBg: string;
  headerText: string;
  borderColor: string;
  checkboxColor: string;
  buttonBg: string;
  buttonHover: string;
  prompt: string;
}[] = [
  {
    type: "touch",
    icon: Heart,
    headerBg: "bg-touch-light",
    headerText: "text-touch-dark",
    borderColor: "border-touch",
    checkboxColor: "accent-touch-dark",
    buttonBg: "bg-touch",
    buttonHover: "hover:bg-touch-dark",
    prompt:
      "Give your child a 20-second hug. Hold them close, breathe slowly, and let them feel your presence. No words needed.",
  },
  {
    type: "listen",
    icon: Ear,
    headerBg: "bg-listen-light",
    headerText: "text-listen-dark",
    borderColor: "border-listen",
    checkboxColor: "accent-listen-dark",
    buttonBg: "bg-listen",
    buttonHover: "hover:bg-listen-dark",
    prompt:
      "Sit with your child and ask: 'What was the best part of your day?' Listen without interrupting. Let them lead the conversation.",
  },
  {
    type: "qualityTime",
    icon: Users,
    headerBg: "bg-quality-light",
    headerText: "text-quality-dark",
    borderColor: "border-quality",
    checkboxColor: "accent-quality-dark",
    buttonBg: "bg-quality",
    buttonHover: "hover:bg-quality-dark",
    prompt:
      "Spend 20 minutes doing whatever your child wants. Follow their lead. No phones, no agenda, just being together.",
  },
];

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  if (mins === 0) return `${secs}s`;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

function getTotalSeconds(type: TouchpointType): number {
  const tp = TOUCHPOINTS[type];
  return tp.unit === "minutes" ? tp.duration * 60 : tp.duration;
}

function getDurationLabel(type: TouchpointType): string {
  const tp = TOUCHPOINTS[type];
  return `${tp.duration} ${tp.unit}`;
}

export default function TodayPage() {
  const [touchpoints, setTouchpoints] = useState<
    Record<TouchpointType, TouchpointState>
  >({
    touch: {
      completed: false,
      notes: "",
      timerRunning: false,
      timeLeft: getTotalSeconds("touch"),
    },
    listen: {
      completed: false,
      notes: "",
      timerRunning: false,
      timeLeft: getTotalSeconds("listen"),
    },
    qualityTime: {
      completed: false,
      notes: "",
      timerRunning: false,
      timeLeft: getTotalSeconds("qualityTime"),
    },
  });

  const toggleTimer = useCallback((type: TouchpointType) => {
    setTouchpoints((prev) => ({
      ...prev,
      [type]: {
        ...prev[type],
        timerRunning: !prev[type].timerRunning,
      },
    }));
  }, []);

  const resetTimer = useCallback((type: TouchpointType) => {
    setTouchpoints((prev) => ({
      ...prev,
      [type]: {
        ...prev[type],
        timerRunning: false,
        timeLeft: getTotalSeconds(type),
      },
    }));
  }, []);

  const toggleCompleted = useCallback((type: TouchpointType) => {
    setTouchpoints((prev) => ({
      ...prev,
      [type]: {
        ...prev[type],
        completed: !prev[type].completed,
      },
    }));
  }, []);

  const updateNotes = useCallback((type: TouchpointType, notes: string) => {
    setTouchpoints((prev) => ({
      ...prev,
      [type]: {
        ...prev[type],
        notes,
      },
    }));
  }, []);

  // Timer interval effect
  useEffect(() => {
    const interval = setInterval(() => {
      setTouchpoints((prev) => {
        let changed = false;
        const next = { ...prev };

        for (const type of ["touch", "listen", "qualityTime"] as TouchpointType[]) {
          if (prev[type].timerRunning && prev[type].timeLeft > 0) {
            changed = true;
            next[type] = {
              ...prev[type],
              timeLeft: prev[type].timeLeft - 1,
            };
          } else if (prev[type].timerRunning && prev[type].timeLeft === 0) {
            changed = true;
            next[type] = {
              ...prev[type],
              timerRunning: false,
            };
          }
        }

        return changed ? next : prev;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const completedCount = Object.values(touchpoints).filter(
    (tp) => tp.completed
  ).length;

  return (
    <div>
      {/* Streak counter */}
      <div className="mb-8 text-center">
        <div className="inline-flex items-center gap-2 bg-accent-light/50 rounded-full px-6 py-3">
          <Flame size={20} className="text-accent-dark" />
          <span className="font-semibold text-text">
            Day 0 — Start your streak!
          </span>
        </div>
        <p className="text-sm text-text-muted mt-2">
          Complete all 3 touchpoints today to begin building your streak.
        </p>
      </div>

      {/* Progress summary */}
      <div className="mb-6 flex items-center justify-center gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={cn(
              "w-3 h-3 rounded-full transition-colors",
              i < completedCount ? "bg-touch" : "bg-border"
            )}
          />
        ))}
        <span className="text-sm text-text-muted ml-2">
          {completedCount}/3 complete
        </span>
      </div>

      {/* Touchpoint cards */}
      <div className="space-y-6">
        {touchpointConfig.map((config) => {
          const state = touchpoints[config.type];
          const Icon = config.icon;
          const timerFinished = state.timeLeft === 0;

          return (
            <div
              key={config.type}
              className={cn(
                "rounded-2xl border-2 bg-white overflow-hidden transition-all",
                state.completed
                  ? "border-touch opacity-80"
                  : config.borderColor
              )}
            >
              {/* Colored header */}
              <div
                className={cn(
                  "px-6 py-4 flex items-center justify-between",
                  config.headerBg
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon size={24} className={config.headerText} />
                  <div>
                    <h2
                      className={cn(
                        "text-lg font-bold",
                        config.headerText
                      )}
                    >
                      {TOUCHPOINTS[config.type].name}
                    </h2>
                    <p className={cn("text-sm opacity-80", config.headerText)}>
                      {getDurationLabel(config.type)}
                    </p>
                  </div>
                </div>

                {/* Completed checkbox */}
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={state.completed}
                    onChange={() => toggleCompleted(config.type)}
                    className={cn(
                      "w-6 h-6 rounded-md cursor-pointer",
                      config.checkboxColor
                    )}
                  />
                  <span
                    className={cn(
                      "text-sm font-medium hidden sm:inline",
                      config.headerText
                    )}
                  >
                    Done
                  </span>
                </label>
              </div>

              {/* Card body */}
              <div className="px-6 py-5">
                {/* Prompt */}
                <p className="text-text-muted leading-relaxed mb-5">
                  {config.prompt}
                </p>

                {/* Timer */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className={cn(
                      "text-3xl font-mono font-bold tabular-nums",
                      timerFinished ? "text-touch-dark" : "text-text"
                    )}
                  >
                    {timerFinished ? "Done!" : formatTime(state.timeLeft)}
                  </div>

                  <button
                    onClick={() => toggleTimer(config.type)}
                    disabled={timerFinished}
                    className={cn(
                      "flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-medium transition-colors disabled:opacity-40",
                      config.buttonBg,
                      config.buttonHover
                    )}
                  >
                    {state.timerRunning ? (
                      <>
                        <Pause size={16} /> Pause
                      </>
                    ) : (
                      <>
                        <Play size={16} /> {timerFinished ? "Finished" : "Start"}
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => resetTimer(config.type)}
                    className="p-2 text-text-muted hover:text-text transition-colors"
                    aria-label="Reset timer"
                  >
                    <RotateCcw size={18} />
                  </button>
                </div>

                {/* Notes */}
                <div>
                  <label className="text-sm font-medium text-text-muted block mb-1">
                    Notes (optional)
                  </label>
                  <textarea
                    value={state.notes}
                    onChange={(e) => updateNotes(config.type, e.target.value)}
                    placeholder={`How did ${TOUCHPOINTS[config.type].name.toLowerCase()} go today?`}
                    rows={2}
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-warm-white text-text placeholder:text-text-muted/50 focus:outline-none focus:border-touch transition-colors resize-none text-sm"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Completion message */}
      {completedCount === 3 && (
        <div className="mt-8 text-center p-6 bg-touch-light/30 rounded-2xl border border-touch-light">
          <p className="text-lg font-semibold text-touch-dark">
            All 3 touchpoints complete! Amazing work today.
          </p>
          <p className="text-sm text-text-muted mt-1">
            You showed up for your child. That matters more than you know.
          </p>
        </div>
      )}
    </div>
  );
}

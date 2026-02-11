"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Platform } from "@/types";

interface CalendarPost {
  id: string;
  title: string;
  platform: Platform;
  day: number;
}

const platformColors: Record<Platform, string> = {
  INSTAGRAM: "#E1306C",
  TIKTOK: "#000000",
  FACEBOOK: "#1877F2",
};

const platformLabels: Record<Platform, string> = {
  INSTAGRAM: "IG",
  TIKTOK: "TT",
  FACEBOOK: "FB",
};

function getSamplePosts(year: number, month: number): CalendarPost[] {
  return [
    {
      id: "1",
      title: "20-Second Hug Challenge",
      platform: "INSTAGRAM",
      day: 3,
    },
    {
      id: "2",
      title: "Listen Without Fixing",
      platform: "TIKTOK",
      day: 5,
    },
    {
      id: "3",
      title: "Weekly Win Wednesday",
      platform: "FACEBOOK",
      day: 7,
    },
    {
      id: "4",
      title: "Touchpoint Tip Tuesday",
      platform: "INSTAGRAM",
      day: 10,
    },
    {
      id: "5",
      title: "Parent Story Spotlight",
      platform: "FACEBOOK",
      day: 14,
    },
    {
      id: "6",
      title: "Quality Time Ideas",
      platform: "TIKTOK",
      day: 17,
    },
    {
      id: "7",
      title: "Connection Challenge",
      platform: "INSTAGRAM",
      day: 20,
    },
    {
      id: "8",
      title: "Meeting Reminder",
      platform: "FACEBOOK",
      day: 22,
    },
    {
      id: "9",
      title: "Weekend Touchpoint Reel",
      platform: "TIKTOK",
      day: 25,
    },
    {
      id: "10",
      title: "Month in Review",
      platform: "INSTAGRAM",
      day: 28,
    },
  ];
}

const dayHeaders = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function ContentCalendarPage() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const posts = getSamplePosts(currentYear, currentMonth);

  // Generate calendar grid
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const calendarDays: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    calendarDays.push(d);
  }
  // Pad to complete the last row
  while (calendarDays.length % 7 !== 0) {
    calendarDays.push(null);
  }

  const monthName = new Date(currentYear, currentMonth).toLocaleString(
    "default",
    { month: "long" }
  );

  function prevMonth() {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  }

  function nextMonth() {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  }

  const isToday = (day: number) =>
    day === today.getDate() &&
    currentMonth === today.getMonth() &&
    currentYear === today.getFullYear();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-text">Content Calendar</h2>
          <p className="text-text-muted text-sm mt-1">
            Plan and schedule your social media posts
          </p>
        </div>
        <button className="flex items-center gap-2 bg-touch text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-touch-dark transition-colors text-sm">
          <Plus size={18} />
          New Post
        </button>
      </div>

      {/* Platform Legend */}
      <div className="flex items-center gap-4">
        {(Object.entries(platformColors) as [Platform, string][]).map(
          ([platform, color]) => (
            <div key={platform} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: color }}
              />
              <span className="text-xs text-text-muted font-medium">
                {platform.charAt(0) + platform.slice(1).toLowerCase()}
              </span>
            </div>
          )
        )}
      </div>

      {/* Calendar */}
      <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
        {/* Month Navigation */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <button
            onClick={prevMonth}
            className="p-2 rounded-lg hover:bg-soft-gray transition-colors"
          >
            <ChevronLeft size={20} className="text-text" />
          </button>
          <h3 className="text-lg font-semibold text-text">
            {monthName} {currentYear}
          </h3>
          <button
            onClick={nextMonth}
            className="p-2 rounded-lg hover:bg-soft-gray transition-colors"
          >
            <ChevronRight size={20} className="text-text" />
          </button>
        </div>

        {/* Day Headers */}
        <div className="grid grid-cols-7 border-b border-border">
          {dayHeaders.map((day) => (
            <div
              key={day}
              className="text-center text-xs font-semibold text-text-muted py-3"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7">
          {calendarDays.map((day, i) => {
            const dayPosts = day
              ? posts.filter((p) => p.day === day)
              : [];

            return (
              <div
                key={i}
                className={cn(
                  "min-h-[100px] border-b border-r border-border p-2",
                  !day && "bg-soft-gray/50",
                  i % 7 === 6 && "border-r-0"
                )}
              >
                {day && (
                  <>
                    <span
                      className={cn(
                        "text-sm font-medium inline-flex items-center justify-center w-7 h-7 rounded-full",
                        isToday(day)
                          ? "bg-touch text-white"
                          : "text-text"
                      )}
                    >
                      {day}
                    </span>
                    <div className="mt-1 space-y-1">
                      {dayPosts.map((post) => (
                        <div
                          key={post.id}
                          className="flex items-center gap-1 rounded px-1.5 py-0.5 text-xs cursor-pointer hover:opacity-80 transition-opacity"
                          style={{
                            backgroundColor:
                              platformColors[post.platform] + "15",
                          }}
                        >
                          <span
                            className="font-bold flex-shrink-0"
                            style={{
                              color: platformColors[post.platform],
                            }}
                          >
                            {platformLabels[post.platform]}
                          </span>
                          <span className="text-text truncate">
                            {post.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

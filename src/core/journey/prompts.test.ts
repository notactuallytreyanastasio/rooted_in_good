import { describe, it, expect } from "vitest";
import {
  getDayPrompts,
  dayOfWeekInJourney,
  getWeekTheme,
  isReflectionDay,
  completedDaysInWeek,
} from "./prompts";
import type { JourneyWeek, JourneyDay } from "@/types";

const mockDays: JourneyDay[] = [
  { id: "d1", weekId: "w1", dayNumber: 1, touchPrompt: "Hug", listenPrompt: "Ask about day", qualityTimePrompt: "Sit together", tip: "Be present" },
  { id: "d2", weekId: "w1", dayNumber: 2, touchPrompt: "Hold hands", listenPrompt: "Listen deeply", qualityTimePrompt: "Walk together", tip: "Silence is ok" },
  { id: "d7", weekId: "w1", dayNumber: 7, touchPrompt: "Long hug", listenPrompt: "Reflect", qualityTimePrompt: "Free choice", tip: "Week done" },
];

const mockWeek: JourneyWeek = {
  id: "w1",
  weekNumber: 1,
  title: "First Steps",
  description: "Begin your journey",
  theme: "Starting Small",
  touchFocus: "Simple touch",
  listenFocus: "Put phone down",
  qualityTimeFocus: "Follow their lead",
  days: mockDays,
};

describe("getDayPrompts", () => {
  it("returns the correct day's prompts", () => {
    const day = getDayPrompts(mockWeek, 1);
    expect(day?.touchPrompt).toBe("Hug");
    expect(day?.dayNumber).toBe(1);
  });

  it("returns undefined for non-existent day", () => {
    expect(getDayPrompts(mockWeek, 5)).toBeUndefined();
  });
});

describe("dayOfWeekInJourney", () => {
  it("returns 1 on start date", () => {
    expect(dayOfWeekInJourney("2026-01-01", "2026-01-01")).toBe(1);
  });

  it("returns 7 on day 7", () => {
    expect(dayOfWeekInJourney("2026-01-01", "2026-01-07")).toBe(7);
  });

  it("wraps back to 1 on day 8 (week 2, day 1)", () => {
    expect(dayOfWeekInJourney("2026-01-01", "2026-01-08")).toBe(1);
  });

  it("correctly calculates mid-week", () => {
    expect(dayOfWeekInJourney("2026-01-01", "2026-01-03")).toBe(3);
  });
});

describe("getWeekTheme", () => {
  it("extracts theme info from week", () => {
    const theme = getWeekTheme(mockWeek);
    expect(theme.title).toBe("First Steps");
    expect(theme.theme).toBe("Starting Small");
    expect(theme.touchFocus).toBe("Simple touch");
  });
});

describe("isReflectionDay", () => {
  it("returns true for day 7", () => {
    expect(isReflectionDay(7)).toBe(true);
  });

  it("returns false for other days", () => {
    expect(isReflectionDay(1)).toBe(false);
    expect(isReflectionDay(6)).toBe(false);
  });
});

describe("completedDaysInWeek", () => {
  it("marks completed days correctly", () => {
    const completed = new Set([1, 7]);
    const result = completedDaysInWeek(mockDays, completed);

    expect(result[0].isCompleted).toBe(true);
    expect(result[1].isCompleted).toBe(false);
    expect(result[2].isCompleted).toBe(true);
  });

  it("returns days sorted by day number", () => {
    const unsorted: JourneyDay[] = [mockDays[2], mockDays[0], mockDays[1]];
    const result = completedDaysInWeek(unsorted, new Set());
    expect(result[0].day.dayNumber).toBe(1);
    expect(result[1].day.dayNumber).toBe(2);
    expect(result[2].day.dayNumber).toBe(7);
  });
});

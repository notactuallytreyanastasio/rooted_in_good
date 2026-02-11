import { describe, it, expect } from "vitest";
import {
  weekProgress,
  overallProgress,
  canUnlockWeek,
  currentWeekNumber,
  weekStatuses,
} from "./progress";
import type { DailyCheckIn, JourneyWeek } from "@/types";

function makeCheckIn(date: string, complete = true): DailyCheckIn {
  return {
    id: `ci-${date}`,
    userId: "user-1",
    date,
    touchCompleted: complete,
    listenCompleted: complete,
    qualityTimeCompleted: complete,
  };
}

describe("weekProgress", () => {
  it("returns 0 for no check-ins", () => {
    expect(weekProgress([], "2026-01-05")).toBe(0);
  });

  it("returns 100 for all 7 days complete", () => {
    const checkins = [
      makeCheckIn("2026-01-05"),
      makeCheckIn("2026-01-06"),
      makeCheckIn("2026-01-07"),
      makeCheckIn("2026-01-08"),
      makeCheckIn("2026-01-09"),
      makeCheckIn("2026-01-10"),
      makeCheckIn("2026-01-11"),
    ];
    expect(weekProgress(checkins, "2026-01-05")).toBe(100);
  });

  it("returns partial progress", () => {
    const checkins = [
      makeCheckIn("2026-01-05"),
      makeCheckIn("2026-01-06"),
      makeCheckIn("2026-01-07"),
    ];
    expect(weekProgress(checkins, "2026-01-05")).toBe(43); // 3/7 rounded
  });

  it("ignores incomplete check-ins", () => {
    const checkins = [
      makeCheckIn("2026-01-05", true),
      makeCheckIn("2026-01-06", false),
    ];
    expect(weekProgress(checkins, "2026-01-05")).toBe(14); // 1/7
  });
});

describe("overallProgress", () => {
  it("returns 0 for no check-ins", () => {
    expect(overallProgress([], 56)).toBe(0);
  });

  it("returns 0 for 0 total days", () => {
    expect(overallProgress([], 0)).toBe(0);
  });

  it("calculates percentage of complete days", () => {
    const checkins = [makeCheckIn("2026-01-01"), makeCheckIn("2026-01-02")];
    expect(overallProgress(checkins, 10)).toBe(20);
  });
});

describe("canUnlockWeek", () => {
  it("always unlocks week 1", () => {
    expect(canUnlockWeek(1, 0)).toBe(true);
  });

  it("unlocks when previous week meets threshold", () => {
    expect(canUnlockWeek(2, 60)).toBe(true);
    expect(canUnlockWeek(2, 100)).toBe(true);
  });

  it("stays locked when previous week is below threshold", () => {
    expect(canUnlockWeek(2, 59)).toBe(false);
    expect(canUnlockWeek(3, 0)).toBe(false);
  });

  it("respects custom threshold", () => {
    expect(canUnlockWeek(2, 50, 50)).toBe(true);
    expect(canUnlockWeek(2, 49, 50)).toBe(false);
  });
});

describe("currentWeekNumber", () => {
  it("returns 1 on start date", () => {
    expect(currentWeekNumber("2026-01-01", "2026-01-01")).toBe(1);
  });

  it("returns 1 within first 7 days", () => {
    expect(currentWeekNumber("2026-01-01", "2026-01-07")).toBe(1);
  });

  it("returns 2 on day 8", () => {
    expect(currentWeekNumber("2026-01-01", "2026-01-08")).toBe(2);
  });

  it("caps at week 8", () => {
    expect(currentWeekNumber("2026-01-01", "2026-12-01")).toBe(8);
  });
});

describe("weekStatuses", () => {
  const weeks: JourneyWeek[] = [
    { id: "w1", weekNumber: 1, title: "First Steps", description: "", theme: "", touchFocus: "", listenFocus: "", qualityTimeFocus: "", days: [] },
    { id: "w2", weekNumber: 2, title: "Building Rhythm", description: "", theme: "", touchFocus: "", listenFocus: "", qualityTimeFocus: "", days: [] },
    { id: "w3", weekNumber: 3, title: "Going Deeper", description: "", theme: "", touchFocus: "", listenFocus: "", qualityTimeFocus: "", days: [] },
  ];

  it("marks week 1 as always unlocked", () => {
    const progressMap = new Map<number, number>();
    const statuses = weekStatuses(weeks, progressMap, 1);
    expect(statuses[0].isUnlocked).toBe(true);
    expect(statuses[0].isCurrent).toBe(true);
  });

  it("locks weeks when previous has insufficient progress", () => {
    const progressMap = new Map([[1, 30]]);
    const statuses = weekStatuses(weeks, progressMap, 1);
    expect(statuses[1].isUnlocked).toBe(false);
  });

  it("unlocks weeks when previous has sufficient progress", () => {
    const progressMap = new Map([[1, 80], [2, 60]]);
    const statuses = weekStatuses(weeks, progressMap, 2);
    expect(statuses[1].isUnlocked).toBe(true);
    expect(statuses[2].isUnlocked).toBe(true);
  });
});

import { describe, it, expect } from "vitest";
import {
  isCheckInComplete,
  calculateStreak,
  isStreakActive,
  streakMessage,
  touchpointsCompletedToday,
} from "./streaks";
import type { DailyCheckIn } from "@/types";

function makeCheckIn(
  date: string,
  touch = true,
  listen = true,
  quality = true
): DailyCheckIn {
  return {
    id: `ci-${date}`,
    userId: "user-1",
    date,
    touchCompleted: touch,
    listenCompleted: listen,
    qualityTimeCompleted: quality,
  };
}

describe("isCheckInComplete", () => {
  it("returns true when all 3 touchpoints are done", () => {
    expect(isCheckInComplete(makeCheckIn("2026-01-01"))).toBe(true);
  });

  it("returns false when any touchpoint is missing", () => {
    expect(isCheckInComplete(makeCheckIn("2026-01-01", false, true, true))).toBe(false);
    expect(isCheckInComplete(makeCheckIn("2026-01-01", true, false, true))).toBe(false);
    expect(isCheckInComplete(makeCheckIn("2026-01-01", true, true, false))).toBe(false);
  });
});

describe("calculateStreak", () => {
  it("returns 0 for empty checkins", () => {
    expect(calculateStreak([], "2026-01-10")).toBe(0);
  });

  it("returns 1 for a single complete day (today)", () => {
    const checkins = [makeCheckIn("2026-01-10")];
    expect(calculateStreak(checkins, "2026-01-10")).toBe(1);
  });

  it("counts consecutive complete days", () => {
    const checkins = [
      makeCheckIn("2026-01-10"),
      makeCheckIn("2026-01-09"),
      makeCheckIn("2026-01-08"),
    ];
    expect(calculateStreak(checkins, "2026-01-10")).toBe(3);
  });

  it("breaks on incomplete day", () => {
    const checkins = [
      makeCheckIn("2026-01-10"),
      makeCheckIn("2026-01-09", false, true, true),
      makeCheckIn("2026-01-08"),
    ];
    expect(calculateStreak(checkins, "2026-01-10")).toBe(1);
  });

  it("breaks on gap in dates", () => {
    const checkins = [
      makeCheckIn("2026-01-10"),
      makeCheckIn("2026-01-08"), // gap: missing Jan 9
    ];
    expect(calculateStreak(checkins, "2026-01-10")).toBe(1);
  });

  it("returns 0 if today is incomplete", () => {
    const checkins = [makeCheckIn("2026-01-10", true, false, true)];
    expect(calculateStreak(checkins, "2026-01-10")).toBe(0);
  });

  it("returns 0 if no check-in for today", () => {
    const checkins = [makeCheckIn("2026-01-09")];
    expect(calculateStreak(checkins, "2026-01-10")).toBe(0);
  });

  it("handles unsorted input", () => {
    const checkins = [
      makeCheckIn("2026-01-08"),
      makeCheckIn("2026-01-10"),
      makeCheckIn("2026-01-09"),
    ];
    expect(calculateStreak(checkins, "2026-01-10")).toBe(3);
  });
});

describe("isStreakActive", () => {
  it("returns true when today is complete", () => {
    const checkins = [makeCheckIn("2026-01-10")];
    expect(isStreakActive(checkins, "2026-01-10")).toBe(true);
  });

  it("returns false when today is incomplete", () => {
    const checkins = [makeCheckIn("2026-01-10", true, false, true)];
    expect(isStreakActive(checkins, "2026-01-10")).toBe(false);
  });

  it("returns false when no check-in for today", () => {
    expect(isStreakActive([], "2026-01-10")).toBe(false);
  });
});

describe("streakMessage", () => {
  it("returns start message for 0", () => {
    expect(streakMessage(0)).toContain("Start");
  });

  it("returns day 1 message", () => {
    expect(streakMessage(1)).toContain("Day 1");
  });

  it("returns weekly milestone", () => {
    expect(streakMessage(7)).toContain("week");
  });

  it("returns 30-day milestone", () => {
    expect(streakMessage(30)).toContain("30 days");
  });

  it("returns long-streak message", () => {
    expect(streakMessage(100)).toContain("Rooted in Good");
  });
});

describe("touchpointsCompletedToday", () => {
  it("returns 3 when all done", () => {
    const checkins = [makeCheckIn("2026-01-10")];
    expect(touchpointsCompletedToday(checkins, "2026-01-10")).toBe(3);
  });

  it("returns partial count", () => {
    const checkins = [makeCheckIn("2026-01-10", true, false, true)];
    expect(touchpointsCompletedToday(checkins, "2026-01-10")).toBe(2);
  });

  it("returns 0 when no check-in for today", () => {
    expect(touchpointsCompletedToday([], "2026-01-10")).toBe(0);
  });
});

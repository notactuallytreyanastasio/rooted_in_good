import type { DailyCheckIn, JourneyWeek } from "@/types";
import { isCheckInComplete } from "./streaks";

/** Calculate completion percentage for a single week (0-100) */
export function weekProgress(
  checkins: DailyCheckIn[],
  weekStartDate: string,
  totalDays: number = 7
): number {
  // Count how many complete days exist within this week
  const start = new Date(
    parseInt(weekStartDate.slice(0, 4)),
    parseInt(weekStartDate.slice(5, 7)) - 1,
    parseInt(weekStartDate.slice(8, 10))
  );

  let completeDays = 0;
  for (let i = 0; i < totalDays; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

    const checkIn = checkins.find((c) => c.date === dateStr);
    if (checkIn && isCheckInComplete(checkIn)) {
      completeDays++;
    }
  }

  return Math.round((completeDays / totalDays) * 100);
}

/** Calculate overall progress across all weeks (0-100) */
export function overallProgress(
  checkins: DailyCheckIn[],
  totalDays: number
): number {
  if (totalDays === 0) return 0;
  const completeDays = checkins.filter(isCheckInComplete).length;
  return Math.round((completeDays / totalDays) * 100);
}

/**
 * Determine if a week can be unlocked.
 * Week 1 is always unlocked. Subsequent weeks unlock when the previous
 * week has >= minCompletion% completion.
 */
export function canUnlockWeek(
  weekNumber: number,
  previousWeekProgress: number,
  minCompletion: number = 60
): boolean {
  if (weekNumber <= 1) return true;
  return previousWeekProgress >= minCompletion;
}

/** Get the current week number based on journey start date and today */
export function currentWeekNumber(
  journeyStartDate: string,
  today: string
): number {
  const start = new Date(
    parseInt(journeyStartDate.slice(0, 4)),
    parseInt(journeyStartDate.slice(5, 7)) - 1,
    parseInt(journeyStartDate.slice(8, 10))
  );
  const end = new Date(
    parseInt(today.slice(0, 4)),
    parseInt(today.slice(5, 7)) - 1,
    parseInt(today.slice(8, 10))
  );

  const diffMs = end.getTime() - start.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  return Math.min(8, Math.max(1, Math.floor(diffDays / 7) + 1));
}

/** Get a summary of each week's status */
export interface WeekStatus {
  weekNumber: number;
  title: string;
  progress: number;
  isUnlocked: boolean;
  isCurrent: boolean;
}

export function weekStatuses(
  weeks: JourneyWeek[],
  weekProgressMap: Map<number, number>,
  currentWeek: number
): WeekStatus[] {
  return weeks
    .sort((a, b) => a.weekNumber - b.weekNumber)
    .map((week) => {
      const progress = weekProgressMap.get(week.weekNumber) ?? 0;
      const prevProgress =
        week.weekNumber > 1
          ? weekProgressMap.get(week.weekNumber - 1) ?? 0
          : 100;

      return {
        weekNumber: week.weekNumber,
        title: week.title,
        progress,
        isUnlocked: canUnlockWeek(week.weekNumber, prevProgress),
        isCurrent: week.weekNumber === currentWeek,
      };
    });
}

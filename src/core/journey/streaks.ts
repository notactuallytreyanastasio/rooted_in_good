import type { DailyCheckIn } from "@/types";

/** Check if a single check-in counts as "completed" (all 3 touchpoints done) */
export function isCheckInComplete(checkIn: DailyCheckIn): boolean {
  return (
    checkIn.touchCompleted &&
    checkIn.listenCompleted &&
    checkIn.qualityTimeCompleted
  );
}

/**
 * Calculate the current streak length from an array of check-ins.
 * A streak is consecutive days where all 3 touchpoints were completed.
 * @param checkins - Sorted by date descending (most recent first)
 * @param today - The current date string (YYYY-MM-DD)
 */
export function calculateStreak(
  checkins: DailyCheckIn[],
  today: string
): number {
  if (checkins.length === 0) return 0;

  // Check-ins must be sorted most recent first
  const sorted = [...checkins].sort((a, b) => b.date.localeCompare(a.date));

  let streak = 0;
  let expectedDate = today;

  for (const checkIn of sorted) {
    if (checkIn.date === expectedDate && isCheckInComplete(checkIn)) {
      streak++;
      // Move expected to previous day
      const d = new Date(
        parseInt(expectedDate.slice(0, 4)),
        parseInt(expectedDate.slice(5, 7)) - 1,
        parseInt(expectedDate.slice(8, 10))
      );
      d.setDate(d.getDate() - 1);
      expectedDate = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    } else if (checkIn.date === expectedDate) {
      // Day exists but not complete — streak breaks
      break;
    } else if (checkIn.date < expectedDate) {
      // Gap in dates — streak breaks
      break;
    }
    // If checkIn.date > expectedDate, skip it (future date or duplicate)
  }

  return streak;
}

/** Check if the streak is currently active (completed today) */
export function isStreakActive(
  checkins: DailyCheckIn[],
  today: string
): boolean {
  const todayCheckIn = checkins.find((c) => c.date === today);
  return todayCheckIn ? isCheckInComplete(todayCheckIn) : false;
}

/** Get a motivational message based on streak length */
export function streakMessage(streak: number): string {
  if (streak === 0) return "Start your streak today!";
  if (streak === 1) return "Day 1 — every journey begins with a single step.";
  if (streak < 7) return `${streak} days strong. Keep going!`;
  if (streak === 7) return "One full week! You're building real roots.";
  if (streak < 14) return `${streak} days! Your consistency is inspiring.`;
  if (streak === 14) return "Two weeks! This is becoming who you are.";
  if (streak < 30) return `${streak} days! You're transforming your family.`;
  if (streak === 30) return "30 days! A full month of connection. Incredible.";
  return `${streak} days! You are Rooted in Good.`;
}

/** Count how many touchpoints were completed today */
export function touchpointsCompletedToday(
  checkins: DailyCheckIn[],
  today: string
): number {
  const todayCheckIn = checkins.find((c) => c.date === today);
  if (!todayCheckIn) return 0;

  let count = 0;
  if (todayCheckIn.touchCompleted) count++;
  if (todayCheckIn.listenCompleted) count++;
  if (todayCheckIn.qualityTimeCompleted) count++;
  return count;
}

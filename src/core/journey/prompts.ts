import type { JourneyWeek, JourneyDay } from "@/types";

/** Get the prompts for a specific day within a week */
export function getDayPrompts(
  week: JourneyWeek,
  dayNumber: number
): JourneyDay | undefined {
  return week.days.find((d) => d.dayNumber === dayNumber);
}

/** Get the day number within a week (1-7) from journey start date */
export function dayOfWeekInJourney(
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
  return (diffDays % 7) + 1;
}

/** Get the theme for a given week */
export function getWeekTheme(week: JourneyWeek): {
  title: string;
  theme: string;
  description: string;
  touchFocus: string;
  listenFocus: string;
  qualityTimeFocus: string;
} {
  return {
    title: week.title,
    theme: week.theme,
    description: week.description,
    touchFocus: week.touchFocus,
    listenFocus: week.listenFocus,
    qualityTimeFocus: week.qualityTimeFocus,
  };
}

/** Check if today is reflection day (day 7 of the week) */
export function isReflectionDay(dayNumber: number): boolean {
  return dayNumber === 7;
}

/** Get all day numbers that have been completed in a week */
export function completedDaysInWeek(
  weekDays: JourneyDay[],
  completedDayNumbers: Set<number>
): { day: JourneyDay; isCompleted: boolean }[] {
  return weekDays
    .sort((a, b) => a.dayNumber - b.dayNumber)
    .map((day) => ({
      day,
      isCompleted: completedDayNumbers.has(day.dayNumber),
    }));
}

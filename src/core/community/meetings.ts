import type { Meeting } from "@/types";
import { dayName, formatTime12h } from "@/core/shared/dates";

/** Get the next occurrence of a meeting from a reference date */
export function nextMeetingDate(meeting: Meeting, referenceDate: Date): Date {
  const result = new Date(referenceDate);
  const currentDay = result.getDay();
  const daysUntil = (meeting.dayOfWeek - currentDay + 7) % 7;

  // If it's the same day, check if the meeting time has passed
  if (daysUntil === 0) {
    const [hours, minutes] = meeting.time.split(":").map(Number);
    const meetingTime = new Date(result);
    meetingTime.setHours(hours, minutes, 0, 0);

    if (result < meetingTime) {
      // Meeting is later today
      return meetingTime;
    }
    // Meeting already passed today, get next week
    result.setDate(result.getDate() + 7);
  } else {
    result.setDate(result.getDate() + daysUntil);
  }

  const [hours, minutes] = meeting.time.split(":").map(Number);
  result.setHours(hours, minutes, 0, 0);
  return result;
}

/** Sort meetings by their next occurrence */
export function upcomingMeetings(
  meetings: Meeting[],
  referenceDate: Date
): Meeting[] {
  return [...meetings].sort((a, b) => {
    const aNext = nextMeetingDate(a, referenceDate);
    const bNext = nextMeetingDate(b, referenceDate);
    return aNext.getTime() - bNext.getTime();
  });
}

/** Format a meeting for display */
export function formatMeetingSchedule(meeting: Meeting): string {
  const day = dayName(meeting.dayOfWeek);
  const time = formatTime12h(meeting.time);
  return `Every ${day} at ${time} ${meeting.timezone}`;
}

/** Check if a meeting is happening today */
export function isMeetingToday(
  meeting: Meeting,
  todayDayOfWeek: number
): boolean {
  return meeting.dayOfWeek === todayDayOfWeek;
}

/** Get meetings happening on a specific day of the week */
export function meetingsOnDay(
  meetings: Meeting[],
  dayOfWeek: number
): Meeting[] {
  return meetings.filter((m) => m.dayOfWeek === dayOfWeek);
}

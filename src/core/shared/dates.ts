/**
 * Pure date utility functions — no side effects.
 * All functions take explicit date inputs (no Date.now() calls).
 */

/** Format a Date to YYYY-MM-DD string */
export function toDateString(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/** Parse a YYYY-MM-DD string to a Date (midnight UTC) */
export function parseDate(dateStr: string): Date {
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day);
}

/** Get the day name for a day-of-week number (0=Sunday) */
export function dayName(dayOfWeek: number): string {
  const names = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return names[dayOfWeek] ?? "Unknown";
}

/** Get the short day name (Mon, Tue, etc.) */
export function shortDayName(dayOfWeek: number): string {
  const names = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return names[dayOfWeek] ?? "???";
}

/** Get dates for the current week (Mon-Sun) given a reference date */
export function weekDates(referenceDate: Date): string[] {
  const date = new Date(referenceDate);
  const dayOfWeek = date.getDay();
  const monday = new Date(date);
  monday.setDate(date.getDate() - ((dayOfWeek + 6) % 7));

  const dates: string[] = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    dates.push(toDateString(d));
  }
  return dates;
}

/** Calculate days between two date strings (YYYY-MM-DD) */
export function daysBetween(startStr: string, endStr: string): number {
  const start = parseDate(startStr);
  const end = parseDate(endStr);
  const diffMs = end.getTime() - start.getTime();
  return Math.round(diffMs / (1000 * 60 * 60 * 24));
}

/** Get the next occurrence of a given day-of-week from a reference date */
export function nextOccurrence(
  dayOfWeek: number,
  referenceDate: Date
): Date {
  const result = new Date(referenceDate);
  const currentDay = result.getDay();
  const daysUntil = (dayOfWeek - currentDay + 7) % 7;
  result.setDate(result.getDate() + (daysUntil === 0 ? 7 : daysUntil));
  return result;
}

/** Format time string "HH:MM" to "h:MM AM/PM" */
export function formatTime12h(time24: string): string {
  const [hoursStr, minutes] = time24.split(":");
  const hours = parseInt(hoursStr, 10);
  const ampm = hours >= 12 ? "PM" : "AM";
  const hours12 = hours % 12 || 12;
  return `${hours12}:${minutes} ${ampm}`;
}

/** Check if two date strings are the same day */
export function isSameDay(a: string, b: string): boolean {
  return a === b;
}

/** Get an array of date strings for a range (inclusive) */
export function dateRange(startStr: string, endStr: string): string[] {
  const dates: string[] = [];
  const current = parseDate(startStr);
  const end = parseDate(endStr);

  while (current <= end) {
    dates.push(toDateString(current));
    current.setDate(current.getDate() + 1);
  }
  return dates;
}

import { describe, it, expect } from "vitest";
import {
  toDateString,
  parseDate,
  dayName,
  shortDayName,
  weekDates,
  daysBetween,
  nextOccurrence,
  formatTime12h,
  isSameDay,
  dateRange,
} from "./dates";

describe("toDateString", () => {
  it("formats a date as YYYY-MM-DD", () => {
    expect(toDateString(new Date(2026, 0, 15))).toBe("2026-01-15");
  });

  it("pads single-digit months and days", () => {
    expect(toDateString(new Date(2026, 2, 5))).toBe("2026-03-05");
  });
});

describe("parseDate", () => {
  it("parses YYYY-MM-DD to a Date", () => {
    const date = parseDate("2026-06-15");
    expect(date.getFullYear()).toBe(2026);
    expect(date.getMonth()).toBe(5); // 0-indexed
    expect(date.getDate()).toBe(15);
  });
});

describe("dayName", () => {
  it("returns full day name for valid day", () => {
    expect(dayName(0)).toBe("Sunday");
    expect(dayName(3)).toBe("Wednesday");
    expect(dayName(6)).toBe("Saturday");
  });

  it("returns 'Unknown' for invalid day", () => {
    expect(dayName(7)).toBe("Unknown");
    expect(dayName(-1)).toBe("Unknown");
  });
});

describe("shortDayName", () => {
  it("returns short day name", () => {
    expect(shortDayName(0)).toBe("Sun");
    expect(shortDayName(1)).toBe("Mon");
  });

  it("returns '???' for invalid day", () => {
    expect(shortDayName(9)).toBe("???");
  });
});

describe("weekDates", () => {
  it("returns 7 date strings starting from Monday", () => {
    // 2026-02-11 is a Wednesday
    const dates = weekDates(new Date(2026, 1, 11));
    expect(dates).toHaveLength(7);
    expect(dates[0]).toBe("2026-02-09"); // Monday
    expect(dates[6]).toBe("2026-02-15"); // Sunday
  });

  it("handles Monday as input", () => {
    const dates = weekDates(new Date(2026, 1, 9));
    expect(dates[0]).toBe("2026-02-09");
  });

  it("handles Sunday as input", () => {
    const dates = weekDates(new Date(2026, 1, 15));
    expect(dates[0]).toBe("2026-02-09");
    expect(dates[6]).toBe("2026-02-15");
  });
});

describe("daysBetween", () => {
  it("calculates days between two dates", () => {
    expect(daysBetween("2026-01-01", "2026-01-10")).toBe(9);
  });

  it("returns 0 for same date", () => {
    expect(daysBetween("2026-01-01", "2026-01-01")).toBe(0);
  });

  it("returns negative for reversed dates", () => {
    expect(daysBetween("2026-01-10", "2026-01-01")).toBe(-9);
  });
});

describe("nextOccurrence", () => {
  it("returns the next occurrence of a given weekday", () => {
    // 2026-02-11 is Wednesday (day 3)
    const next = nextOccurrence(5, new Date(2026, 1, 11)); // next Friday
    expect(next.getDay()).toBe(5);
    expect(toDateString(next)).toBe("2026-02-13");
  });

  it("skips to next week if same day", () => {
    // Asking for Wednesday on a Wednesday gives next Wednesday
    const next = nextOccurrence(3, new Date(2026, 1, 11));
    expect(toDateString(next)).toBe("2026-02-18");
  });
});

describe("formatTime12h", () => {
  it("formats morning time", () => {
    expect(formatTime12h("09:30")).toBe("9:30 AM");
  });

  it("formats afternoon time", () => {
    expect(formatTime12h("14:00")).toBe("2:00 PM");
  });

  it("formats midnight as 12 AM", () => {
    expect(formatTime12h("00:00")).toBe("12:00 AM");
  });

  it("formats noon as 12 PM", () => {
    expect(formatTime12h("12:00")).toBe("12:00 PM");
  });
});

describe("isSameDay", () => {
  it("returns true for matching date strings", () => {
    expect(isSameDay("2026-01-01", "2026-01-01")).toBe(true);
  });

  it("returns false for different dates", () => {
    expect(isSameDay("2026-01-01", "2026-01-02")).toBe(false);
  });
});

describe("dateRange", () => {
  it("returns inclusive range of dates", () => {
    const range = dateRange("2026-01-01", "2026-01-04");
    expect(range).toEqual([
      "2026-01-01",
      "2026-01-02",
      "2026-01-03",
      "2026-01-04",
    ]);
  });

  it("returns single date for same start and end", () => {
    expect(dateRange("2026-01-01", "2026-01-01")).toEqual(["2026-01-01"]);
  });

  it("returns empty array when start is after end", () => {
    expect(dateRange("2026-01-05", "2026-01-01")).toEqual([]);
  });
});

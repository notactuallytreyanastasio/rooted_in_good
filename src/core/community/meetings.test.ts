import { describe, it, expect } from "vitest";
import {
  nextMeetingDate,
  upcomingMeetings,
  formatMeetingSchedule,
  isMeetingToday,
  meetingsOnDay,
} from "./meetings";
import type { Meeting } from "@/types";

const wednesdayMeeting: Meeting = {
  id: "m1",
  title: "Weekly Circle",
  description: "Weekly support",
  dayOfWeek: 3, // Wednesday
  time: "20:00",
  timezone: "America/New_York",
  meetingUrl: "https://zoom.us/test",
  isRecurring: true,
};

const saturdayMeeting: Meeting = {
  id: "m2",
  title: "Weekend Circle",
  description: "Weekend support",
  dayOfWeek: 6, // Saturday
  time: "10:00",
  timezone: "America/Los_Angeles",
  meetingUrl: "https://zoom.us/test2",
  isRecurring: true,
};

describe("nextMeetingDate", () => {
  it("returns correct next date when meeting is later this week", () => {
    // 2026-02-09 is Monday, meeting is Wednesday
    const ref = new Date(2026, 1, 9, 12, 0);
    const next = nextMeetingDate(wednesdayMeeting, ref);
    expect(next.getDay()).toBe(3);
    expect(next.getDate()).toBe(11);
    expect(next.getHours()).toBe(20);
  });

  it("returns next week when meeting day has passed", () => {
    // 2026-02-12 is Thursday, meeting is Wednesday
    const ref = new Date(2026, 1, 12, 12, 0);
    const next = nextMeetingDate(wednesdayMeeting, ref);
    expect(next.getDay()).toBe(3);
    expect(next.getDate()).toBe(18);
  });

  it("returns today if meeting hasn't happened yet today", () => {
    // Wednesday at 10am, meeting at 8pm
    const ref = new Date(2026, 1, 11, 10, 0);
    const next = nextMeetingDate(wednesdayMeeting, ref);
    expect(next.getDate()).toBe(11);
    expect(next.getHours()).toBe(20);
  });

  it("returns next week if meeting already passed today", () => {
    // Wednesday at 9pm, meeting was at 8pm
    const ref = new Date(2026, 1, 11, 21, 0);
    const next = nextMeetingDate(wednesdayMeeting, ref);
    expect(next.getDate()).toBe(18);
  });
});

describe("upcomingMeetings", () => {
  it("sorts by next occurrence", () => {
    // On a Thursday, Saturday comes before next Wednesday
    const ref = new Date(2026, 1, 12, 12, 0); // Thursday
    const sorted = upcomingMeetings([wednesdayMeeting, saturdayMeeting], ref);
    expect(sorted[0].id).toBe("m2"); // Saturday first
    expect(sorted[1].id).toBe("m1"); // Wednesday next
  });
});

describe("formatMeetingSchedule", () => {
  it("formats meeting schedule string", () => {
    const result = formatMeetingSchedule(wednesdayMeeting);
    expect(result).toBe("Every Wednesday at 8:00 PM America/New_York");
  });
});

describe("isMeetingToday", () => {
  it("returns true when day matches", () => {
    expect(isMeetingToday(wednesdayMeeting, 3)).toBe(true);
  });

  it("returns false when day doesn't match", () => {
    expect(isMeetingToday(wednesdayMeeting, 4)).toBe(false);
  });
});

describe("meetingsOnDay", () => {
  it("filters meetings by day", () => {
    const meetings = [wednesdayMeeting, saturdayMeeting];
    expect(meetingsOnDay(meetings, 3)).toHaveLength(1);
    expect(meetingsOnDay(meetings, 3)[0].id).toBe("m1");
  });

  it("returns empty when no meetings on that day", () => {
    expect(meetingsOnDay([wednesdayMeeting], 0)).toHaveLength(0);
  });
});

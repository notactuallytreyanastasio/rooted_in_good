import { describe, it, expect } from "vitest";
import {
  signUpSchema,
  signInSchema,
  checkInSchema,
  reflectionSchema,
  socialPostSchema,
  campaignSchema,
  shareableContentSchema,
} from "./validation";

describe("signUpSchema", () => {
  it("accepts valid input", () => {
    const result = signUpSchema.safeParse({
      name: "Jane Doe",
      email: "jane@example.com",
      password: "password123",
    });
    expect(result.success).toBe(true);
  });

  it("rejects empty name", () => {
    const result = signUpSchema.safeParse({
      name: "",
      email: "jane@example.com",
      password: "password123",
    });
    expect(result.success).toBe(false);
  });

  it("rejects invalid email", () => {
    const result = signUpSchema.safeParse({
      name: "Jane",
      email: "not-an-email",
      password: "password123",
    });
    expect(result.success).toBe(false);
  });

  it("rejects short password", () => {
    const result = signUpSchema.safeParse({
      name: "Jane",
      email: "jane@example.com",
      password: "short",
    });
    expect(result.success).toBe(false);
  });
});

describe("signInSchema", () => {
  it("accepts valid input", () => {
    const result = signInSchema.safeParse({
      email: "jane@example.com",
      password: "password123",
    });
    expect(result.success).toBe(true);
  });

  it("rejects empty password", () => {
    const result = signInSchema.safeParse({
      email: "jane@example.com",
      password: "",
    });
    expect(result.success).toBe(false);
  });
});

describe("checkInSchema", () => {
  it("accepts valid check-in", () => {
    const result = checkInSchema.safeParse({
      date: "2026-01-15",
      touchCompleted: true,
      listenCompleted: false,
      qualityTimeCompleted: true,
    });
    expect(result.success).toBe(true);
  });

  it("rejects invalid date format", () => {
    const result = checkInSchema.safeParse({
      date: "01/15/2026",
      touchCompleted: true,
      listenCompleted: true,
      qualityTimeCompleted: true,
    });
    expect(result.success).toBe(false);
  });

  it("accepts optional notes", () => {
    const result = checkInSchema.safeParse({
      date: "2026-01-15",
      touchCompleted: true,
      listenCompleted: true,
      qualityTimeCompleted: true,
      touchNotes: "Gave a long hug",
    });
    expect(result.success).toBe(true);
  });
});

describe("reflectionSchema", () => {
  it("accepts valid reflection", () => {
    const result = reflectionSchema.safeParse({
      weekId: "w1",
      content: "This week was transformative",
      mood: "hopeful",
    });
    expect(result.success).toBe(true);
  });

  it("rejects empty content", () => {
    const result = reflectionSchema.safeParse({
      weekId: "w1",
      content: "",
      mood: "good",
    });
    expect(result.success).toBe(false);
  });
});

describe("socialPostSchema", () => {
  it("accepts valid post", () => {
    const result = socialPostSchema.safeParse({
      platform: "INSTAGRAM",
      title: "New Post",
      content: "Great content here",
    });
    expect(result.success).toBe(true);
  });

  it("rejects invalid platform", () => {
    const result = socialPostSchema.safeParse({
      platform: "TWITTER",
      title: "Post",
      content: "Content",
    });
    expect(result.success).toBe(false);
  });
});

describe("campaignSchema", () => {
  it("accepts valid campaign", () => {
    const result = campaignSchema.safeParse({
      name: "Launch Campaign",
      description: "Book launch",
      startDate: "2026-03-01",
      endDate: "2026-03-31",
    });
    expect(result.success).toBe(true);
  });

  it("rejects empty name", () => {
    const result = campaignSchema.safeParse({
      name: "",
      description: "Desc",
      startDate: "2026-03-01",
      endDate: "2026-03-31",
    });
    expect(result.success).toBe(false);
  });
});

describe("shareableContentSchema", () => {
  it("accepts valid content", () => {
    const result = shareableContentSchema.safeParse({
      title: "Quote Card",
      caption: "20 seconds changes everything",
      hashtags: ["RootedInGood", "Parenting"],
      category: "quotes",
    });
    expect(result.success).toBe(true);
  });

  it("rejects empty hashtags description but accepts empty array", () => {
    const result = shareableContentSchema.safeParse({
      title: "Quote",
      caption: "Caption",
      hashtags: [],
      category: "quotes",
    });
    expect(result.success).toBe(true);
  });
});

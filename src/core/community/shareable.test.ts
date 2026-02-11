import { describe, it, expect } from "vitest";
import {
  filterByCategory,
  getCategories,
  sortByPopularity,
  formatHashtags,
  generateShareText,
  searchShareable,
} from "./shareable";
import type { ShareableContent } from "@/types";

const content: ShareableContent[] = [
  { id: "s1", title: "Touch Quote", imageUrl: "/img1.jpg", caption: "20 seconds changes everything", hashtags: ["RootedInGood", "ParentingTips"], category: "quotes", downloadCount: 50 },
  { id: "s2", title: "Listen Tip", imageUrl: "/img2.jpg", caption: "Put down the phone", hashtags: ["ActiveListening", "ParentChild"], category: "tips", downloadCount: 100 },
  { id: "s3", title: "Quality Time Idea", imageUrl: "/img3.jpg", caption: "No agenda needed", hashtags: ["QualityTime", "FamilyFirst"], category: "tips", downloadCount: 75 },
];

describe("filterByCategory", () => {
  it("filters by category", () => {
    expect(filterByCategory(content, "tips")).toHaveLength(2);
    expect(filterByCategory(content, "quotes")).toHaveLength(1);
  });

  it("returns empty for non-existent category", () => {
    expect(filterByCategory(content, "videos")).toHaveLength(0);
  });
});

describe("getCategories", () => {
  it("returns unique sorted categories", () => {
    expect(getCategories(content)).toEqual(["quotes", "tips"]);
  });

  it("returns empty for empty content", () => {
    expect(getCategories([])).toEqual([]);
  });
});

describe("sortByPopularity", () => {
  it("sorts by download count descending", () => {
    const sorted = sortByPopularity(content);
    expect(sorted[0].downloadCount).toBe(100);
    expect(sorted[2].downloadCount).toBe(50);
  });
});

describe("formatHashtags", () => {
  it("adds # prefix when missing", () => {
    expect(formatHashtags(["hello", "world"])).toBe("#hello #world");
  });

  it("preserves existing # prefix", () => {
    expect(formatHashtags(["#hello", "world"])).toBe("#hello #world");
  });

  it("returns empty string for empty array", () => {
    expect(formatHashtags([])).toBe("");
  });
});

describe("generateShareText", () => {
  it("combines caption and hashtags", () => {
    const text = generateShareText(content[0]);
    expect(text).toContain("20 seconds changes everything");
    expect(text).toContain("#RootedInGood");
    expect(text).toContain("#ParentingTips");
  });
});

describe("searchShareable", () => {
  it("searches by title", () => {
    expect(searchShareable(content, "touch")).toHaveLength(1);
  });

  it("searches by caption", () => {
    expect(searchShareable(content, "phone")).toHaveLength(1);
  });

  it("is case insensitive", () => {
    expect(searchShareable(content, "QUALITY")).toHaveLength(1);
  });
});

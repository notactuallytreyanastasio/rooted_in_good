import { describe, it, expect } from "vitest";
import {
  postsForDate,
  postsForDateRange,
  postsByPlatform,
  platformColor,
  platformName,
  movePost,
  draftPosts,
  postCountByStatus,
} from "./calendar";
import type { SocialPost } from "@/types";

const posts: SocialPost[] = [
  { id: "sp1", platform: "INSTAGRAM", title: "IG Post 1", content: "Content", scheduledFor: "2026-02-15T10:00:00Z", status: "SCHEDULED" },
  { id: "sp2", platform: "FACEBOOK", title: "FB Post 1", content: "Content", scheduledFor: "2026-02-15T14:00:00Z", status: "SCHEDULED" },
  { id: "sp3", platform: "TIKTOK", title: "TT Post 1", content: "Content", scheduledFor: "2026-02-16T12:00:00Z", status: "DRAFT" },
  { id: "sp4", platform: "INSTAGRAM", title: "IG Draft", content: "Content", status: "DRAFT" },
  { id: "sp5", platform: "FACEBOOK", title: "FB Posted", content: "Content", scheduledFor: "2026-02-10T10:00:00Z", status: "POSTED" },
];

describe("postsForDate", () => {
  it("returns posts scheduled for a specific date", () => {
    const result = postsForDate(posts, "2026-02-15");
    expect(result).toHaveLength(2);
  });

  it("returns empty for dates with no posts", () => {
    expect(postsForDate(posts, "2026-02-20")).toHaveLength(0);
  });

  it("excludes posts without scheduledFor", () => {
    expect(postsForDate(posts, "2026-02-15").every((p) => p.scheduledFor)).toBe(true);
  });
});

describe("postsForDateRange", () => {
  it("returns posts within range", () => {
    const result = postsForDateRange(posts, "2026-02-15", "2026-02-16");
    expect(result).toHaveLength(3);
  });

  it("returns empty for empty range", () => {
    expect(postsForDateRange(posts, "2026-03-01", "2026-03-05")).toHaveLength(0);
  });
});

describe("postsByPlatform", () => {
  it("filters by platform", () => {
    expect(postsByPlatform(posts, "INSTAGRAM")).toHaveLength(2);
    expect(postsByPlatform(posts, "FACEBOOK")).toHaveLength(2);
    expect(postsByPlatform(posts, "TIKTOK")).toHaveLength(1);
  });
});

describe("platformColor", () => {
  it("returns correct colors", () => {
    expect(platformColor("INSTAGRAM")).toBe("#E1306C");
    expect(platformColor("TIKTOK")).toBe("#000000");
    expect(platformColor("FACEBOOK")).toBe("#1877F2");
  });
});

describe("platformName", () => {
  it("returns display names", () => {
    expect(platformName("INSTAGRAM")).toBe("Instagram");
    expect(platformName("TIKTOK")).toBe("TikTok");
    expect(platformName("FACEBOOK")).toBe("Facebook");
  });
});

describe("movePost", () => {
  it("updates scheduled date", () => {
    const moved = movePost(posts[0], "2026-02-20");
    expect(moved.scheduledFor).toBe("2026-02-20");
    expect(moved.id).toBe("sp1");
  });

  it("changes DRAFT to SCHEDULED when given a date", () => {
    const draft: SocialPost = { ...posts[3] };
    const moved = movePost(draft, "2026-02-20");
    expect(moved.status).toBe("SCHEDULED");
  });

  it("preserves POSTED status", () => {
    const posted = movePost(posts[4], "2026-02-20");
    expect(posted.status).toBe("POSTED");
  });
});

describe("draftPosts", () => {
  it("returns only draft posts", () => {
    const drafts = draftPosts(posts);
    expect(drafts).toHaveLength(2);
    expect(drafts.every((p) => p.status === "DRAFT")).toBe(true);
  });
});

describe("postCountByStatus", () => {
  it("counts posts by status", () => {
    const counts = postCountByStatus(posts);
    expect(counts["SCHEDULED"]).toBe(2);
    expect(counts["DRAFT"]).toBe(2);
    expect(counts["POSTED"]).toBe(1);
  });
});

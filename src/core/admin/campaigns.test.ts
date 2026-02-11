import { describe, it, expect } from "vitest";
import {
  campaignProgress,
  campaignPosts,
  effectiveCampaignStatus,
  sortCampaignsByDate,
  filterCampaignsByStatus,
  campaignSummary,
} from "./campaigns";
import type { Campaign, SocialPost } from "@/types";

function makeCampaign(posts: Partial<SocialPost>[]): Campaign {
  return {
    id: "c1",
    name: "Launch Campaign",
    description: "Book launch",
    startDate: "2026-03-01",
    endDate: "2026-03-31",
    status: "ACTIVE",
    posts: posts.map((p, i) => ({
      id: `sp${i}`,
      platform: "INSTAGRAM" as const,
      title: `Post ${i}`,
      content: "Content",
      status: "DRAFT" as const,
      ...p,
    })),
  };
}

describe("campaignProgress", () => {
  it("returns 0 for no posts", () => {
    expect(campaignProgress(makeCampaign([]))).toBe(0);
  });

  it("returns 0 when no posts are posted", () => {
    expect(
      campaignProgress(makeCampaign([{ status: "DRAFT" }, { status: "SCHEDULED" }]))
    ).toBe(0);
  });

  it("returns 50 when half are posted", () => {
    expect(
      campaignProgress(makeCampaign([{ status: "POSTED" }, { status: "DRAFT" }]))
    ).toBe(50);
  });

  it("returns 100 when all are posted", () => {
    expect(
      campaignProgress(makeCampaign([{ status: "POSTED" }, { status: "POSTED" }]))
    ).toBe(100);
  });
});

describe("campaignPosts", () => {
  const posts: SocialPost[] = [
    { id: "sp1", platform: "INSTAGRAM", title: "Post", content: "", status: "DRAFT", campaignId: "c1" },
    { id: "sp2", platform: "FACEBOOK", title: "Post", content: "", status: "DRAFT", campaignId: "c2" },
    { id: "sp3", platform: "TIKTOK", title: "Post", content: "", status: "DRAFT", campaignId: "c1" },
  ];

  it("filters posts by campaign ID", () => {
    expect(campaignPosts(posts, "c1")).toHaveLength(2);
    expect(campaignPosts(posts, "c2")).toHaveLength(1);
  });

  it("returns empty for non-existent campaign", () => {
    expect(campaignPosts(posts, "c999")).toHaveLength(0);
  });
});

describe("effectiveCampaignStatus", () => {
  it("returns PLANNING for empty campaign", () => {
    expect(effectiveCampaignStatus(makeCampaign([]))).toBe("PLANNING");
  });

  it("returns PLANNING when all drafts", () => {
    expect(
      effectiveCampaignStatus(makeCampaign([{ status: "DRAFT" }]))
    ).toBe("PLANNING");
  });

  it("returns ACTIVE when some are scheduled/posted", () => {
    expect(
      effectiveCampaignStatus(
        makeCampaign([{ status: "POSTED" }, { status: "DRAFT" }])
      )
    ).toBe("ACTIVE");
  });

  it("returns COMPLETED when all are posted", () => {
    expect(
      effectiveCampaignStatus(
        makeCampaign([{ status: "POSTED" }, { status: "POSTED" }])
      )
    ).toBe("COMPLETED");
  });
});

describe("sortCampaignsByDate", () => {
  it("sorts by start date ascending", () => {
    const campaigns: Campaign[] = [
      { ...makeCampaign([]), id: "c2", startDate: "2026-04-01" },
      { ...makeCampaign([]), id: "c1", startDate: "2026-03-01" },
    ];
    const sorted = sortCampaignsByDate(campaigns);
    expect(sorted[0].id).toBe("c1");
    expect(sorted[1].id).toBe("c2");
  });
});

describe("filterCampaignsByStatus", () => {
  it("filters by status", () => {
    const campaigns: Campaign[] = [
      { ...makeCampaign([]), id: "c1", status: "ACTIVE" },
      { ...makeCampaign([]), id: "c2", status: "PLANNING" },
      { ...makeCampaign([]), id: "c3", status: "ACTIVE" },
    ];
    expect(filterCampaignsByStatus(campaigns, "ACTIVE")).toHaveLength(2);
    expect(filterCampaignsByStatus(campaigns, "PLANNING")).toHaveLength(1);
  });
});

describe("campaignSummary", () => {
  it("returns correct summary", () => {
    const campaign = makeCampaign([
      { status: "POSTED" },
      { status: "SCHEDULED" },
      { status: "DRAFT" },
    ]);
    const summary = campaignSummary(campaign);
    expect(summary.totalPosts).toBe(3);
    expect(summary.postedCount).toBe(1);
    expect(summary.scheduledCount).toBe(1);
    expect(summary.draftCount).toBe(1);
    expect(summary.progress).toBe(33);
  });
});

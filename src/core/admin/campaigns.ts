import type { Campaign, SocialPost, CampaignStatus } from "@/types";

/** Calculate campaign progress as percentage of posts that are POSTED */
export function campaignProgress(campaign: Campaign): number {
  if (campaign.posts.length === 0) return 0;
  const posted = campaign.posts.filter((p) => p.status === "POSTED").length;
  return Math.round((posted / campaign.posts.length) * 100);
}

/** Get posts belonging to a campaign */
export function campaignPosts(
  posts: SocialPost[],
  campaignId: string
): SocialPost[] {
  return posts.filter((p) => p.campaignId === campaignId);
}

/** Determine the effective status of a campaign based on its posts */
export function effectiveCampaignStatus(campaign: Campaign): CampaignStatus {
  if (campaign.posts.length === 0) return "PLANNING";
  const allPosted = campaign.posts.every((p) => p.status === "POSTED");
  if (allPosted) return "COMPLETED";
  const anyPosted = campaign.posts.some(
    (p) => p.status === "POSTED" || p.status === "SCHEDULED"
  );
  if (anyPosted) return "ACTIVE";
  return "PLANNING";
}

/** Sort campaigns by start date (upcoming first) */
export function sortCampaignsByDate(campaigns: Campaign[]): Campaign[] {
  return [...campaigns].sort(
    (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  );
}

/** Filter campaigns by status */
export function filterCampaignsByStatus(
  campaigns: Campaign[],
  status: CampaignStatus
): Campaign[] {
  return campaigns.filter((c) => c.status === status);
}

/** Get a campaign summary */
export interface CampaignSummary {
  id: string;
  name: string;
  status: CampaignStatus;
  progress: number;
  totalPosts: number;
  postedCount: number;
  scheduledCount: number;
  draftCount: number;
}

export function campaignSummary(campaign: Campaign): CampaignSummary {
  return {
    id: campaign.id,
    name: campaign.name,
    status: campaign.status,
    progress: campaignProgress(campaign),
    totalPosts: campaign.posts.length,
    postedCount: campaign.posts.filter((p) => p.status === "POSTED").length,
    scheduledCount: campaign.posts.filter((p) => p.status === "SCHEDULED")
      .length,
    draftCount: campaign.posts.filter((p) => p.status === "DRAFT").length,
  };
}

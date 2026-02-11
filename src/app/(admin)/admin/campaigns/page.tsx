"use client";

import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CampaignStatus } from "@/types";

interface CampaignData {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  status: CampaignStatus;
  postCount: number;
  completedPosts: number;
}

const sampleCampaigns: CampaignData[] = [
  {
    id: "1",
    name: "February Connection Challenge",
    description:
      "A month-long campaign encouraging parents to try one touchpoint per day and share their experience.",
    startDate: "2026-02-01",
    endDate: "2026-02-28",
    status: "ACTIVE",
    postCount: 12,
    completedPosts: 5,
  },
  {
    id: "2",
    name: "Book Launch Push",
    description:
      "Coordinated content across all platforms to promote the Rooted in Good Method book.",
    startDate: "2026-01-15",
    endDate: "2026-01-31",
    status: "COMPLETED",
    postCount: 18,
    completedPosts: 18,
  },
  {
    id: "3",
    name: "Spring Community Growth",
    description:
      "Grow Facebook group membership by 200 through targeted content and parent testimonials.",
    startDate: "2026-03-01",
    endDate: "2026-03-31",
    status: "PLANNING",
    postCount: 15,
    completedPosts: 0,
  },
  {
    id: "4",
    name: "20-Second Hug Week",
    description:
      "A viral challenge week where parents film and share their 20-second hugs with kids.",
    startDate: "2026-02-14",
    endDate: "2026-02-21",
    status: "ACTIVE",
    postCount: 7,
    completedPosts: 2,
  },
  {
    id: "5",
    name: "Holiday Connection Series",
    description:
      "A December series on staying connected during the busy holiday season.",
    startDate: "2025-12-01",
    endDate: "2025-12-25",
    status: "COMPLETED",
    postCount: 10,
    completedPosts: 10,
  },
];

const statusStyles: Record<
  CampaignStatus,
  { bg: string; text: string; label: string }
> = {
  PLANNING: {
    bg: "bg-soft-gray",
    text: "text-text-muted",
    label: "Planning",
  },
  ACTIVE: {
    bg: "bg-listen-light",
    text: "text-listen-dark",
    label: "Active",
  },
  COMPLETED: {
    bg: "bg-touch-light",
    text: "text-touch-dark",
    label: "Completed",
  },
};

function formatDateRange(start: string, end: string): string {
  const s = new Date(start + "T00:00:00");
  const e = new Date(end + "T00:00:00");
  const opts: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
  };
  const startStr = s.toLocaleDateString("en-US", opts);
  const endStr = e.toLocaleDateString("en-US", {
    ...opts,
    year: "numeric",
  });
  return `${startStr} - ${endStr}`;
}

export default function CampaignsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-text">Campaigns</h2>
          <p className="text-text-muted text-sm mt-1">
            Plan and track your marketing campaigns
          </p>
        </div>
        <button className="flex items-center gap-2 bg-touch text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-touch-dark transition-colors text-sm">
          <Plus size={18} />
          New Campaign
        </button>
      </div>

      {/* Campaign List */}
      <div className="space-y-4">
        {sampleCampaigns.map((campaign) => {
          const progress =
            campaign.postCount > 0
              ? Math.round(
                  (campaign.completedPosts / campaign.postCount) * 100
                )
              : 0;
          const style = statusStyles[campaign.status];

          return (
            <div
              key={campaign.id}
              className="bg-white rounded-2xl border border-border shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-semibold text-text truncate">
                      {campaign.name}
                    </h3>
                    <span
                      className={cn(
                        "text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0",
                        style.bg,
                        style.text
                      )}
                    >
                      {style.label}
                    </span>
                  </div>
                  <p className="text-sm text-text-muted line-clamp-1">
                    {campaign.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 mt-4">
                <div className="text-sm">
                  <span className="text-text-muted">Date Range: </span>
                  <span className="text-text font-medium">
                    {formatDateRange(campaign.startDate, campaign.endDate)}
                  </span>
                </div>
                <div className="text-sm">
                  <span className="text-text-muted">Posts: </span>
                  <span className="text-text font-medium">
                    {campaign.completedPosts} / {campaign.postCount}
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-text-muted">Progress</span>
                  <span className="text-xs font-medium text-text">
                    {progress}%
                  </span>
                </div>
                <div className="w-full h-2 bg-soft-gray rounded-full overflow-hidden">
                  <div
                    className={cn(
                      "h-full rounded-full transition-all",
                      campaign.status === "COMPLETED"
                        ? "bg-touch"
                        : campaign.status === "ACTIVE"
                        ? "bg-listen"
                        : "bg-border"
                    )}
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

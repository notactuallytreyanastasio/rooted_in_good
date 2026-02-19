"use client";

import { useState } from "react";
import { Plus, Filter } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Platform, PostStatus, SocialPost } from "@/types";

const samplePosts: SocialPost[] = [
  {
    id: "1",
    platform: "INSTAGRAM",
    title: "9-Minute Connection Challenge",
    content: "Try this: 2 minutes of focused support, 5 minutes of listening, 2 minutes of closeness...",
    scheduledFor: "2026-02-14T10:00:00",
    status: "SCHEDULED",
  },
  {
    id: "2",
    platform: "TIKTOK",
    title: "Listen Without Fixing - Parenting Tip",
    content: "The most powerful thing you can say to your child...",
    scheduledFor: "2026-02-15T14:00:00",
    status: "SCHEDULED",
  },
  {
    id: "3",
    platform: "FACEBOOK",
    title: "Weekly Win Wednesday - Share Your Moment",
    content: "This week in our community, parents shared incredible...",
    scheduledFor: "2026-02-12T09:00:00",
    status: "POSTED",
  },
  {
    id: "4",
    platform: "INSTAGRAM",
    title: "Presence Over Perfection - Quote Card",
    content: "You don't need to be a perfect parent...",
    status: "DRAFT",
  },
  {
    id: "5",
    platform: "TIKTOK",
    title: "Physical Connection Ideas for Teens",
    content: "Struggling to connect with your teenager?...",
    scheduledFor: "2026-02-18T16:00:00",
    status: "SCHEDULED",
  },
  {
    id: "6",
    platform: "FACEBOOK",
    title: "Meeting Reminder - Tuesday Circle",
    content: "Join us this Tuesday at 7 PM EST for our weekly...",
    scheduledFor: "2026-02-10T08:00:00",
    status: "POSTED",
  },
  {
    id: "7",
    platform: "INSTAGRAM",
    title: "The Science Behind 9 Minutes",
    content: "Did you know that just 9 intentional minutes a day can transform your relationship?...",
    status: "DRAFT",
  },
  {
    id: "8",
    platform: "FACEBOOK",
    title: "February Connection Challenge Kickoff",
    content: "This month, we're challenging every parent to...",
    scheduledFor: "2026-02-01T07:00:00",
    status: "POSTED",
  },
];

const platformColors: Record<Platform, string> = {
  INSTAGRAM: "#E1306C",
  TIKTOK: "#000000",
  FACEBOOK: "#1877F2",
};

const statusStyles: Record<PostStatus, { bg: string; text: string }> = {
  DRAFT: { bg: "bg-soft-gray", text: "text-text-muted" },
  SCHEDULED: { bg: "bg-listen-light", text: "text-listen-dark" },
  POSTED: { bg: "bg-touch-light", text: "text-touch-dark" },
};

export default function ContentPage() {
  const [filterPlatform, setFilterPlatform] = useState<Platform | "ALL">(
    "ALL"
  );
  const [filterStatus, setFilterStatus] = useState<PostStatus | "ALL">("ALL");

  const filteredPosts = samplePosts.filter((post) => {
    if (filterPlatform !== "ALL" && post.platform !== filterPlatform)
      return false;
    if (filterStatus !== "ALL" && post.status !== filterStatus) return false;
    return true;
  });

  function formatDate(iso?: string): string {
    if (!iso) return "--";
    const d = new Date(iso);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-text">Post Management</h2>
          <p className="text-text-muted text-sm mt-1">
            Create and manage your social media posts
          </p>
        </div>
        <button className="flex items-center gap-2 bg-touch text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-touch-dark transition-colors text-sm">
          <Plus size={18} />
          Create New Post
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <Filter size={16} className="text-text-muted" />
          <span className="text-sm text-text-muted font-medium">Filter:</span>
        </div>

        <select
          value={filterPlatform}
          onChange={(e) =>
            setFilterPlatform(e.target.value as Platform | "ALL")
          }
          className="bg-white border border-border rounded-lg px-3 py-2 text-sm text-text"
        >
          <option value="ALL">All Platforms</option>
          <option value="INSTAGRAM">Instagram</option>
          <option value="TIKTOK">TikTok</option>
          <option value="FACEBOOK">Facebook</option>
        </select>

        <select
          value={filterStatus}
          onChange={(e) =>
            setFilterStatus(e.target.value as PostStatus | "ALL")
          }
          className="bg-white border border-border rounded-lg px-3 py-2 text-sm text-text"
        >
          <option value="ALL">All Statuses</option>
          <option value="DRAFT">Draft</option>
          <option value="SCHEDULED">Scheduled</option>
          <option value="POSTED">Posted</option>
        </select>
      </div>

      {/* Posts Table */}
      <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wide px-6 py-4">
                  Title
                </th>
                <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wide px-6 py-4">
                  Platform
                </th>
                <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wide px-6 py-4">
                  Scheduled Date
                </th>
                <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wide px-6 py-4">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredPosts.map((post) => (
                <tr
                  key={post.id}
                  className="hover:bg-soft-gray/50 transition-colors cursor-pointer"
                >
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-text">
                      {post.title}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{
                          backgroundColor: platformColors[post.platform],
                        }}
                      />
                      <span className="text-sm text-text">
                        {post.platform.charAt(0) +
                          post.platform.slice(1).toLowerCase()}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-text-muted">
                      {formatDate(post.scheduledFor)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={cn(
                        "text-xs font-semibold px-2.5 py-1 rounded-full",
                        statusStyles[post.status].bg,
                        statusStyles[post.status].text
                      )}
                    >
                      {post.status.charAt(0) +
                        post.status.slice(1).toLowerCase()}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-text-muted">
              No posts match your filters. Try adjusting your selection.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

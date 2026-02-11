import type { SocialPost, Platform } from "@/types";
import { toDateString } from "@/core/shared/dates";

/** Get posts scheduled for a specific date */
export function postsForDate(
  posts: SocialPost[],
  date: string
): SocialPost[] {
  return posts.filter((p) => {
    if (!p.scheduledFor) return false;
    return toDateString(new Date(p.scheduledFor)) === date;
  });
}

/** Get posts for a date range */
export function postsForDateRange(
  posts: SocialPost[],
  startDate: string,
  endDate: string
): SocialPost[] {
  return posts.filter((p) => {
    if (!p.scheduledFor) return false;
    const postDate = toDateString(new Date(p.scheduledFor));
    return postDate >= startDate && postDate <= endDate;
  });
}

/** Get posts filtered by platform */
export function postsByPlatform(
  posts: SocialPost[],
  platform: Platform
): SocialPost[] {
  return posts.filter((p) => p.platform === platform);
}

/** Get the color associated with a platform */
export function platformColor(platform: Platform): string {
  const colors: Record<Platform, string> = {
    INSTAGRAM: "#E1306C",
    TIKTOK: "#000000",
    FACEBOOK: "#1877F2",
  };
  return colors[platform];
}

/** Get platform display name */
export function platformName(platform: Platform): string {
  const names: Record<Platform, string> = {
    INSTAGRAM: "Instagram",
    TIKTOK: "TikTok",
    FACEBOOK: "Facebook",
  };
  return names[platform];
}

/** Move a post to a new scheduled date (returns updated post) */
export function movePost(
  post: SocialPost,
  newDate: string
): SocialPost {
  return {
    ...post,
    scheduledFor: newDate,
    status: post.status === "DRAFT" ? "SCHEDULED" : post.status,
  };
}

/** Get draft posts (unscheduled) */
export function draftPosts(posts: SocialPost[]): SocialPost[] {
  return posts.filter((p) => p.status === "DRAFT");
}

/** Count posts by status */
export function postCountByStatus(
  posts: SocialPost[]
): Record<string, number> {
  return posts.reduce(
    (acc, post) => {
      acc[post.status] = (acc[post.status] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );
}

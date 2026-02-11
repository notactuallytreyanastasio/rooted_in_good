import type { ShareableContent } from "@/types";

/** Filter shareable content by category */
export function filterByCategory(
  content: ShareableContent[],
  category: string
): ShareableContent[] {
  return content.filter((c) => c.category === category);
}

/** Get unique categories from content */
export function getCategories(content: ShareableContent[]): string[] {
  return [...new Set(content.map((c) => c.category))].sort();
}

/** Sort by most downloaded */
export function sortByPopularity(
  content: ShareableContent[]
): ShareableContent[] {
  return [...content].sort((a, b) => b.downloadCount - a.downloadCount);
}

/** Sort by newest first */
export function sortByNewest(
  content: ShareableContent[]
): ShareableContent[] {
  return [...content].sort((a, b) => b.id.localeCompare(a.id));
}

/** Format hashtags for display */
export function formatHashtags(hashtags: string[]): string {
  return hashtags.map((h) => (h.startsWith("#") ? h : `#${h}`)).join(" ");
}

/** Generate a share caption with hashtags */
export function generateShareText(item: ShareableContent): string {
  const hashtags = Array.isArray(item.hashtags)
    ? item.hashtags
    : JSON.parse(item.hashtags as unknown as string);
  return `${item.caption}\n\n${formatHashtags(hashtags)}`;
}

/** Search shareable content by title or caption */
export function searchShareable(
  content: ShareableContent[],
  query: string
): ShareableContent[] {
  const lower = query.toLowerCase();
  return content.filter(
    (c) =>
      c.title.toLowerCase().includes(lower) ||
      c.caption.toLowerCase().includes(lower)
  );
}

export const TOUCHPOINTS = {
  touch: {
    name: "Touch",
    duration: 20,
    unit: "seconds" as const,
    color: "touch",
    description: "20 seconds of physical connection",
    icon: "Heart",
  },
  listen: {
    name: "Listen",
    duration: 10,
    unit: "minutes" as const,
    color: "listen",
    description: "10 minutes of active listening",
    icon: "Ear",
  },
  qualityTime: {
    name: "Quality Time",
    duration: 20,
    unit: "minutes" as const,
    color: "quality",
    description: "20 minutes together without goals",
    icon: "Users",
  },
} as const;

export const TOTAL_WEEKS = 8;

export const PLATFORMS = {
  instagram: { name: "Instagram", color: "#E1306C" },
  tiktok: { name: "TikTok", color: "#000000" },
  facebook: { name: "Facebook", color: "#1877F2" },
} as const;

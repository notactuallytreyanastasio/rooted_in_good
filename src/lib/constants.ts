export const TOUCHPOINTS = {
  touch: {
    name: "Focused Support",
    duration: 2,
    unit: "minutes" as const,
    color: "touch",
    description: "2 minutes of proactive support before overwhelm",
    icon: "Heart",
  },
  listen: {
    name: "Intentional Listening",
    duration: 5,
    unit: "minutes" as const,
    color: "listen",
    description: "5 minutes of undivided, judgment-free listening",
    icon: "Ear",
  },
  qualityTime: {
    name: "Physical Connection",
    duration: 2,
    unit: "minutes" as const,
    color: "quality",
    description: "2 minutes of closeness, comfort, or calm",
    icon: "Users",
  },
} as const;

export const TOTAL_WEEKS = 8;

export const PLATFORMS = {
  instagram: { name: "Instagram", color: "#E1306C" },
  tiktok: { name: "TikTok", color: "#000000" },
  facebook: { name: "Facebook", color: "#1877F2" },
} as const;

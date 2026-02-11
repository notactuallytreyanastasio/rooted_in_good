// ── Auth ──
export type UserRole = "USER" | "ADMIN";

export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
  role: UserRole;
}

// ── Touchpoints ──
export type TouchpointType = "touch" | "listen" | "qualityTime";

export interface DailyCheckIn {
  id: string;
  userId: string;
  date: string; // ISO date string YYYY-MM-DD
  touchCompleted: boolean;
  listenCompleted: boolean;
  qualityTimeCompleted: boolean;
  touchNotes?: string;
  listenNotes?: string;
  qualityTimeNotes?: string;
}

// ── Journey ──
export interface JourneyWeek {
  id: string;
  weekNumber: number;
  title: string;
  description: string;
  theme: string;
  touchFocus: string;
  listenFocus: string;
  qualityTimeFocus: string;
  days: JourneyDay[];
}

export interface JourneyDay {
  id: string;
  weekId: string;
  dayNumber: number;
  touchPrompt: string;
  listenPrompt: string;
  qualityTimePrompt: string;
  tip: string;
}

export interface Reflection {
  id: string;
  userId: string;
  weekId: string;
  content: string;
  mood: string;
}

// ── Shop ──
export type ProductType = "BOOK" | "WORKBOOK" | "COURSE";

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  type: ProductType;
  imageUrl: string;
  previewUrl?: string;
  downloadUrl?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Purchase {
  id: string;
  userId: string;
  productId: string;
  status: "COMPLETED";
  createdAt: string;
}

// ── Community ──
export interface Meeting {
  id: string;
  title: string;
  description: string;
  dayOfWeek: number; // 0=Sunday, 6=Saturday
  time: string; // HH:MM 24hr
  timezone: string;
  meetingUrl: string;
  isRecurring: boolean;
}

export interface ShareableContent {
  id: string;
  title: string;
  imageUrl: string;
  caption: string;
  hashtags: string[];
  category: string;
  downloadCount: number;
}

// ── Admin / Marketing ──
export type Platform = "INSTAGRAM" | "TIKTOK" | "FACEBOOK";
export type PostStatus = "DRAFT" | "SCHEDULED" | "POSTED";
export type CampaignStatus = "PLANNING" | "ACTIVE" | "COMPLETED";

export interface SocialPost {
  id: string;
  platform: Platform;
  title: string;
  content: string;
  imageUrl?: string;
  scheduledFor?: string; // ISO datetime
  status: PostStatus;
  campaignId?: string;
}

export interface Campaign {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  status: CampaignStatus;
  posts: SocialPost[];
}

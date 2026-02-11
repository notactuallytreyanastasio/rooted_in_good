// Static data for GitHub Pages demo build (no Prisma/DB needed)

export const staticProducts = [
  {
    id: "1",
    name: "The Rooted in Good Method — The Book",
    slug: "the-book",
    description:
      "The complete guide to transforming your relationship with your child through 3 simple daily touchpoints. Includes the full 8-week guided journey, real parent stories, and the science behind connection.",
    price: 24.99,
    type: "BOOK",
    imageUrl: "/images/book-cover.jpg",
    previewUrl: null,
    downloadUrl: null,
  },
  {
    id: "2",
    name: "Daily Touchpoint Workbook",
    slug: "daily-workbook",
    description:
      "A hands-on companion to the book. Track your daily touchpoints, journal your reflections, and document your family's growth over 8 weeks.",
    price: 14.99,
    type: "WORKBOOK",
    imageUrl: "/images/workbook-cover.jpg",
    previewUrl: null,
    downloadUrl: null,
  },
  {
    id: "3",
    name: "Family Connection Cards",
    slug: "connection-cards",
    description:
      "52 beautifully designed cards with touchpoint activities, conversation starters, and quality time ideas. Pull one card each week for a full year of connection.",
    price: 19.99,
    type: "WORKBOOK",
    imageUrl: "/images/cards-cover.jpg",
    previewUrl: null,
    downloadUrl: null,
  },
  {
    id: "4",
    name: "The Deep Roots Course",
    slug: "deep-roots-course",
    description:
      "An online video course that goes deeper into the method. Includes expert interviews, guided exercises, and a private community. 12 modules of transformative content.",
    price: 49.99,
    type: "COURSE",
    imageUrl: "/images/course-cover.jpg",
    previewUrl: null,
    downloadUrl: null,
  },
];

export const staticWeeks = [
  {
    weekNumber: 1,
    title: "First Steps",
    description:
      "Begin your journey with simple, gentle touchpoints. This week is about showing up — nothing more.",
    theme: "Starting Small",
    touchFocus:
      "A simple hand on the shoulder, a hug, or holding hands for 20 seconds.",
    listenFocus:
      "Put your phone down. Make eye contact. Let them talk without fixing anything.",
    qualityTimeFocus:
      "Sit together. No agenda. Follow their lead — even if it's just sitting in silence.",
  },
  {
    weekNumber: 2,
    title: "Building Rhythm",
    description:
      "Now that you've started, focus on consistency. The goal isn't perfection — it's rhythm.",
    theme: "Consistency Over Perfection",
    touchFocus:
      "Make physical affection part of your daily transitions — hello, goodbye, goodnight.",
    listenFocus:
      "Practice listening without offering solutions. Just be a mirror.",
    qualityTimeFocus:
      "Find your family's natural rhythm — mornings, after school, or bedtime.",
  },
  {
    weekNumber: 3,
    title: "Going Deeper",
    description:
      "You've built a rhythm. Now it's time to deepen the quality of each touchpoint.",
    theme: "Depth Over Duration",
    touchFocus:
      "Be fully present during touch. Notice how it feels for both of you.",
    listenFocus:
      "Start listening for what's underneath the words — emotions, fears, hopes.",
    qualityTimeFocus:
      "Try new activities that challenge you both to be present.",
  },
  {
    weekNumber: 4,
    title: "Navigating Hard Days",
    description:
      "Connection matters most when it's hardest. This week prepares you for the tough moments.",
    theme: "Connection Through Conflict",
    touchFocus:
      "Use touch to de-escalate and reconnect after hard moments.",
    listenFocus:
      "Practice listening during conflict — when you most want to talk.",
    qualityTimeFocus:
      "Reconnect after ruptures. Every conflict is a chance to repair.",
  },
  {
    weekNumber: 5,
    title: "Expanding the Circle",
    description:
      "Bring the method into your wider life — routines, siblings, extended family.",
    theme: "Connection Spreads",
    touchFocus: "Incorporate touch into daily routines naturally.",
    listenFocus: "Practice listening across multiple relationships.",
    qualityTimeFocus:
      "Create family rituals that everyone looks forward to.",
  },
  {
    weekNumber: 6,
    title: "Finding Your Voice",
    description:
      "This week focuses on authentic communication — saying what you mean with love.",
    theme: "Honest Connection",
    touchFocus:
      "Use touch to say what words can't — comfort, pride, love, support.",
    listenFocus:
      "Practice hearing hard truths and giving honest responses with kindness.",
    qualityTimeFocus:
      "Create space for real conversations during quality time.",
  },
  {
    weekNumber: 7,
    title: "Letting Go of Perfect",
    description:
      "Release the pressure of perfection. Connection is messy, real, and beautiful.",
    theme: "Grace Over Perfection",
    touchFocus:
      "Touch doesn't have to be planned. Let it happen naturally.",
    listenFocus:
      "You won't always listen well. Forgive yourself and try again.",
    qualityTimeFocus:
      "Quality time includes boring moments, failed activities, and quiet.",
  },
  {
    weekNumber: 8,
    title: "Rooted for Life",
    description:
      "These roots are yours now. This isn't the end — it's how your family lives.",
    theme: "Roots That Last",
    touchFocus: "Touch is now part of who your family is.",
    listenFocus: "Listening is your superpower. Keep using it.",
    qualityTimeFocus:
      "Quality time isn't a task anymore — it's a way of life.",
  },
];

export const staticMeetings = [
  {
    id: "1",
    title: "Weekly Roots Circle — East Coast",
    description:
      "A weekly gathering for parents walking the Rooted in Good journey together. Share wins, struggles, and support each other. No judgment, just connection. Like AA for parents who want to do better.",
    dayOfWeek: 3,
    time: "20:00",
    timezone: "America/New_York",
    meetingUrl: "https://zoom.us/placeholder",
    isRecurring: true,
  },
  {
    id: "2",
    title: "Weekend Roots Circle — West Coast",
    description:
      "Saturday morning support circle for parents. Bring your coffee and your real self. We share, listen, and grow together.",
    dayOfWeek: 6,
    time: "10:00",
    timezone: "America/Los_Angeles",
    meetingUrl: "https://zoom.us/placeholder",
    isRecurring: true,
  },
  {
    id: "3",
    title: "New Parents Welcome Session",
    description:
      "Just starting out? This session introduces you to the method and the community. Ask questions, meet other parents, and take your first step.",
    dayOfWeek: 1,
    time: "19:00",
    timezone: "America/New_York",
    meetingUrl: "https://zoom.us/placeholder",
    isRecurring: true,
  },
];

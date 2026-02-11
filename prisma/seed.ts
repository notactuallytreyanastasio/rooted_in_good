import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const weeks = [
  {
    weekNumber: 1,
    title: "First Steps",
    description: "Begin your journey with simple, gentle touchpoints. This week is about showing up — nothing more.",
    theme: "Starting Small",
    touchFocus: "A simple hand on the shoulder, a hug, or holding hands for 20 seconds.",
    listenFocus: "Put your phone down. Make eye contact. Let them talk without fixing anything.",
    qualityTimeFocus: "Sit together. No agenda. Follow their lead — even if it's just sitting in silence.",
    days: [
      { dayNumber: 1, touchPrompt: "Place your hand gently on their shoulder and count to 20.", listenPrompt: "Ask 'What was the best part of your day?' and just listen.", qualityTimePrompt: "Sit on the floor with them. Let them decide what to do.", tip: "It's okay if it feels awkward. You're building a new habit." },
      { dayNumber: 2, touchPrompt: "Give a long, slow hug. Let them pull away first.", listenPrompt: "Ask 'Is there anything on your mind?' and wait patiently.", qualityTimePrompt: "Take a walk together with no destination.", tip: "Silence is fine. Presence matters more than words." },
      { dayNumber: 3, touchPrompt: "Hold their hand while walking or sitting together.", listenPrompt: "Ask about something they're interested in. Let them teach you.", qualityTimePrompt: "Play a simple game they choose.", tip: "You don't need to be perfect. You need to be present." },
      { dayNumber: 4, touchPrompt: "Gently rub their back for 20 seconds.", listenPrompt: "At dinner, ask each person to share one thing. Listen without commenting.", qualityTimePrompt: "Draw or color together. No instructions needed.", tip: "Notice how they respond to your presence. Every child is different." },
      { dayNumber: 5, touchPrompt: "High-five, fist bump, or any playful touch they enjoy.", listenPrompt: "Before bed, ask 'Anything you want to talk about?'", qualityTimePrompt: "Read together — or just sit side by side while they read.", tip: "Some days will feel easy. Some won't. Both count." },
      { dayNumber: 6, touchPrompt: "Sit close enough that your shoulders or legs touch.", listenPrompt: "Listen to them tell a story without correcting details.", qualityTimePrompt: "Cook or prepare a snack together.", tip: "You're already changing things just by trying." },
      { dayNumber: 7, touchPrompt: "Cuddle on the couch, or give an extra-long goodnight hug.", listenPrompt: "Ask 'How did this week feel?' and reflect together.", qualityTimePrompt: "Free choice — do whatever feels natural together.", tip: "Week 1 done. Reflect on what you noticed — in them and in yourself." },
    ],
  },
  {
    weekNumber: 2,
    title: "Building Rhythm",
    description: "Now that you've started, focus on consistency. The goal isn't perfection — it's rhythm.",
    theme: "Consistency Over Perfection",
    touchFocus: "Make physical affection part of your daily transitions — hello, goodbye, goodnight.",
    listenFocus: "Practice listening without offering solutions. Just be a mirror.",
    qualityTimeFocus: "Find your family's natural rhythm — mornings, after school, or bedtime.",
    days: [
      { dayNumber: 1, touchPrompt: "Greet them with a hug when they wake up.", listenPrompt: "Ask 'What are you looking forward to today?'", qualityTimePrompt: "Have breakfast together without screens.", tip: "Morning touchpoints set the tone for the whole day." },
      { dayNumber: 2, touchPrompt: "Hold hands during a walk or car ride.", listenPrompt: "Ask about a friend or classmate. Listen for feelings, not facts.", qualityTimePrompt: "Build something together — Legos, a puzzle, anything.", tip: "You're training your brain to prioritize connection." },
      { dayNumber: 3, touchPrompt: "A gentle pat on the head or tousle of hair.", listenPrompt: "If they complain about something, resist fixing it. Say 'That sounds hard.'", qualityTimePrompt: "Go outside together with no plan.", tip: "Empathy before solutions. Always." },
      { dayNumber: 4, touchPrompt: "Dance together — even just 20 seconds of silly dancing.", listenPrompt: "Ask 'What's something you wish I knew about you?'", qualityTimePrompt: "Look through old photos together.", tip: "Vulnerability invites vulnerability." },
      { dayNumber: 5, touchPrompt: "Give a piggyback ride or carry them (if they're small enough!).", listenPrompt: "Let them vent without judgment about school or friends.", qualityTimePrompt: "Play their favorite game — even if you don't love it.", tip: "Entering their world shows you value what they value." },
      { dayNumber: 6, touchPrompt: "Butterfly kisses, eskimo kisses, or make up your own.", listenPrompt: "Share something about YOUR day, then ask about theirs.", qualityTimePrompt: "Bake cookies or make a craft together.", tip: "Mutual sharing builds equal relationships." },
      { dayNumber: 7, touchPrompt: "Group family hug — include everyone.", listenPrompt: "Reflect together: 'What was your favorite moment this week?'", qualityTimePrompt: "Family movie or game night — their pick.", tip: "Two weeks in. Notice: is it getting easier? That's the rhythm building." },
    ],
  },
  {
    weekNumber: 3,
    title: "Going Deeper",
    description: "You've built a rhythm. Now it's time to deepen the quality of each touchpoint.",
    theme: "Depth Over Duration",
    touchFocus: "Be fully present during touch. Notice how it feels for both of you.",
    listenFocus: "Start listening for what's underneath the words — emotions, fears, hopes.",
    qualityTimeFocus: "Try new activities that challenge you both to be present.",
    days: [
      { dayNumber: 1, touchPrompt: "Hold their face gently in your hands and look into their eyes.", listenPrompt: "Ask 'What's something that's been worrying you?'", qualityTimePrompt: "Try a new activity neither of you has done before.", tip: "Deeper connection requires more vulnerability from you too." },
      { dayNumber: 2, touchPrompt: "Give a foot or hand massage.", listenPrompt: "When they share, reflect back: 'It sounds like you feel...'", qualityTimePrompt: "Garden, plant something, or explore nature together.", tip: "Naming emotions helps children develop emotional intelligence." },
      { dayNumber: 3, touchPrompt: "Linked arms while walking somewhere together.", listenPrompt: "Ask 'If you could change one thing about our family, what would it be?'", qualityTimePrompt: "Write a story together — take turns adding sentences.", tip: "Brave questions lead to brave conversations." },
      { dayNumber: 4, touchPrompt: "Trace letters or shapes on each other's backs.", listenPrompt: "Ask about a dream or goal they have. Take it seriously.", qualityTimePrompt: "Star gaze, cloud watch, or just sit outside together.", tip: "Their dreams deserve your full attention, no matter how small they seem." },
      { dayNumber: 5, touchPrompt: "Teach them a secret handshake — make it yours.", listenPrompt: "Share a fear of your own. Ask if they have fears too.", qualityTimePrompt: "Visit a library, park, or somewhere new together.", tip: "Your vulnerability gives them permission to be vulnerable." },
      { dayNumber: 6, touchPrompt: "Rock them gently (any age!) or sway together to music.", listenPrompt: "Ask 'Who is someone you admire? Why?'", qualityTimePrompt: "Make art together — paint, draw, sculpt with clay.", tip: "Creative activities lower defenses and open hearts." },
      { dayNumber: 7, touchPrompt: "Long embrace while you tell them something you love about them.", listenPrompt: "Week 3 reflection: 'What have you learned about us this week?'", qualityTimePrompt: "Free choice — follow the joy.", tip: "Three weeks. You're not just building habits — you're building a legacy." },
    ],
  },
  {
    weekNumber: 4,
    title: "Navigating Hard Days",
    description: "Connection matters most when it's hardest. This week prepares you for the tough moments.",
    theme: "Connection Through Conflict",
    touchFocus: "Use touch to de-escalate and reconnect after hard moments.",
    listenFocus: "Practice listening during conflict — when you most want to talk.",
    qualityTimeFocus: "Reconnect after ruptures. Every conflict is a chance to repair.",
    days: [
      { dayNumber: 1, touchPrompt: "After any tense moment today, offer a hug before words.", listenPrompt: "If they're upset, sit quietly nearby until they're ready to talk.", qualityTimePrompt: "Do something calming together — puzzles, coloring, walking.", tip: "Co-regulation before correction. Connection before direction." },
      { dayNumber: 2, touchPrompt: "Place your hand on their heart. Say 'I'm here.'", listenPrompt: "Ask 'What do you need from me right now?'", qualityTimePrompt: "Cook a comfort meal together.", tip: "Sometimes they don't need advice. They need to feel safe." },
      { dayNumber: 3, touchPrompt: "Offer physical comfort without expecting them to accept it.", listenPrompt: "When you disagree, say 'Help me understand your side.'", qualityTimePrompt: "Write letters to each other about something you appreciate.", tip: "Repair attempts matter more than never making mistakes." },
      { dayNumber: 4, touchPrompt: "Gently squeeze their hand three times (I-love-you signal).", listenPrompt: "After a hard moment, ask 'How did that feel for you?'", qualityTimePrompt: "Physical activity together — bike ride, sports, dancing.", tip: "Movement helps process difficult emotions." },
      { dayNumber: 5, touchPrompt: "Sit back-to-back and breathe together for 20 seconds.", listenPrompt: "Practice: listen to their frustration without defending yourself.", qualityTimePrompt: "Build a fort or create a cozy space together.", tip: "Safe spaces — physical and emotional — heal wounds." },
      { dayNumber: 6, touchPrompt: "Thumb wars, arm wrestling, or playful physical contact.", listenPrompt: "Ask 'Is there something I did this week that hurt you?'", qualityTimePrompt: "Do a random act of kindness together for someone else.", tip: "Serving others together builds shared purpose." },
      { dayNumber: 7, touchPrompt: "Family pile — everyone cuddles together.", listenPrompt: "Reflect: 'What did we learn about handling hard moments?'", qualityTimePrompt: "Celebrate making it through a challenging week together.", tip: "Week 4. You've faced the hard parts. The roots are growing deeper." },
    ],
  },
  {
    weekNumber: 5,
    title: "Expanding the Circle",
    description: "Bring the method into your wider life — routines, siblings, extended family.",
    theme: "Connection Spreads",
    touchFocus: "Incorporate touch into daily routines naturally.",
    listenFocus: "Practice listening across multiple relationships.",
    qualityTimeFocus: "Create family rituals that everyone looks forward to.",
    days: [
      { dayNumber: 1, touchPrompt: "Start a goodbye ritual — a specific hug or handshake for partings.", listenPrompt: "Have a one-on-one check-in with each child (if multiple).", qualityTimePrompt: "Start a weekly family meeting — everyone gets a voice.", tip: "Rituals create security. Children thrive on predictability." },
      { dayNumber: 2, touchPrompt: "Incorporate touch into morning routine — hug at breakfast.", listenPrompt: "Call or visit a grandparent/relative and model listening.", qualityTimePrompt: "Plan a future family adventure together.", tip: "When children see you listen to others, they learn by watching." },
      { dayNumber: 3, touchPrompt: "Create a bedtime touch ritual if you haven't already.", listenPrompt: "Ask siblings to share something they appreciate about each other.", qualityTimePrompt: "Do a household project together — everyone contributes.", tip: "Sibling connection is just as important as parent-child connection." },
      { dayNumber: 4, touchPrompt: "Surprise them with an unexpected hug in the middle of the day.", listenPrompt: "Listen to their opinion about a family decision. Include them.", qualityTimePrompt: "Have a picnic — indoors or outdoors.", tip: "Including children in decisions teaches them their voice matters." },
      { dayNumber: 5, touchPrompt: "Play a physical game — tag, wrestling, tickling.", listenPrompt: "Ask their teacher or coach how they're doing. Share with your child.", qualityTimePrompt: "Learn something new together — a skill, a language, a recipe.", tip: "Being a student alongside your child is deeply connecting." },
      { dayNumber: 6, touchPrompt: "Teach them to give a good hug — firm, warm, present.", listenPrompt: "Ask 'Who in your life do you wish listened to you more?'", qualityTimePrompt: "Volunteer together or help a neighbor.", tip: "Helping others as a team strengthens family bonds." },
      { dayNumber: 7, touchPrompt: "Group hug to end the week — hold it for 20 seconds together.", listenPrompt: "Family reflection: 'How has our family changed in 5 weeks?'", qualityTimePrompt: "Create a family time capsule — write letters to your future selves.", tip: "Five weeks. Look how far you've come. The circle is expanding." },
    ],
  },
  {
    weekNumber: 6,
    title: "Finding Your Voice",
    description: "This week focuses on authentic communication — saying what you mean with love.",
    theme: "Honest Connection",
    touchFocus: "Use touch to say what words can't — comfort, pride, love, support.",
    listenFocus: "Practice hearing hard truths and giving honest responses with kindness.",
    qualityTimeFocus: "Create space for real conversations during quality time.",
    days: [
      { dayNumber: 1, touchPrompt: "After saying something important, seal it with a hug.", listenPrompt: "Tell them something you've never said. Ask if they have something too.", qualityTimePrompt: "Go for a long walk — walking loosens words.", tip: "Side-by-side activities make vulnerable conversations easier." },
      { dayNumber: 2, touchPrompt: "Hold hands while having a difficult conversation.", listenPrompt: "Ask 'What's something I do that bothers you?' — and just listen.", qualityTimePrompt: "Make a playlist together of songs that mean something to each of you.", tip: "Receiving feedback without defending shows real strength." },
      { dayNumber: 3, touchPrompt: "Touch their arm when you say 'I'm proud of you.'", listenPrompt: "Share a mistake you made at their age. Ask about theirs.", qualityTimePrompt: "Watch a meaningful movie and discuss it after.", tip: "Your stories of imperfection give them permission to be imperfect." },
      { dayNumber: 4, touchPrompt: "Forehead kiss — gentle and intentional.", listenPrompt: "Ask 'What's something you wish more people understood about you?'", qualityTimePrompt: "Write and perform a silly skit together.", tip: "Laughter and depth aren't opposites — they're partners." },
      { dayNumber: 5, touchPrompt: "Link pinkies — a small, secret moment of connection.", listenPrompt: "Practice saying 'I was wrong' about something this week.", qualityTimePrompt: "Rearrange their room together — let them lead the design.", tip: "Apologizing to your child teaches them the power of repair." },
      { dayNumber: 6, touchPrompt: "Create a goodbye routine for when they leave for school.", listenPrompt: "Ask 'What do you want to be when you grow up?' — take it seriously.", qualityTimePrompt: "Start a journal together — each write an entry, then swap.", tip: "Their dreams evolve. Keep asking. Keep listening." },
      { dayNumber: 7, touchPrompt: "20-second hug while you tell them what you learned from them this week.", listenPrompt: "Reflect: 'What honest conversations have we had this week?'", qualityTimePrompt: "Create something that represents your family — a crest, a motto, a song.", tip: "Six weeks. Your voice is clearer, kinder, and more connected." },
    ],
  },
  {
    weekNumber: 7,
    title: "Letting Go of Perfect",
    description: "Release the pressure of perfection. Connection is messy, real, and beautiful.",
    theme: "Grace Over Perfection",
    touchFocus: "Touch doesn't have to be planned. Let it happen naturally.",
    listenFocus: "You won't always listen well. Forgive yourself and try again.",
    qualityTimeFocus: "Quality time includes boring moments, failed activities, and quiet.",
    days: [
      { dayNumber: 1, touchPrompt: "No planned touch today — just notice natural moments of connection.", listenPrompt: "If you catch yourself not listening, say 'I'm sorry, say that again.'", qualityTimePrompt: "Do absolutely nothing together. Boredom is okay.", tip: "Grace means trying again without guilt." },
      { dayNumber: 2, touchPrompt: "Let them initiate touch today. Notice what they choose.", listenPrompt: "Ask 'Am I a good listener?' Be ready for honest feedback.", qualityTimePrompt: "Try something and fail at it together — baking, sports, crafts.", tip: "Failure is connection material. Laugh about it." },
      { dayNumber: 3, touchPrompt: "A random kiss on the top of their head — unplanned, natural.", listenPrompt: "Share a time you didn't listen well to someone. What did you learn?", qualityTimePrompt: "Cancel something on your schedule to make time for them.", tip: "What you cancel for them shows what you prioritize." },
      { dayNumber: 4, touchPrompt: "Playful shove, tickle, or wrestle — connection through play.", listenPrompt: "Listen to their music. Ask them to explain why they love it.", qualityTimePrompt: "Let them plan the entire evening.", tip: "Their world is worth exploring — even when it's not your taste." },
      { dayNumber: 5, touchPrompt: "Rest your head on their shoulder (or theirs on yours).", listenPrompt: "Ask 'What's something I've gotten better at?'", qualityTimePrompt: "Go somewhere spontaneously — no planning, just go.", tip: "Spontaneity breaks routine and creates memories." },
      { dayNumber: 6, touchPrompt: "Carry them to bed (or tuck them in with extra care).", listenPrompt: "Ask 'What do you need more of from me?'", qualityTimePrompt: "Create a family bucket list together.", tip: "Their answer might surprise you. Let it." },
      { dayNumber: 7, touchPrompt: "Whatever feels right. Trust your instincts now.", listenPrompt: "Reflect: 'What did letting go of perfect teach us?'", qualityTimePrompt: "Celebrate imperfection — messy, real, and yours.", tip: "Seven weeks. Perfect was never the goal. Connection was." },
    ],
  },
  {
    weekNumber: 8,
    title: "Rooted for Life",
    description: "These roots are yours now. This isn't the end — it's how your family lives.",
    theme: "Roots That Last",
    touchFocus: "Touch is now part of who your family is.",
    listenFocus: "Listening is your superpower. Keep using it.",
    qualityTimeFocus: "Quality time isn't a task anymore — it's a way of life.",
    days: [
      { dayNumber: 1, touchPrompt: "Start the day with your now-familiar touch ritual.", listenPrompt: "Ask 'What's been the best part of these 8 weeks?'", qualityTimePrompt: "Write a letter to your child about what you've learned.", tip: "You've changed. They've noticed." },
      { dayNumber: 2, touchPrompt: "Create a touch ritual for hard goodbyes — trips, first days.", listenPrompt: "Plan how you'll keep listening when life gets busy.", qualityTimePrompt: "Set a recurring family time on the calendar — protect it.", tip: "What gets scheduled gets done." },
      { dayNumber: 3, touchPrompt: "Teach a younger family member about the power of touch.", listenPrompt: "Ask 'What's something you'll tell your kids about connection?'", qualityTimePrompt: "Revisit your favorite activity from any previous week.", tip: "Legacy isn't what you leave — it's what you plant." },
      { dayNumber: 4, touchPrompt: "Hold hands during a meaningful moment today.", listenPrompt: "Listen to someone outside your family with the same presence.", qualityTimePrompt: "Spend quality time with a friend or family member who needs it.", tip: "The skills you've built extend beyond your home." },
      { dayNumber: 5, touchPrompt: "Photo or video of your family's touch rituals — for the future.", listenPrompt: "Ask each family member: 'What does being heard feel like?'", qualityTimePrompt: "Do all three touchpoints in one connected hour.", tip: "Integration: touch, listening, and presence — all at once." },
      { dayNumber: 6, touchPrompt: "Create a family 'connection jar' — pull a touch activity anytime.", listenPrompt: "Write down 3 listening lessons you'll carry forward.", qualityTimePrompt: "Plan your next month of quality time activities.", tip: "Planning ensures connection doesn't fade when the program ends." },
      { dayNumber: 7, touchPrompt: "The longest hug yet. Hold on. Feel the roots.", listenPrompt: "Final reflection: 'How has listening changed our family?'", qualityTimePrompt: "Celebrate. You did it. These roots are for life.", tip: "Week 8. This isn't an ending. It's a beginning. You are Rooted in Good." },
    ],
  },
];

const products = [
  {
    name: "The Rooted in Good Method — The Book",
    slug: "the-book",
    description: "The complete guide to transforming your relationship with your child through 3 simple daily touchpoints. Includes the full 8-week guided journey, real parent stories, and the science behind connection.",
    price: 24.99,
    type: "BOOK",
    imageUrl: "/images/book-cover.jpg",
  },
  {
    name: "Daily Touchpoint Workbook",
    slug: "daily-workbook",
    description: "A hands-on companion to the book. Track your daily touchpoints, journal your reflections, and document your family's growth over 8 weeks.",
    price: 14.99,
    type: "WORKBOOK",
    imageUrl: "/images/workbook-cover.jpg",
  },
  {
    name: "Family Connection Cards",
    slug: "connection-cards",
    description: "52 beautifully designed cards with touchpoint activities, conversation starters, and quality time ideas. Pull one card each week for a full year of connection.",
    price: 19.99,
    type: "WORKBOOK",
    imageUrl: "/images/cards-cover.jpg",
  },
  {
    name: "The Deep Roots Course",
    slug: "deep-roots-course",
    description: "An online video course that goes deeper into the method. Includes expert interviews, guided exercises, and a private community. 12 modules of transformative content.",
    price: 49.99,
    type: "COURSE",
    imageUrl: "/images/course-cover.jpg",
  },
];

const meetings = [
  {
    title: "Weekly Roots Circle — East Coast",
    description: "A weekly gathering for parents walking the Rooted in Good journey together. Share wins, struggles, and support each other. No judgment, just connection. Like AA for parents who want to do better.",
    dayOfWeek: 3, // Wednesday
    time: "20:00",
    timezone: "America/New_York",
    meetingUrl: "https://zoom.us/placeholder",
    isRecurring: true,
  },
  {
    title: "Weekend Roots Circle — West Coast",
    description: "Saturday morning support circle for parents. Bring your coffee and your real self. We share, listen, and grow together.",
    dayOfWeek: 6, // Saturday
    time: "10:00",
    timezone: "America/Los_Angeles",
    meetingUrl: "https://zoom.us/placeholder",
    isRecurring: true,
  },
  {
    title: "New Parents Welcome Session",
    description: "Just starting out? This session introduces you to the method and the community. Ask questions, meet other parents, and take your first step.",
    dayOfWeek: 1, // Monday
    time: "19:00",
    timezone: "America/New_York",
    meetingUrl: "https://zoom.us/placeholder",
    isRecurring: true,
  },
];

async function main() {
  console.log("Seeding database...");

  // Seed journey weeks and days
  for (const week of weeks) {
    const { days, ...weekData } = week;
    const createdWeek = await prisma.journeyWeek.create({ data: weekData });

    for (const day of days) {
      await prisma.journeyDay.create({
        data: { ...day, weekId: createdWeek.id },
      });
    }
    console.log(`  ✓ Week ${week.weekNumber}: ${week.title}`);
  }

  // Seed products
  for (const product of products) {
    await prisma.product.create({ data: product });
    console.log(`  ✓ Product: ${product.name}`);
  }

  // Seed meetings
  for (const meeting of meetings) {
    await prisma.meeting.create({ data: meeting });
    console.log(`  ✓ Meeting: ${meeting.title}`);
  }

  console.log("\nSeed complete!");
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });

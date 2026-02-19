"use client";

import { useState } from "react";
import {
  Heart,
  Ear,
  Users,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  BookOpen,
  Calendar,
  RotateCcw,
} from "lucide-react";
import Link from "next/link";

interface Question {
  id: number;
  text: string;
  category: "touch" | "listen" | "quality" | "regulation" | "repair";
  options: { label: string; score: number }[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "When your child is having a hard morning (can't find socks, overwhelmed by getting ready), what do you typically do?",
    category: "touch",
    options: [
      { label: "I step in early and help before they get upset — laying things out, prepping the night before", score: 5 },
      { label: "I try to help once I notice they're struggling", score: 4 },
      { label: "I remind them what to do and encourage them to handle it", score: 3 },
      { label: "I wait until they ask for help — they need to learn independence", score: 2 },
      { label: "Mornings are chaos — I'm usually rushing too much to notice", score: 1 },
    ],
  },
  {
    id: 2,
    text: "When your child starts telling you about their day, what happens most often?",
    category: "listen",
    options: [
      { label: "I stop what I'm doing, put my phone down, and give them my full attention", score: 5 },
      { label: "I listen while finishing what I'm doing, then give full attention", score: 4 },
      { label: "I listen but sometimes steer the conversation toward lessons or advice", score: 3 },
      { label: "I half-listen while doing something else — I'll catch the important parts", score: 2 },
      { label: "They don't usually tell me about their day anymore", score: 1 },
    ],
  },
  {
    id: 3,
    text: "How often does intentional physical connection happen between you and your child? (hugs, hand on shoulder, sitting close)",
    category: "quality",
    options: [
      { label: "Multiple times daily — it's part of our rhythm", score: 5 },
      { label: "At least once a day, usually at hello or goodbye", score: 4 },
      { label: "A few times a week when I remember", score: 3 },
      { label: "Occasionally — my child isn't very physical", score: 2 },
      { label: "Rarely — we've gotten out of the habit", score: 1 },
    ],
  },
  {
    id: 4,
    text: "When you feel yourself getting frustrated or overwhelmed as a parent, what do you notice?",
    category: "regulation",
    options: [
      { label: "I notice early and take a breath or pause before responding", score: 5 },
      { label: "I catch myself mid-reaction and try to soften", score: 4 },
      { label: "I know I'm overwhelmed but struggle to slow down in the moment", score: 3 },
      { label: "I usually realize after the fact that I reacted too harshly", score: 2 },
      { label: "I'm often running on empty — it's hard to notice anything until I've already snapped", score: 1 },
    ],
  },
  {
    id: 5,
    text: "After a rough moment or conflict with your child, what typically happens next?",
    category: "repair",
    options: [
      { label: "I come back, acknowledge what happened, and reconnect — even if it's hard", score: 5 },
      { label: "I wait for things to cool down, then check in with them", score: 4 },
      { label: "I feel guilty but I'm not sure how to bring it up", score: 3 },
      { label: "I move on and hope they do too", score: 2 },
      { label: "Conflict lingers — neither of us knows how to come back from it", score: 1 },
    ],
  },
  {
    id: 6,
    text: "How would you describe your child's willingness to open up to you?",
    category: "listen",
    options: [
      { label: "They share freely — even the hard stuff", score: 5 },
      { label: "They open up casually but keep some things private", score: 4 },
      { label: "They share briefly but stay somewhat guarded", score: 3 },
      { label: "Mostly surface-level — logistics and school stuff", score: 2 },
      { label: "They avoid deep conversation — I feel shut out", score: 1 },
    ],
  },
  {
    id: 7,
    text: "When your child is dysregulated (tantrum, meltdown, withdrawal), what is your first instinct?",
    category: "quality",
    options: [
      { label: "Get close, stay calm, offer physical presence before words", score: 5 },
      { label: "Try to talk them through it with a calm voice", score: 4 },
      { label: "Give them space and check in after they calm down", score: 3 },
      { label: "Try to fix the problem that caused the meltdown", score: 2 },
      { label: "Match their energy — I get frustrated too", score: 1 },
    ],
  },
  {
    id: 8,
    text: "How often do you proactively set your child up for success? (packing bags the night before, prepping transitions, anticipating hard moments)",
    category: "touch",
    options: [
      { label: "Daily — it's become second nature", score: 5 },
      { label: "Most days — I try to stay a step ahead", score: 4 },
      { label: "Sometimes — when I have the energy for it", score: 3 },
      { label: "Rarely — I'm more reactive than proactive", score: 2 },
      { label: "I haven't thought about it this way before", score: 1 },
    ],
  },
  {
    id: 9,
    text: "How do you feel about your own emotional regulation as a parent?",
    category: "regulation",
    options: [
      { label: "I've done real work on this — I can usually stay steady", score: 5 },
      { label: "I'm aware of my patterns and working on it", score: 4 },
      { label: "Some days are good, some days I lose it", score: 3 },
      { label: "I know I should regulate better but don't know how", score: 2 },
      { label: "I carry a lot of stress and it shows up in my parenting", score: 1 },
    ],
  },
  {
    id: 10,
    text: "If you had 9 extra minutes in your day, what would you do with them?",
    category: "repair",
    options: [
      { label: "I'd use them intentionally — a hug, a conversation, just being present", score: 5 },
      { label: "I'd try to connect, but I'd need a plan to make it count", score: 4 },
      { label: "Honestly? I'd probably scroll my phone or do chores", score: 3 },
      { label: "9 minutes isn't enough to change anything... right?", score: 2 },
      { label: "I didn't know 9 minutes could make a difference", score: 1 },
    ],
  },
];

interface ResultLevel {
  title: string;
  range: string;
  color: string;
  bgColor: string;
  borderColor: string;
  icon: typeof Heart;
  summary: string;
  strengths: string[];
  growthAreas: string[];
  bookMessage: string;
}

const resultLevels: ResultLevel[] = [
  {
    title: "Planting Seeds",
    range: "10–18",
    color: "text-quality-dark",
    bgColor: "bg-quality-light",
    borderColor: "border-quality",
    icon: Heart,
    summary:
      "You're at the beginning of something meaningful. The fact that you're here, taking this quiz, shows a desire for change that many parents never act on.",
    strengths: [
      "You recognized something needs to shift — that's courage",
      "You're open to learning a new way",
      "Your child still needs you, and it's not too late",
    ],
    growthAreas: [
      "Building a daily rhythm of small connection moments",
      "Learning to pause before reacting",
      "Creating space for your child to feel safe opening up",
    ],
    bookMessage:
      "The RootedInGood Method was built for exactly where you are. Start with Chapter 2 (Self-Regulation) — it will change how you show up in every interaction.",
  },
  {
    title: "Growing Roots",
    range: "19–26",
    color: "text-listen-dark",
    bgColor: "bg-listen-light",
    borderColor: "border-listen",
    icon: Ear,
    summary:
      "You have good instincts and care deeply. The connection is there — it just needs more consistency and intention to become a rhythm your child can count on.",
    strengths: [
      "You care deeply and your child knows it",
      "You have moments of real connection already",
      "You're willing to try even when it's hard",
    ],
    growthAreas: [
      "Turning good intentions into daily habits",
      "Shifting from reactive to proactive support",
      "Creating more space for listening without an agenda",
    ],
    bookMessage:
      "The 8-week journey will give you the structure to turn your good instincts into reliable habits. Start with Chapter 5 (Focused Support) to learn how 2 minutes can change your whole morning.",
  },
  {
    title: "Finding Your Rhythm",
    range: "27–34",
    color: "text-touch-dark",
    bgColor: "bg-touch-light",
    borderColor: "border-touch",
    icon: Heart,
    summary:
      "You're building something real. Connection is happening — it just ebbs and flows. The method will help you find the steady rhythm that makes good days the norm, not the exception.",
    strengths: [
      "You're already connecting in meaningful ways",
      "You notice when things are off and try to repair",
      "Your child feels your effort even when it's imperfect",
    ],
    growthAreas: [
      "Making connection consistent even on hard days",
      "Deepening listening from surface to heart-level",
      "Using physical connection as a regulation tool",
    ],
    bookMessage:
      "Chapter 8 (Repair) and Chapter 9 (Keeping the Rhythm) were written for parents right where you are. You're closer than you think.",
  },
  {
    title: "Deeply Connected",
    range: "35–42",
    color: "text-listen-dark",
    bgColor: "bg-listen-light",
    borderColor: "border-listen",
    icon: Ear,
    summary:
      "Your relationship has real depth. Your child trusts you, opens up to you, and knows you're their safe place. The method will help you protect what you've built and go even deeper.",
    strengths: [
      "Your child feels safe sharing with you",
      "You practice repair and emotional regulation",
      "Physical connection and listening are regular parts of your rhythm",
    ],
    growthAreas: [
      "Sustaining connection through life transitions",
      "Teaching your child to carry these rhythms forward",
      "Supporting other parents on this journey",
    ],
    bookMessage:
      "The book will validate what you're already doing and give you language for it. Chapter 11 (What Transformation Looks Like) will feel like looking in a mirror.",
  },
  {
    title: "Rooted in Good",
    range: "43–50",
    color: "text-touch-dark",
    bgColor: "bg-touch-light",
    borderColor: "border-touch",
    icon: Users,
    summary:
      "You're living the method — whether you knew it by name or not. Your child has a foundation of safety, trust, and connection that will shape who they become.",
    strengths: [
      "Connection is woven into your daily life",
      "You regulate yourself and co-regulate your child naturally",
      "Repair happens quickly and with grace",
    ],
    growthAreas: [
      "Sharing what you've learned with other parents",
      "Adapting your rhythm as your child grows",
      "Joining the community to support parents just starting out",
    ],
    bookMessage:
      "You're the parent other parents aspire to be. The book will give you the science behind why what you do works — and the community will let you help others get there too.",
  },
];

function getResult(score: number): ResultLevel {
  if (score <= 18) return resultLevels[0];
  if (score <= 26) return resultLevels[1];
  if (score <= 34) return resultLevels[2];
  if (score <= 42) return resultLevels[3];
  return resultLevels[4];
}

function getCategoryScores(answers: Record<number, number>) {
  const categories: Record<string, { total: number; count: number }> = {
    touch: { total: 0, count: 0 },
    listen: { total: 0, count: 0 },
    quality: { total: 0, count: 0 },
    regulation: { total: 0, count: 0 },
    repair: { total: 0, count: 0 },
  };

  for (const q of questions) {
    const score = answers[q.id];
    if (score !== undefined) {
      categories[q.category].total += score;
      categories[q.category].count += 1;
    }
  }

  return Object.entries(categories).map(([key, val]) => ({
    key,
    label:
      key === "touch"
        ? "Focused Support"
        : key === "listen"
          ? "Intentional Listening"
          : key === "quality"
            ? "Physical Connection"
            : key === "regulation"
              ? "Self-Regulation"
              : "Repair",
    avg: val.count > 0 ? val.total / val.count : 0,
    color:
      key === "touch"
        ? "bg-touch"
        : key === "listen"
          ? "bg-listen"
          : key === "quality"
            ? "bg-quality"
            : key === "regulation"
              ? "bg-accent"
              : "bg-touch",
  }));
}

export default function ConnectionQuiz() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const totalScore = Object.values(answers).reduce((sum, s) => sum + s, 0);
  const result = getResult(totalScore);
  const categoryScores = getCategoryScores(answers);

  function handleAnswer(score: number) {
    const q = questions[currentQuestion];
    const newAnswers = { ...answers, [q.id]: score };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  }

  function restart() {
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  }

  // Intro screen
  if (!started) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-touch-light/50 rounded-full px-4 py-2 mb-6">
            <Sparkles size={18} className="text-touch-dark" />
            <span className="text-sm font-medium text-text">
              Free Assessment
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-text leading-tight mb-6">
            Where Are You on the{" "}
            <span className="text-touch-dark">Connection Spectrum?</span>
          </h1>
          <p className="text-lg sm:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed mb-4">
            Take this 2-minute assessment to discover your natural connection
            style and get personalized recommendations from the RootedInGood
            Method.
          </p>
          <p className="text-text-muted mb-10">
            10 questions. No judgment. Just clarity.
          </p>

          <button
            onClick={() => setStarted(true)}
            className="bg-touch text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-touch-dark transition-colors inline-flex items-center gap-2"
          >
            Start the Assessment <ArrowRight size={20} />
          </button>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            {[
              {
                icon: Heart,
                title: "Focused Support",
                desc: "How proactively you step in before overwhelm",
                color: "text-touch-dark",
                bg: "bg-touch-light",
              },
              {
                icon: Ear,
                title: "Intentional Listening",
                desc: "How deeply your child feels heard by you",
                color: "text-listen-dark",
                bg: "bg-listen-light",
              },
              {
                icon: Users,
                title: "Physical Connection",
                desc: "How safely your child experiences closeness",
                color: "text-quality-dark",
                bg: "bg-quality-light",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-5 border border-border"
              >
                <div
                  className={`w-10 h-10 ${item.bg} rounded-lg flex items-center justify-center mb-3`}
                >
                  <item.icon className={item.color} size={20} />
                </div>
                <h3 className="font-semibold text-text text-sm mb-1">
                  {item.title}
                </h3>
                <p className="text-text-muted text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Results screen
  if (showResults) {
    const ResultIcon = result.icon;
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        {/* Result header */}
        <div className="text-center mb-12">
          <div
            className={`inline-flex items-center justify-center w-20 h-20 ${result.bgColor} rounded-full mb-6`}
          >
            <ResultIcon className={result.color} size={40} />
          </div>
          <p className="text-sm font-medium text-text-muted uppercase tracking-wide mb-2">
            Your Connection Style
          </p>
          <h1 className={`text-4xl sm:text-5xl font-bold ${result.color} mb-4`}>
            {result.title}
          </h1>
          <p className="text-lg text-text-muted max-w-xl mx-auto leading-relaxed">
            {result.summary}
          </p>
        </div>

        {/* Score breakdown */}
        <div className="bg-white rounded-2xl border border-border p-6 sm:p-8 mb-8">
          <h3 className="font-semibold text-text mb-6">
            Your Score Breakdown
          </h3>
          <div className="space-y-4">
            {categoryScores.map((cat) => (
              <div key={cat.key}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium text-text">
                    {cat.label}
                  </span>
                  <span className="text-sm text-text-muted">
                    {cat.avg.toFixed(1)} / 5
                  </span>
                </div>
                <div className="h-3 bg-soft-gray rounded-full overflow-hidden">
                  <div
                    className={`h-full ${cat.color} rounded-full transition-all duration-700`}
                    style={{ width: `${(cat.avg / 5) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
            <span className="font-semibold text-text">Overall Score</span>
            <span className={`text-2xl font-bold ${result.color}`}>
              {totalScore} / 50
            </span>
          </div>
        </div>

        {/* Strengths & Growth */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="bg-touch-light/30 rounded-2xl p-6">
            <h3 className="font-semibold text-text mb-4">Your Strengths</h3>
            <ul className="space-y-3">
              {result.strengths.map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-2 text-sm text-text-muted"
                >
                  <span className="mt-1.5 w-2 h-2 bg-touch rounded-full flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-listen-light/30 rounded-2xl p-6">
            <h3 className="font-semibold text-text mb-4">Growth Areas</h3>
            <ul className="space-y-3">
              {result.growthAreas.map((g) => (
                <li
                  key={g}
                  className="flex items-start gap-2 text-sm text-text-muted"
                >
                  <span className="mt-1.5 w-2 h-2 bg-listen rounded-full flex-shrink-0" />
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Book recommendation */}
        <div
          className={`${result.bgColor}/30 rounded-2xl p-6 sm:p-8 border ${result.borderColor} mb-8`}
        >
          <div className="flex items-start gap-4">
            <BookOpen className={result.color} size={24} />
            <div>
              <h3 className="font-semibold text-text mb-2">
                Your Next Step in the Book
              </h3>
              <p className="text-text-muted leading-relaxed">
                {result.bookMessage}
              </p>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/shop"
            className="bg-touch text-white px-8 py-4 rounded-full font-semibold hover:bg-touch-dark transition-colors flex items-center justify-center gap-2"
          >
            <BookOpen size={20} /> Get the Book
          </Link>
          <Link
            href="/community"
            className="bg-white text-text px-8 py-4 rounded-full font-semibold border border-border hover:border-listen transition-colors flex items-center justify-center gap-2"
          >
            <Calendar size={20} /> Join the Community
          </Link>
        </div>

        {/* Retake */}
        <div className="text-center">
          <button
            onClick={restart}
            className="text-text-muted hover:text-text transition-colors text-sm inline-flex items-center gap-1"
          >
            <RotateCcw size={14} /> Retake the Assessment
          </button>
        </div>
      </div>
    );
  }

  // Question screen
  const q = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-text-muted">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className="text-sm text-text-muted">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="h-2 bg-soft-gray rounded-full overflow-hidden">
          <div
            className="h-full bg-touch rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-text leading-snug">
          {q.text}
        </h2>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {q.options.map((opt) => (
          <button
            key={opt.label}
            onClick={() => handleAnswer(opt.score)}
            className="w-full text-left bg-white rounded-xl p-5 border border-border hover:border-touch hover:shadow-sm transition-all group"
          >
            <span className="text-text-muted group-hover:text-text transition-colors leading-relaxed">
              {opt.label}
            </span>
          </button>
        ))}
      </div>

      {/* Back button */}
      {currentQuestion > 0 && (
        <button
          onClick={() => setCurrentQuestion(currentQuestion - 1)}
          className="mt-6 text-text-muted hover:text-text transition-colors text-sm inline-flex items-center gap-1"
        >
          <ArrowLeft size={14} /> Previous question
        </button>
      )}
    </div>
  );
}

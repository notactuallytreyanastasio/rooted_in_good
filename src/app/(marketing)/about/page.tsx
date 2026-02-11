import type { Metadata } from "next";
import Link from "next/link";
import {
  Heart,
  Ear,
  Users,
  BookOpen,
  ArrowRight,
  Brain,
  Clock,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About the Method",
  description:
    "The science behind the 3 touchpoints: Touch (20s), Listen (10min), and Quality Time (20min). An 8-week journey to transform your parenting.",
};

export default function AboutPage() {
  return (
    <div className="bg-warm-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-touch-light/40 via-listen-light/30 to-quality-light/20" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-touch-dark font-medium mb-4 text-sm tracking-wide uppercase">
              The Rooted in Good Method
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text leading-tight">
              30 Minutes and 20 Seconds to{" "}
              <span className="text-touch-dark">Transform</span> Your Family
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
              A simple, science-backed method built on three daily touchpoints
              that strengthen the bond between you and your child.
            </p>
          </div>
        </div>
      </section>

      {/* The 3 Touchpoints - Full Detail */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text">
            The Three Touchpoints
          </h2>
          <p className="mt-4 text-text-muted text-lg max-w-2xl mx-auto">
            Each touchpoint targets a different dimension of connection.
            Together, they create a complete daily practice of presence.
          </p>
        </div>

        {/* Touchpoint 1: Touch */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-14 h-14 bg-touch-light rounded-xl flex items-center justify-center mb-6">
                <Heart className="text-touch-dark" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-text mb-2">
                Touchpoint 1: Touch
              </h3>
              <p className="text-3xl font-bold text-touch-dark mb-4">
                20 seconds
              </p>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  Physical touch is the most primal form of connection. A
                  20-second hug is long enough to trigger the release of
                  oxytocin, the bonding hormone, in both parent and child.
                </p>
                <p>
                  This isn&apos;t about forced affection. It&apos;s about finding
                  the form of physical connection that works for your family: a
                  hug, a hand on the shoulder, a high-five, holding hands on a
                  walk, or a gentle pat on the back.
                </p>
                <p>
                  For older kids and teens, respect their boundaries. A fist
                  bump, a side-hug, or even sitting close enough that your
                  shoulders touch counts. The point is intentional, loving
                  physical presence.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-touch-light to-touch/30 rounded-2xl p-12 flex items-center justify-center aspect-square max-w-sm mx-auto">
              <div className="text-center">
                <Heart className="mx-auto text-touch-dark mb-4" size={64} />
                <p className="text-5xl font-bold text-touch-dark">20s</p>
                <p className="text-text-muted mt-2">of intentional touch</p>
              </div>
            </div>
          </div>
        </div>

        {/* Touchpoint 2: Listen */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gradient-to-br from-listen-light to-listen/30 rounded-2xl p-12 flex items-center justify-center aspect-square max-w-sm mx-auto">
              <div className="text-center">
                <Ear className="mx-auto text-listen-dark mb-4" size={64} />
                <p className="text-5xl font-bold text-listen-dark">10m</p>
                <p className="text-text-muted mt-2">of focused listening</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="w-14 h-14 bg-listen-light rounded-xl flex items-center justify-center mb-6">
                <Ear className="text-listen-dark" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-text mb-2">
                Touchpoint 2: Listen
              </h3>
              <p className="text-3xl font-bold text-listen-dark mb-4">
                10 minutes
              </p>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  Active listening means putting down whatever you&apos;re doing,
                  making eye contact, and giving your child your full attention.
                  No phone. No multitasking. No fixing.
                </p>
                <p>
                  Children don&apos;t always need solutions. They need to feel
                  heard. When you listen without interrupting or jumping to
                  advice, you communicate respect and emotional safety.
                </p>
                <p>
                  Ask open-ended questions. &ldquo;What was the best part of
                  your day?&rdquo; &ldquo;Tell me more about that.&rdquo;
                  &ldquo;How did that make you feel?&rdquo; Then let them talk.
                  Silence is okay. The space you hold is the gift.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Touchpoint 3: Quality Time */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-14 h-14 bg-quality-light rounded-xl flex items-center justify-center mb-6">
                <Users className="text-quality-dark" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-text mb-2">
                Touchpoint 3: Quality Time
              </h3>
              <p className="text-3xl font-bold text-quality-dark mb-4">
                20 minutes
              </p>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  Twenty minutes of undivided, child-led time. No agenda, no
                  goals, no screens. Follow their lead. If they want to build
                  Legos, you build Legos. If they want to walk in silence, you
                  walk in silence.
                </p>
                <p>
                  This is the touchpoint that kids remember. It&apos;s not about
                  elaborate activities or expensive outings. It&apos;s about
                  showing up and being fully present with whatever they want to
                  do.
                </p>
                <p>
                  For teens, this might look like driving together, cooking a
                  meal, or sitting in the same room while they do homework.
                  Proximity with availability is its own form of quality time.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-quality-light to-quality/30 rounded-2xl p-12 flex items-center justify-center aspect-square max-w-sm mx-auto">
              <div className="text-center">
                <Users className="mx-auto text-quality-dark mb-4" size={64} />
                <p className="text-5xl font-bold text-quality-dark">20m</p>
                <p className="text-text-muted mt-2">of undivided presence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Science */}
      <section className="bg-gradient-to-b from-soft-gray to-warm-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-listen-light/50 rounded-full px-4 py-2 mb-6">
              <Brain size={18} className="text-listen-dark" />
              <span className="text-sm font-medium text-text">
                Evidence-Based Approach
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-text">
              The Science Behind the Method
            </h2>
            <p className="mt-4 text-text-muted text-lg max-w-2xl mx-auto">
              The Rooted in Good Method isn&apos;t just feel-good advice.
              It&apos;s grounded in decades of research on child development,
              attachment theory, and neuroscience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Oxytocin Release",
                description:
                  "Physical touch lasting 20 seconds or more triggers the release of oxytocin, reducing stress hormones in both parent and child. Research from the University of North Carolina shows that regular hugging lowers blood pressure and cortisol levels.",
                color: "touch",
              },
              {
                title: "Secure Attachment",
                description:
                  "Active listening builds secure attachment, which research by John Bowlby and Mary Ainsworth shows is the strongest predictor of emotional resilience, relationship quality, and mental health throughout life.",
                color: "listen",
              },
              {
                title: "Neural Co-Regulation",
                description:
                  "When a parent is fully present, their calm nervous system helps regulate their child's developing nervous system. This process, called co-regulation, literally shapes brain architecture during childhood.",
                color: "quality",
              },
              {
                title: "Habit Formation",
                description:
                  "Research on habit formation shows that simple, repeatable routines become automatic in 8-12 weeks. The Rooted in Good Method's 8-week journey is designed to turn connection from effort into instinct.",
                color: "touch",
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`bg-white rounded-2xl p-8 border border-${item.color}-light shadow-sm`}
              >
                <div
                  className={`w-10 h-10 bg-${item.color}-light rounded-lg flex items-center justify-center mb-4`}
                >
                  <Brain className={`text-${item.color}-dark`} size={20} />
                </div>
                <h3 className="text-lg font-bold text-text mb-3">
                  {item.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8-Week Journey */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-quality-light/50 rounded-full px-4 py-2 mb-6">
            <Clock size={18} className="text-quality-dark" />
            <span className="text-sm font-medium text-text">
              Guided Program
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-text">
            The 8-Week Journey
          </h2>
          <p className="mt-4 text-text-muted text-lg max-w-2xl mx-auto">
            Each week builds on the last, gradually deepening your connection
            practice from simple beginnings to lasting transformation.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              week: 1,
              title: "Foundation",
              description:
                "Learn the three touchpoints and commit to showing up. This week is about starting small and getting the rhythm right.",
              color: "touch",
            },
            {
              week: 2,
              title: "Noticing",
              description:
                "Begin observing your child's bids for connection. Learn to recognize the moments they need you most.",
              color: "listen",
            },
            {
              week: 3,
              title: "Listening Deeper",
              description:
                "Move beyond surface conversation. Practice asking open-ended questions and sitting in silence.",
              color: "listen",
            },
            {
              week: 4,
              title: "Repair & Resilience",
              description:
                "Learn how to reconnect after conflict. Rupture and repair is normal — what matters is coming back.",
              color: "quality",
            },
            {
              week: 5,
              title: "Following Their Lead",
              description:
                "Deepen quality time by letting go of your agenda. Practice child-led activities and unstructured play.",
              color: "quality",
            },
            {
              week: 6,
              title: "Hard Days",
              description:
                "Build a toolkit for the days when connection feels impossible. Learn self-compassion alongside connection.",
              color: "touch",
            },
            {
              week: 7,
              title: "The Bigger Picture",
              description:
                "Reflect on how daily connection ripples outward — into their friendships, school life, and self-image.",
              color: "listen",
            },
            {
              week: 8,
              title: "Legacy",
              description:
                "Define the legacy you want to leave. Create a sustainable, lifelong practice of intentional connection.",
              color: "quality",
            },
          ].map((week) => (
            <div
              key={week.week}
              className={`bg-white rounded-2xl p-6 border border-${week.color}-light shadow-sm flex gap-6 items-start`}
            >
              <div
                className={`w-12 h-12 bg-${week.color}-light rounded-xl flex items-center justify-center flex-shrink-0`}
              >
                <span className={`text-${week.color}-dark font-bold`}>
                  {week.week}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-text mb-1">
                  Week {week.week}: {week.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {week.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-soft-gray py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-text">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "Is this method only for young children?",
                answer:
                  "Not at all. The three touchpoints work for children of all ages, from toddlers to teenagers. The specific expressions change — a teen might prefer a fist bump to a hug, or quality time might be driving together instead of playing on the floor — but the principles are universal. Many parents report the biggest breakthroughs with their older kids.",
              },
              {
                question: "What if I miss a day?",
                answer:
                  "You will miss days. That's not failure — that's life. The method is designed for real parents with real lives. When you miss a day, you simply start again the next day. There's no catching up or making up. Each day is a fresh start. Consistency over time matters more than perfection on any single day.",
              },
              {
                question:
                  "I'm a single parent with multiple kids. How do I fit this in?",
                answer:
                  "The beauty of the method is its simplicity. You don't need to do all three touchpoints with every child at the same time. A 20-second hug can happen at the door. Listening can happen at the dinner table. Quality time can rotate between children. Start with one child, one touchpoint, and build from there.",
              },
              {
                question: "What if my child resists physical touch?",
                answer:
                  "Respect their boundaries always. Physical touch looks different for every child and every age. For some, it's a pat on the back or sitting close together. For others, it might be a playful elbow bump. The key is consent and consistency. Over time, many children who initially resist touch begin to seek it out once they feel safe.",
              },
              {
                question: "Is this a replacement for therapy?",
                answer:
                  "No. The Rooted in Good Method is a daily connection practice, not a clinical intervention. If your child or family is dealing with serious behavioral, emotional, or mental health challenges, please seek professional support. This method works beautifully alongside therapy and can amplify its benefits.",
              },
              {
                question: "Do I need to buy the book to start?",
                answer:
                  "The core method — Touch, Listen, Quality Time — is simple enough to start today. The book provides the 8-week guided journey, daily prompts, the science behind each touchpoint, and stories from other parents that make the practice richer and more sustainable. Most parents find the structure helps them stick with it.",
              },
            ].map((faq) => (
              <details
                key={faq.question}
                className="bg-white rounded-2xl border border-border shadow-sm group"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="font-semibold text-text pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    size={20}
                    className="text-text-muted flex-shrink-0 group-open:rotate-180 transition-transform"
                  />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-text-muted leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-touch-light via-accent-light to-quality-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center">
          <BookOpen className="mx-auto text-text mb-6" size={48} />
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
            Start Your 8-Week Journey
          </h2>
          <p className="text-lg text-text-muted mb-10 max-w-xl mx-auto">
            Everything you need to build a lasting connection practice with
            your child. Daily prompts, weekly themes, and the science that
            makes it work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 bg-text text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-text/90 transition-colors"
            >
              Get the Book <ArrowRight size={20} />
            </Link>
            <Link
              href="/community"
              className="inline-flex items-center justify-center gap-2 bg-white text-text px-10 py-4 rounded-full text-lg font-semibold border border-border hover:border-listen transition-colors"
            >
              Join the Community
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

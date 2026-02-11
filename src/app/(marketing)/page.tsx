import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Ear, Users, BookOpen, ArrowRight, Star, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "20 Seconds Can Change Everything",
  description:
    "Transform your relationship with your child through 3 simple daily touchpoints: Touch (20s), Listen (10min), and Quality Time (20min).",
};

export default function HomePage() {
  return (
    <div className="bg-warm-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-touch-light/40 via-listen-light/30 to-quality-light/20" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-32">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <p className="text-touch-dark font-medium mb-4 text-sm tracking-wide uppercase">
              The Rooted in Good Method
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text leading-tight">
              20 Seconds Can Change{" "}
              <span className="text-touch-dark">Everything</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
              Three simple daily touchpoints to transform your relationship with
              your child. No perfection required — just presence.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/shop"
                className="w-full sm:w-auto bg-touch text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-touch-dark transition-colors flex items-center justify-center gap-2"
              >
                Get the Book <ArrowRight size={20} />
              </Link>
              <Link
                href="/community"
                className="w-full sm:w-auto bg-white text-text px-8 py-4 rounded-full text-lg font-semibold border border-border hover:border-listen transition-colors"
              >
                Join Our Community
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Touchpoints */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text">
            Three Touchpoints. Every Day.
          </h2>
          <p className="mt-4 text-text-muted text-lg max-w-2xl mx-auto">
            Connection doesn&apos;t require hours. It requires intention. Just 30
            minutes and 20 seconds of daily presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-stagger">
          {/* Touch */}
          <div className="bg-white rounded-2xl p-8 border border-touch-light hover:border-touch transition-colors shadow-sm hover-lift">
            <div className="w-14 h-14 bg-touch-light rounded-xl flex items-center justify-center mb-6">
              <Heart className="text-touch-dark" size={28} />
            </div>
            <h3 className="text-xl font-bold text-text mb-2">Touch</h3>
            <p className="text-3xl font-bold text-touch-dark mb-3">
              20 seconds
            </p>
            <p className="text-text-muted leading-relaxed">
              A hug, a hand on the shoulder, holding hands. Physical connection
              releases oxytocin and tells your child: you are safe, you are
              loved.
            </p>
          </div>

          {/* Listen */}
          <div className="bg-white rounded-2xl p-8 border border-listen-light hover:border-listen transition-colors shadow-sm hover-lift">
            <div className="w-14 h-14 bg-listen-light rounded-xl flex items-center justify-center mb-6">
              <Ear className="text-listen-dark" size={28} />
            </div>
            <h3 className="text-xl font-bold text-text mb-2">Listen</h3>
            <p className="text-3xl font-bold text-listen-dark mb-3">
              10 minutes
            </p>
            <p className="text-text-muted leading-relaxed">
              Put the phone down. Make eye contact. Let them talk without fixing
              anything. Sometimes all they need is to be heard.
            </p>
          </div>

          {/* Quality Time */}
          <div className="bg-white rounded-2xl p-8 border border-quality-light hover:border-quality transition-colors shadow-sm hover-lift">
            <div className="w-14 h-14 bg-quality-light rounded-xl flex items-center justify-center mb-6">
              <Users className="text-quality-dark" size={28} />
            </div>
            <h3 className="text-xl font-bold text-text mb-2">Quality Time</h3>
            <p className="text-3xl font-bold text-quality-dark mb-3">
              20 minutes
            </p>
            <p className="text-text-muted leading-relaxed">
              No agenda. No goals. Follow their lead. Sit on the floor, go for a
              walk, or just be together. Presence is the gift.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-gradient-to-b from-soft-gray to-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-6">
            You&apos;re Not Failing. You&apos;re Just Missing the Method.
          </h2>
          <div className="space-y-6 text-lg text-text-muted leading-relaxed">
            <p>
              You love your kids. That was never the question. But somewhere
              between the morning rush, the homework battles, and falling into
              bed exhausted — connection got lost.
            </p>
            <p>
              You&apos;re not a bad parent. You&apos;re a busy one. And nobody
              ever taught you <em>how</em> to connect in the margins of a real
              life.
            </p>
            <p className="text-text font-medium text-xl">
              The Rooted in Good Method gives you exactly that: a simple,
              repeatable system that works in 30 minutes and 20 seconds a day.
            </p>
          </div>
        </div>
      </section>

      {/* Book Preview */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-to-br from-touch-light via-listen-light to-quality-light rounded-2xl p-12 flex items-center justify-center aspect-[3/4] max-w-sm mx-auto">
              <div className="text-center">
                <BookOpen className="mx-auto text-text mb-4" size={48} />
                <h3 className="text-2xl font-bold text-text mb-2">
                  The Rooted in Good Method
                </h3>
                <p className="text-text-muted text-sm">
                  The Complete Guide
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-text mb-6">
              Inside the Book
            </h2>
            <ul className="space-y-4">
              {[
                "The science behind why 20 seconds of touch changes everything",
                "An 8-week guided journey to build lasting connection habits",
                "Real stories from parents who transformed their families",
                "Daily prompts, timers, and activities for each touchpoint",
                "How to navigate hard days and repair after conflict",
                "Building a legacy of connection your children will carry forward",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-1.5 w-5 h-5 bg-touch-light rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-touch-dark rounded-full" />
                  </div>
                  <span className="text-text-muted">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 mt-8 bg-touch text-white px-6 py-3 rounded-full font-semibold hover:bg-touch-dark transition-colors"
            >
              Get Your Copy <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-soft-gray py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-text">
              What Parents Are Saying
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "I was drowning in guilt about never being 'present enough.' This method showed me that 30 minutes of intention beats hours of distracted proximity. My daughter tells me things now she never used to.",
                name: "Sarah M.",
                detail: "Mom of two, ages 7 and 10",
                color: "touch",
              },
              {
                quote: "The weekly meetings changed everything. Hearing other parents struggle with the same things — and seeing them grow — made me feel less alone. It's like AA for parenting, and I mean that in the best way.",
                name: "Marcus T.",
                detail: "Dad of three",
                color: "listen",
              },
              {
                quote: "My teenager and I hadn't really talked in months. Week 3 of the journey, he came to me and said 'Mom, I like it when we just sit together.' I cried for an hour.",
                name: "Jennifer L.",
                detail: "Mom of a 14-year-old",
                color: "quality",
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-2xl p-8 border border-border shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-accent-dark"
                      fill="currentColor"
                    />
                  ))}
                </div>
                <p className="text-text-muted leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-text">{testimonial.name}</p>
                  <p className="text-sm text-text-muted">{testimonial.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="bg-gradient-to-br from-listen-light/50 to-quality-light/50 rounded-3xl p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
            You&apos;re Not Alone in This
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto mb-8">
            Join hundreds of parents walking this journey together. Weekly
            support circles, shared experiences, and a community that
            understands — because they&apos;re doing the same work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/community"
              className="bg-listen text-white px-8 py-4 rounded-full font-semibold hover:bg-listen-dark transition-colors flex items-center justify-center gap-2"
            >
              <Calendar size={20} /> See Meeting Schedule
            </Link>
            <Link
              href="/community"
              className="bg-white text-text px-8 py-4 rounded-full font-semibold border border-border hover:border-listen transition-colors"
            >
              Join the Facebook Group
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-touch-light via-accent-light to-quality-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
            Start Your Journey Today
          </h2>
          <p className="text-lg text-text-muted mb-10 max-w-xl mx-auto">
            In 8 weeks, you&apos;ll have built habits that last a lifetime. Your
            children are waiting. All they need is 30 minutes and 20 seconds.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-text text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-text/90 transition-colors"
          >
            Get the Book <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}

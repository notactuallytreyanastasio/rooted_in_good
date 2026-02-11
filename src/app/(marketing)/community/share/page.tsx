"use client";

import { useState } from "react";
import { Download, Share2, Hash } from "lucide-react";
import { cn } from "@/lib/utils";

interface ShareableItem {
  id: string;
  title: string;
  caption: string;
  gradient: string;
  hashtags: string[];
  category: "Quotes" | "Tips" | "Infographics";
}

const shareableItems: ShareableItem[] = [
  {
    id: "1",
    title: "20 Seconds of Touch Changes Everything",
    caption:
      "A 20-second hug releases oxytocin, lowers cortisol, and tells your child: you are safe, you are loved. Try it today.",
    gradient: "from-touch-light to-touch",
    hashtags: ["#RootedInGood", "#ParentingWithPresence", "#20SecondHug"],
    category: "Quotes",
  },
  {
    id: "2",
    title: "Put the Phone Down. Make Eye Contact.",
    caption:
      "The most powerful thing you can do for your child today is listen without trying to fix anything. Just hear them.",
    gradient: "from-listen-light to-listen",
    hashtags: ["#RootedInGood", "#ListenFirst", "#PresentParenting"],
    category: "Quotes",
  },
  {
    id: "3",
    title: "Presence Over Perfection",
    caption:
      "You don't need to be a perfect parent. You need to be a present one. 30 minutes and 20 seconds. That's all it takes.",
    gradient: "from-quality-light to-quality",
    hashtags: ["#RootedInGood", "#PresenceOverPerfection", "#GoodEnoughParent"],
    category: "Quotes",
  },
  {
    id: "4",
    title: "The 10-Minute Listen Challenge",
    caption:
      "Set a timer for 10 minutes. Sit with your child. Ask one question. Then just listen. No advice. No judgment. Just presence.",
    gradient: "from-listen-light via-listen to-listen-dark",
    hashtags: ["#RootedInGood", "#ListenChallenge", "#IntentionalParenting"],
    category: "Tips",
  },
  {
    id: "5",
    title: "Connection Is a Skill, Not a Talent",
    caption:
      "Nobody is born knowing how to connect with their kids. It's a practice. And like any practice, it gets easier the more you show up.",
    gradient: "from-touch-light via-accent-light to-quality-light",
    hashtags: ["#RootedInGood", "#ParentingJourney", "#ConnectionMatters"],
    category: "Quotes",
  },
  {
    id: "6",
    title: "The 3 Touchpoints Infographic",
    caption:
      "Touch (20 sec) + Listen (10 min) + Quality Time (20 min) = A transformed relationship. Save this and try it for one week.",
    gradient: "from-touch via-listen to-quality",
    hashtags: [
      "#RootedInGood",
      "#3Touchpoints",
      "#ParentingMethod",
      "#DailyConnection",
    ],
    category: "Infographics",
  },
];

const categories = ["All", "Quotes", "Tips", "Infographics"] as const;

export default function SharePage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredItems =
    activeCategory === "All"
      ? shareableItems
      : shareableItems.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-warm-white">
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-touch-light/40 via-listen-light/30 to-quality-light/20" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Share2 size={18} className="text-touch-dark" />
              <span className="text-sm font-medium text-text">
                Shareable Content Gallery
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-text leading-tight">
              Share the <span className="text-touch-dark">Good</span>
            </h1>
            <p className="mt-6 text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
              Download beautiful graphics and quotes to share with other
              parents. Help spread the message that connection is simple.
            </p>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex gap-2 justify-center flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-semibold transition-colors",
                activeCategory === category
                  ? "bg-touch text-white"
                  : "bg-white text-text-muted border border-border hover:border-touch"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Content Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Gradient Image Placeholder */}
              <div
                className={cn(
                  "bg-gradient-to-br h-52 flex items-center justify-center p-6",
                  item.gradient
                )}
              >
                <p className="text-white font-bold text-xl text-center drop-shadow-sm leading-snug">
                  {item.title}
                </p>
              </div>

              {/* Card Body */}
              <div className="p-5">
                <h3 className="font-bold text-text mb-2">{item.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed mb-4 line-clamp-3">
                  {item.caption}
                </p>

                {/* Hashtags */}
                <div className="flex items-start gap-1 mb-4 flex-wrap">
                  <Hash size={14} className="text-listen mt-0.5 flex-shrink-0" />
                  <div className="flex flex-wrap gap-1">
                    {item.hashtags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-listen-dark font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Download Button */}
                <button className="w-full flex items-center justify-center gap-2 bg-touch text-white px-4 py-3 rounded-lg font-semibold hover:bg-touch-dark transition-colors">
                  <Download size={18} />
                  Download &amp; Share
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <Share2 className="mx-auto text-text-muted mb-4" size={48} />
            <h3 className="text-xl font-bold text-text mb-2">
              No content in this category yet
            </h3>
            <p className="text-text-muted">
              Check back soon for new shareable content.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Plus, Download, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ShareableContent } from "@/types";

const sampleContent: ShareableContent[] = [
  {
    id: "1",
    title: "20 Seconds Changes Everything",
    imageUrl: "",
    caption:
      "A 20-second hug releases oxytocin and tells your child: you are safe.",
    hashtags: ["#RootedInGood", "#20SecondHug", "#ParentingWithPresence"],
    category: "Quotes",
    downloadCount: 147,
  },
  {
    id: "2",
    title: "Listen Without Fixing",
    imageUrl: "",
    caption:
      "Sometimes they don't need solutions. They need to be heard.",
    hashtags: ["#RootedInGood", "#ListenFirst", "#PresentParenting"],
    category: "Quotes",
    downloadCount: 92,
  },
  {
    id: "3",
    title: "The 3 Touchpoints",
    imageUrl: "",
    caption:
      "Touch (20s) + Listen (10m) + Quality Time (20m) = Transformation.",
    hashtags: ["#RootedInGood", "#3Touchpoints", "#DailyConnection"],
    category: "Infographics",
    downloadCount: 234,
  },
  {
    id: "4",
    title: "Presence Over Perfection",
    imageUrl: "",
    caption:
      "You don't need to be a perfect parent. You need to be a present one.",
    hashtags: ["#RootedInGood", "#PresenceOverPerfection"],
    category: "Quotes",
    downloadCount: 189,
  },
  {
    id: "5",
    title: "10-Minute Listen Challenge",
    imageUrl: "",
    caption: "Set a timer. Sit with your child. Ask one question. Then listen.",
    hashtags: ["#RootedInGood", "#ListenChallenge"],
    category: "Tips",
    downloadCount: 63,
  },
  {
    id: "6",
    title: "Connection Is a Skill",
    imageUrl: "",
    caption:
      "Nobody is born knowing how to connect. It's a practice that gets easier.",
    hashtags: ["#RootedInGood", "#ConnectionMatters"],
    category: "Quotes",
    downloadCount: 78,
  },
];

const categoryGradients: Record<string, string> = {
  Quotes: "from-touch-light to-touch",
  Tips: "from-listen-light to-listen",
  Infographics: "from-quality-light to-quality",
};

export default function ShareableContentPage() {
  const [showForm, setShowForm] = useState(false);
  const [formTitle, setFormTitle] = useState("");
  const [formCaption, setFormCaption] = useState("");
  const [formHashtags, setFormHashtags] = useState("");
  const [formCategory, setFormCategory] = useState("Quotes");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-text">Shareable Content</h2>
          <p className="text-text-muted text-sm mt-1">
            Manage downloadable content for your community
          </p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 bg-touch text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-touch-dark transition-colors text-sm"
        >
          {showForm ? <X size={18} /> : <Plus size={18} />}
          {showForm ? "Cancel" : "Create New"}
        </button>
      </div>

      {/* Create Form */}
      {showForm && (
        <div className="bg-white rounded-2xl border border-border shadow-sm p-6 space-y-4">
          <h3 className="text-lg font-semibold text-text">
            Create Shareable Content
          </h3>

          <div>
            <label className="block text-sm font-medium text-text mb-1">
              Title
            </label>
            <input
              type="text"
              value={formTitle}
              onChange={(e) => setFormTitle(e.target.value)}
              placeholder="Enter a title for this content"
              className="w-full border border-border rounded-lg px-3 py-2.5 text-sm text-text placeholder:text-text-muted focus:outline-none focus:border-touch"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text mb-1">
              Caption
            </label>
            <textarea
              value={formCaption}
              onChange={(e) => setFormCaption(e.target.value)}
              placeholder="Write a caption for social media"
              rows={3}
              className="w-full border border-border rounded-lg px-3 py-2.5 text-sm text-text placeholder:text-text-muted focus:outline-none focus:border-touch resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text mb-1">
              Hashtags
            </label>
            <input
              type="text"
              value={formHashtags}
              onChange={(e) => setFormHashtags(e.target.value)}
              placeholder="#RootedInGood #ParentingTip"
              className="w-full border border-border rounded-lg px-3 py-2.5 text-sm text-text placeholder:text-text-muted focus:outline-none focus:border-touch"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text mb-1">
              Category
            </label>
            <select
              value={formCategory}
              onChange={(e) => setFormCategory(e.target.value)}
              className="bg-white border border-border rounded-lg px-3 py-2.5 text-sm text-text focus:outline-none focus:border-touch"
            >
              <option value="Quotes">Quotes</option>
              <option value="Tips">Tips</option>
              <option value="Infographics">Infographics</option>
            </select>
          </div>

          <div className="flex gap-3 pt-2">
            <button className="bg-touch text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-touch-dark transition-colors">
              Create Content
            </button>
            <button
              onClick={() => setShowForm(false)}
              className="bg-soft-gray text-text px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-border transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Content Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleContent.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden"
          >
            {/* Gradient Image Placeholder */}
            <div
              className={cn(
                "bg-gradient-to-br h-40 flex items-center justify-center p-4",
                categoryGradients[item.category] || "from-touch-light to-touch"
              )}
            >
              <p className="text-white font-bold text-lg text-center drop-shadow-sm">
                {item.title}
              </p>
            </div>

            {/* Card Body */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold bg-soft-gray text-text-muted px-2 py-1 rounded-full">
                  {item.category}
                </span>
                <div className="flex items-center gap-1 text-text-muted">
                  <Download size={14} />
                  <span className="text-xs font-medium">
                    {item.downloadCount}
                  </span>
                </div>
              </div>

              <h3 className="font-semibold text-text text-sm mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-text-muted mb-3 line-clamp-2">
                {item.caption}
              </p>

              <div className="flex flex-wrap gap-1 mb-3">
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
          </div>
        ))}
      </div>
    </div>
  );
}

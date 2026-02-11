"use client";

import { useState } from "react";
import Link from "next/link";
import { BookOpen, PenTool, GraduationCap, ShoppingBag, ArrowRight } from "lucide-react";
import { formatPrice } from "@/core/shop/cart";
import type { ProductType } from "@/types";
import { useCartStore } from "@/stores/cart";

type TypeConfig = {
  [key in ProductType]: {
    label: string;
    icon: typeof BookOpen;
    gradient: string;
    badge: string;
  };
};

interface ProductRow {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  type: string;
  imageUrl: string;
  previewUrl: string | null;
  downloadUrl: string | null;
}

const filterTabs: { label: string; value: ProductType | "ALL" }[] = [
  { label: "All", value: "ALL" },
  { label: "Books", value: "BOOK" },
  { label: "Workbooks", value: "WORKBOOK" },
  { label: "Courses", value: "COURSE" },
];

const typeConfig: TypeConfig = {
  BOOK: {
    label: "Book",
    icon: BookOpen,
    gradient: "from-touch-light/40 to-touch-light/10",
    badge: "bg-touch-light text-touch-dark",
  },
  WORKBOOK: {
    label: "Workbook",
    icon: PenTool,
    gradient: "from-listen-light/40 to-listen-light/10",
    badge: "bg-listen-light text-listen-dark",
  },
  COURSE: {
    label: "Course",
    icon: GraduationCap,
    gradient: "from-quality-light/40 to-quality-light/10",
    badge: "bg-quality-light text-quality-dark",
  },
};

export default function ProductGrid({
  products,
}: {
  products: ProductRow[];
}) {
  const [activeFilter, setActiveFilter] = useState<ProductType | "ALL">("ALL");
  const add = useCartStore((s) => s.add);

  const filtered =
    activeFilter === "ALL"
      ? products
      : products.filter((p) => p.type === activeFilter);

  return (
    <>
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-10 justify-center">
        {filterTabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveFilter(tab.value)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
              activeFilter === tab.value
                ? "bg-touch text-white shadow-sm"
                : "bg-white text-text-muted border border-border hover:border-touch hover:text-text"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-text-muted text-lg">
            No products found in this category yet. Check back soon!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product) => {
            const config = typeConfig[product.type as ProductType] ?? typeConfig.BOOK;
            const Icon = config.icon;

            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col hover-lift"
              >
                {/* Image Placeholder */}
                <div
                  className={`bg-gradient-to-br ${config.gradient} p-8 flex items-center justify-center aspect-[4/3]`}
                >
                  <div className="text-center">
                    <Icon className="mx-auto text-text/60 mb-3" size={40} />
                    <p className="text-sm text-text-muted font-medium">
                      {product.name}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Type Badge */}
                  <span
                    className={`inline-block self-start px-3 py-1 rounded-full text-xs font-semibold mb-3 ${config.badge}`}
                  >
                    {config.label}
                  </span>

                  <h3 className="text-lg font-bold text-text mb-2">
                    {product.name}
                  </h3>

                  <p className="text-text-muted text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                    {product.description}
                  </p>

                  <p className="text-2xl font-bold text-text mb-5">
                    {formatPrice(product.price)}
                  </p>

                  <div className="flex gap-3">
                    <button
                      onClick={() =>
                        add({
                          id: product.id,
                          name: product.name,
                          slug: product.slug,
                          description: product.description,
                          price: product.price,
                          type: product.type as ProductType,
                          imageUrl: product.imageUrl,
                          previewUrl: product.previewUrl ?? undefined,
                          downloadUrl: product.downloadUrl ?? undefined,
                        })
                      }
                      className="flex-1 bg-touch text-white px-4 py-3 rounded-xl font-semibold hover:bg-touch-dark transition-colors flex items-center justify-center gap-2 text-sm"
                    >
                      <ShoppingBag size={16} /> Add to Cart
                    </button>
                    <Link
                      href={`/shop/${product.slug}`}
                      className="flex-1 bg-white text-text px-4 py-3 rounded-xl font-semibold border border-border hover:border-listen transition-colors flex items-center justify-center gap-2 text-sm"
                    >
                      Learn More <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

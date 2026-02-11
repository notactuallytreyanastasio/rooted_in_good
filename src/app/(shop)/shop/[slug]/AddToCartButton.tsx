"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingBag, Check } from "lucide-react";
import type { Product } from "@/types";
import { useCartStore } from "@/stores/cart";

export default function AddToCartButton({ product }: { product: Product }) {
  const [added, setAdded] = useState(false);
  const add = useCartStore((s) => s.add);

  function handleAdd() {
    add(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <button
        onClick={handleAdd}
        className={`flex-1 px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-colors ${
          added
            ? "bg-touch-dark text-white"
            : "bg-touch text-white hover:bg-touch-dark"
        }`}
      >
        {added ? (
          <>
            <Check size={20} /> Added to Cart
          </>
        ) : (
          <>
            <ShoppingBag size={20} /> Add to Cart
          </>
        )}
      </button>
      <Link
        href="/cart"
        className="flex-1 bg-white text-text px-8 py-4 rounded-xl font-semibold text-lg border border-border hover:border-listen transition-colors flex items-center justify-center"
      >
        View Cart
      </Link>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { useCartStore } from "@/stores/cart";
import { formatPrice } from "@/core/shop/cart";
import { Heart, ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

export default function CheckoutPage() {
  const items = useCartStore((s) => s.items);
  const total = useCartStore((s) => s.total);
  const count = useCartStore((s) => s.count);
  const clear = useCartStore((s) => s.clear);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Mock purchase - clear cart and show success
    clear();
    setSuccess(true);
  }

  if (success) {
    return (
      <div className="bg-warm-white min-h-screen">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-20 text-center">
          <div className="bg-gradient-to-br from-touch-light/50 via-listen-light/30 to-quality-light/50 rounded-3xl p-12 sm:p-16">
            <div className="w-20 h-20 bg-touch rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="text-white" size={40} />
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-text mb-4">
              Welcome to the Family!
            </h1>

            <p className="text-lg text-text-muted max-w-md mx-auto mb-4">
              Your purchase is complete. You&apos;re about to embark on a
              beautiful journey of connection with your children.
            </p>

            <p className="text-text-muted mb-10 flex items-center justify-center gap-2">
              <Heart size={16} className="text-quality" fill="currentColor" />
              Every great journey starts with a single step.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/journey"
                className="bg-touch text-white px-8 py-4 rounded-full font-semibold hover:bg-touch-dark transition-colors flex items-center justify-center gap-2"
              >
                Start Your Journey <ArrowRight size={18} />
              </Link>
              <Link
                href="/shop"
                className="bg-white text-text px-8 py-4 rounded-full font-semibold border border-border hover:border-listen transition-colors"
              >
                Back to Shop
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const isEmpty = items.length === 0;

  if (isEmpty) {
    return (
      <div className="bg-warm-white min-h-screen">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-20 text-center">
          <h1 className="text-3xl font-bold text-text mb-4">Checkout</h1>
          <p className="text-text-muted mb-8">
            Your cart is empty. Add some items before checking out.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-touch text-white px-8 py-4 rounded-full font-semibold hover:bg-touch-dark transition-colors"
          >
            <ArrowLeft size={18} /> Browse the Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-warm-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Header */}
        <Link
          href="/cart"
          className="inline-flex items-center gap-2 text-text-muted hover:text-text transition-colors text-sm font-medium mb-8"
        >
          <ArrowLeft size={16} />
          Back to Cart
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-text mb-10">
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="bg-white rounded-2xl border border-border shadow-sm p-6 sm:p-8">
                <h2 className="text-xl font-bold text-text mb-6">
                  Your Information
                </h2>

                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-text mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-warm-white text-text placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-touch/50 focus:border-touch transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-text mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-warm-white text-text placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-touch/50 focus:border-touch transition-colors"
                    />
                    <p className="text-xs text-text-muted mt-2">
                      We&apos;ll send your purchase confirmation and materials
                      here.
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-touch text-white py-4 rounded-xl font-semibold text-lg hover:bg-touch-dark transition-colors flex items-center justify-center gap-2"
              >
                Complete Purchase <CheckCircle size={20} />
              </button>
            </form>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-border shadow-sm p-6 sticky top-24">
              <h2 className="text-lg font-bold text-text mb-5">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex justify-between gap-3"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-text truncate">
                        {item.product.name}
                      </p>
                      <p className="text-xs text-text-muted">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-text whitespace-nowrap">
                      {formatPrice(item.product.price * item.quantity)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4 space-y-2">
                <div className="flex justify-between text-sm text-text-muted">
                  <span>
                    Subtotal ({count()} {count() === 1 ? "item" : "items"})
                  </span>
                  <span>{formatPrice(total())}</span>
                </div>
                <div className="flex justify-between text-sm text-text-muted">
                  <span>Tax</span>
                  <span>$0.00</span>
                </div>
                <div className="border-t border-border pt-2 flex justify-between">
                  <span className="font-bold text-text">Total</span>
                  <span className="font-bold text-text">
                    {formatPrice(total())}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

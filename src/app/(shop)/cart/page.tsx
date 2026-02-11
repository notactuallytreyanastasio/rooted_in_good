"use client";

import { useCartStore } from "@/stores/cart";
import { formatPrice } from "@/core/shop/cart";
import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, ArrowRight } from "lucide-react";

export default function CartPage() {
  const items = useCartStore((s) => s.items);
  const add = useCartStore((s) => s.add);
  const remove = useCartStore((s) => s.remove);
  const decrement = useCartStore((s) => s.decrement);
  const clear = useCartStore((s) => s.clear);
  const total = useCartStore((s) => s.total);
  const count = useCartStore((s) => s.count);

  const isEmpty = items.length === 0;

  return (
    <div className="bg-warm-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-text">
              Your Cart
            </h1>
            {!isEmpty && (
              <p className="text-text-muted mt-1">
                {count()} {count() === 1 ? "item" : "items"}
              </p>
            )}
          </div>
          {!isEmpty && (
            <button
              onClick={clear}
              className="text-sm text-text-muted hover:text-quality-dark transition-colors font-medium"
            >
              Clear Cart
            </button>
          )}
        </div>

        {isEmpty ? (
          /* Empty State */
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-soft-gray rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="text-text-muted" size={32} />
            </div>
            <h2 className="text-xl font-bold text-text mb-2">
              Your cart is empty
            </h2>
            <p className="text-text-muted mb-8 max-w-md mx-auto">
              Discover our books, workbooks, and courses to start your
              connection journey.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-touch text-white px-8 py-4 rounded-full font-semibold hover:bg-touch-dark transition-colors"
            >
              <ArrowLeft size={18} /> Browse the Shop
            </Link>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="space-y-4 mb-10">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="bg-white rounded-2xl border border-border shadow-sm p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5"
                >
                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/shop/${item.product.slug}`}
                      className="text-lg font-bold text-text hover:text-touch-dark transition-colors"
                    >
                      {item.product.name}
                    </Link>
                    <p className="text-sm text-text-muted mt-1">
                      {item.product.type === "BOOK"
                        ? "Book"
                        : item.product.type === "WORKBOOK"
                          ? "Workbook"
                          : "Course"}
                    </p>
                    <p className="text-text font-semibold mt-1">
                      {formatPrice(item.product.price)}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decrement(item.product.id)}
                      className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-text-muted hover:border-listen hover:text-text transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-8 text-center font-semibold text-text">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => add(item.product)}
                      className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-text-muted hover:border-listen hover:text-text transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  {/* Line Total & Remove */}
                  <div className="flex items-center gap-4 sm:min-w-[140px] sm:justify-end">
                    <p className="text-lg font-bold text-text">
                      {formatPrice(item.product.price * item.quantity)}
                    </p>
                    <button
                      onClick={() => remove(item.product.id)}
                      className="text-text-muted hover:text-quality-dark transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-2xl border border-border shadow-sm p-6 sm:p-8">
              <h2 className="text-xl font-bold text-text mb-6">
                Order Summary
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-text-muted">
                  <span>Subtotal</span>
                  <span>{formatPrice(total())}</span>
                </div>
                <div className="flex justify-between text-text-muted">
                  <span>Tax</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="border-t border-border pt-3 flex justify-between">
                  <span className="text-lg font-bold text-text">Total</span>
                  <span className="text-lg font-bold text-text">
                    {formatPrice(total())}
                  </span>
                </div>
              </div>

              <Link
                href="/checkout"
                className="w-full bg-touch text-white py-4 rounded-xl font-semibold text-lg hover:bg-touch-dark transition-colors flex items-center justify-center gap-2"
              >
                Proceed to Checkout <ArrowRight size={20} />
              </Link>

              <Link
                href="/shop"
                className="block text-center mt-4 text-sm text-text-muted hover:text-text transition-colors font-medium"
              >
                Continue Shopping
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

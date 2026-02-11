import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem, Product } from "@/types";
import {
  addToCart,
  removeFromCart,
  decrementQuantity,
  cartTotal,
  cartItemCount,
} from "@/core/shop/cart";

interface CartState {
  items: CartItem[];
  add: (product: Product) => void;
  remove: (productId: string) => void;
  decrement: (productId: string) => void;
  clear: () => void;
  total: () => number;
  count: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      add: (product) => set({ items: addToCart(get().items, product) }),

      remove: (productId) =>
        set({ items: removeFromCart(get().items, productId) }),

      decrement: (productId) =>
        set({ items: decrementQuantity(get().items, productId) }),

      clear: () => set({ items: [] }),

      total: () => cartTotal(get().items),

      count: () => cartItemCount(get().items),
    }),
    {
      name: "rooted-cart",
    }
  )
);

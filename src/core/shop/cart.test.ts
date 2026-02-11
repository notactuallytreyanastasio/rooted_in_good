import { describe, it, expect } from "vitest";
import {
  addToCart,
  removeFromCart,
  decrementQuantity,
  cartTotal,
  cartItemCount,
  formatPrice,
  isInCart,
} from "./cart";
import type { Product, CartItem } from "@/types";

const book: Product = {
  id: "p1",
  name: "The Book",
  slug: "the-book",
  description: "A book",
  price: 24.99,
  type: "BOOK",
  imageUrl: "/book.jpg",
};

const workbook: Product = {
  id: "p2",
  name: "Workbook",
  slug: "workbook",
  description: "A workbook",
  price: 14.99,
  type: "WORKBOOK",
  imageUrl: "/workbook.jpg",
};

describe("addToCart", () => {
  it("adds a new product", () => {
    const result = addToCart([], book);
    expect(result).toHaveLength(1);
    expect(result[0].product.id).toBe("p1");
    expect(result[0].quantity).toBe(1);
  });

  it("increments quantity for existing product", () => {
    const cart: CartItem[] = [{ product: book, quantity: 1 }];
    const result = addToCart(cart, book);
    expect(result).toHaveLength(1);
    expect(result[0].quantity).toBe(2);
  });

  it("does not mutate original cart", () => {
    const cart: CartItem[] = [];
    addToCart(cart, book);
    expect(cart).toHaveLength(0);
  });
});

describe("removeFromCart", () => {
  it("removes a product", () => {
    const cart: CartItem[] = [{ product: book, quantity: 2 }];
    const result = removeFromCart(cart, "p1");
    expect(result).toHaveLength(0);
  });

  it("only removes the specified product", () => {
    const cart: CartItem[] = [
      { product: book, quantity: 1 },
      { product: workbook, quantity: 1 },
    ];
    const result = removeFromCart(cart, "p1");
    expect(result).toHaveLength(1);
    expect(result[0].product.id).toBe("p2");
  });
});

describe("decrementQuantity", () => {
  it("decrements quantity by 1", () => {
    const cart: CartItem[] = [{ product: book, quantity: 3 }];
    const result = decrementQuantity(cart, "p1");
    expect(result[0].quantity).toBe(2);
  });

  it("removes item when quantity reaches 0", () => {
    const cart: CartItem[] = [{ product: book, quantity: 1 }];
    const result = decrementQuantity(cart, "p1");
    expect(result).toHaveLength(0);
  });
});

describe("cartTotal", () => {
  it("returns 0 for empty cart", () => {
    expect(cartTotal([])).toBe(0);
  });

  it("calculates total with quantities", () => {
    const cart: CartItem[] = [
      { product: book, quantity: 2 },
      { product: workbook, quantity: 1 },
    ];
    expect(cartTotal(cart)).toBeCloseTo(64.97, 2);
  });
});

describe("cartItemCount", () => {
  it("returns 0 for empty cart", () => {
    expect(cartItemCount([])).toBe(0);
  });

  it("sums all quantities", () => {
    const cart: CartItem[] = [
      { product: book, quantity: 2 },
      { product: workbook, quantity: 3 },
    ];
    expect(cartItemCount(cart)).toBe(5);
  });
});

describe("formatPrice", () => {
  it("formats with 2 decimal places", () => {
    expect(formatPrice(24.99)).toBe("$24.99");
    expect(formatPrice(10)).toBe("$10.00");
    expect(formatPrice(0)).toBe("$0.00");
  });
});

describe("isInCart", () => {
  it("returns true when product is in cart", () => {
    const cart: CartItem[] = [{ product: book, quantity: 1 }];
    expect(isInCart(cart, "p1")).toBe(true);
  });

  it("returns false when product is not in cart", () => {
    expect(isInCart([], "p1")).toBe(false);
  });
});

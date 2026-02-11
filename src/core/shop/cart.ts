import type { CartItem, Product } from "@/types";

/** Add a product to the cart (or increment quantity if already there) */
export function addToCart(cart: CartItem[], product: Product): CartItem[] {
  const existing = cart.find((item) => item.product.id === product.id);
  if (existing) {
    return cart.map((item) =>
      item.product.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cart, { product, quantity: 1 }];
}

/** Remove a product from the cart entirely */
export function removeFromCart(cart: CartItem[], productId: string): CartItem[] {
  return cart.filter((item) => item.product.id !== productId);
}

/** Decrement quantity (remove if quantity reaches 0) */
export function decrementQuantity(
  cart: CartItem[],
  productId: string
): CartItem[] {
  return cart
    .map((item) =>
      item.product.id === productId
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
    .filter((item) => item.quantity > 0);
}

/** Calculate cart total price */
export function cartTotal(cart: CartItem[]): number {
  return cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
}

/** Calculate total number of items in cart */
export function cartItemCount(cart: CartItem[]): number {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

/** Format price as USD string */
export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

/** Check if a specific product is in the cart */
export function isInCart(cart: CartItem[], productId: string): boolean {
  return cart.some((item) => item.product.id === productId);
}

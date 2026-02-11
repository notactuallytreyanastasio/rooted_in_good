import type { Product, ProductType, Purchase } from "@/types";

/** Filter products by type */
export function filterByType(
  products: Product[],
  type: ProductType
): Product[] {
  return products.filter((p) => p.type === type);
}

/** Sort products by price (ascending or descending) */
export function sortByPrice(
  products: Product[],
  direction: "asc" | "desc" = "asc"
): Product[] {
  return [...products].sort((a, b) =>
    direction === "asc" ? a.price - b.price : b.price - a.price
  );
}

/** Sort products by name alphabetically */
export function sortByName(products: Product[]): Product[] {
  return [...products].sort((a, b) => a.name.localeCompare(b.name));
}

/** Check if a user has access to a product (has purchased it) */
export function hasAccess(
  purchases: Purchase[],
  productId: string
): boolean {
  return purchases.some(
    (p) => p.productId === productId && p.status === "COMPLETED"
  );
}

/** Get all products a user has purchased */
export function purchasedProducts(
  products: Product[],
  purchases: Purchase[]
): Product[] {
  const purchasedIds = new Set(
    purchases.filter((p) => p.status === "COMPLETED").map((p) => p.productId)
  );
  return products.filter((p) => purchasedIds.has(p.id));
}

/** Get products a user hasn't purchased yet */
export function unpurchasedProducts(
  products: Product[],
  purchases: Purchase[]
): Product[] {
  const purchasedIds = new Set(
    purchases.filter((p) => p.status === "COMPLETED").map((p) => p.productId)
  );
  return products.filter((p) => !purchasedIds.has(p.id));
}

/** Search products by name or description */
export function searchProducts(products: Product[], query: string): Product[] {
  const lower = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lower) ||
      p.description.toLowerCase().includes(lower)
  );
}

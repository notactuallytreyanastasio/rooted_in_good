import { describe, it, expect } from "vitest";
import {
  filterByType,
  sortByPrice,
  sortByName,
  hasAccess,
  purchasedProducts,
  unpurchasedProducts,
  searchProducts,
} from "./products";
import type { Product, Purchase } from "@/types";

const products: Product[] = [
  { id: "p1", name: "The Book", slug: "book", description: "Main book", price: 24.99, type: "BOOK", imageUrl: "" },
  { id: "p2", name: "Workbook", slug: "workbook", description: "Companion workbook", price: 14.99, type: "WORKBOOK", imageUrl: "" },
  { id: "p3", name: "Connection Cards", slug: "cards", description: "Activity cards", price: 19.99, type: "WORKBOOK", imageUrl: "" },
  { id: "p4", name: "Deep Roots Course", slug: "course", description: "Video course", price: 49.99, type: "COURSE", imageUrl: "" },
];

describe("filterByType", () => {
  it("filters by BOOK type", () => {
    const result = filterByType(products, "BOOK");
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("p1");
  });

  it("filters by WORKBOOK type", () => {
    expect(filterByType(products, "WORKBOOK")).toHaveLength(2);
  });

  it("returns empty for no matches", () => {
    expect(filterByType([], "BOOK")).toHaveLength(0);
  });
});

describe("sortByPrice", () => {
  it("sorts ascending by default", () => {
    const result = sortByPrice(products);
    expect(result[0].price).toBe(14.99);
    expect(result[result.length - 1].price).toBe(49.99);
  });

  it("sorts descending", () => {
    const result = sortByPrice(products, "desc");
    expect(result[0].price).toBe(49.99);
  });

  it("does not mutate original", () => {
    sortByPrice(products, "desc");
    expect(products[0].id).toBe("p1");
  });
});

describe("sortByName", () => {
  it("sorts alphabetically", () => {
    const result = sortByName(products);
    expect(result[0].name).toBe("Connection Cards");
    expect(result[result.length - 1].name).toBe("Workbook");
  });
});

describe("hasAccess", () => {
  const purchases: Purchase[] = [
    { id: "pu1", userId: "u1", productId: "p1", status: "COMPLETED", createdAt: "2026-01-01" },
  ];

  it("returns true for purchased product", () => {
    expect(hasAccess(purchases, "p1")).toBe(true);
  });

  it("returns false for non-purchased product", () => {
    expect(hasAccess(purchases, "p2")).toBe(false);
  });

  it("returns false for empty purchases", () => {
    expect(hasAccess([], "p1")).toBe(false);
  });
});

describe("purchasedProducts / unpurchasedProducts", () => {
  const purchases: Purchase[] = [
    { id: "pu1", userId: "u1", productId: "p1", status: "COMPLETED", createdAt: "2026-01-01" },
    { id: "pu2", userId: "u1", productId: "p3", status: "COMPLETED", createdAt: "2026-01-02" },
  ];

  it("returns only purchased products", () => {
    const result = purchasedProducts(products, purchases);
    expect(result.map((p) => p.id)).toEqual(["p1", "p3"]);
  });

  it("returns only unpurchased products", () => {
    const result = unpurchasedProducts(products, purchases);
    expect(result.map((p) => p.id)).toEqual(["p2", "p4"]);
  });
});

describe("searchProducts", () => {
  it("searches by name", () => {
    const result = searchProducts(products, "book");
    expect(result).toHaveLength(2); // "The Book" and "Workbook"
  });

  it("searches by description", () => {
    const result = searchProducts(products, "video");
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("p4");
  });

  it("is case insensitive", () => {
    expect(searchProducts(products, "BOOK")).toHaveLength(2);
  });

  it("returns empty for no matches", () => {
    expect(searchProducts(products, "xyz")).toHaveLength(0);
  });
});

import type { Metadata } from "next";
import { staticProducts } from "@/lib/static-data";
import ProductGrid from "./ProductGrid";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Books, workbooks, and guided courses designed to help you build lasting connection with your children.",
};

const isStatic = process.env.STATIC_EXPORT === "true";

export default async function ShopPage() {
  let serializedProducts;

  if (isStatic) {
    serializedProducts = staticProducts;
  } else {
    const { prisma } = await import("@/lib/db");
    const products = await prisma.product.findMany({
      orderBy: { name: "asc" },
    });
    serializedProducts = products.map((p: any) => ({
      id: p.id,
      name: p.name,
      slug: p.slug,
      description: p.description,
      price: p.price,
      type: p.type,
      imageUrl: p.imageUrl,
      previewUrl: p.previewUrl,
      downloadUrl: p.downloadUrl,
    }));
  }

  return (
    <div className="bg-warm-white min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-touch-light/30 via-listen-light/20 to-quality-light/20" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-text">
            Tools for the Journey
          </h1>
          <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
            Everything you need to build lasting connection with your children.
            Books, workbooks, and guided courses designed with love.
          </p>
        </div>
      </section>

      {/* Product Grid with Filter Tabs */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <ProductGrid products={serializedProducts} />
      </section>
    </div>
  );
}

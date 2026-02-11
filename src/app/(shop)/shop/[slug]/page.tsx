import { staticProducts } from "@/lib/static-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BookOpen, PenTool, GraduationCap, ArrowLeft } from "lucide-react";
import { formatPrice } from "@/core/shop/cart";
import type { ProductType } from "@/types";
import AddToCartButton from "./AddToCartButton";

const isStatic = process.env.STATIC_EXPORT === "true";

const typeConfig: Record<
  string,
  {
    label: string;
    icon: typeof BookOpen;
    gradient: string;
    badge: string;
    border: string;
  }
> = {
  BOOK: {
    label: "Book",
    icon: BookOpen,
    gradient: "from-touch-light via-touch/30 to-listen-light/40",
    badge: "bg-touch-light text-touch-dark",
    border: "border-touch-light",
  },
  WORKBOOK: {
    label: "Workbook",
    icon: PenTool,
    gradient: "from-listen-light via-listen/30 to-quality-light/40",
    badge: "bg-listen-light text-listen-dark",
    border: "border-listen-light",
  },
  COURSE: {
    label: "Course",
    icon: GraduationCap,
    gradient: "from-quality-light via-quality/30 to-touch-light/40",
    badge: "bg-quality-light text-quality-dark",
    border: "border-quality-light",
  },
};

export async function generateStaticParams() {
  return staticProducts.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  type ProductData = {
    id: string;
    name: string;
    slug: string;
    description: string;
    price: number;
    type: string;
    imageUrl: string;
    previewUrl: string | null;
    downloadUrl: string | null;
  };

  let product: ProductData | undefined | null;
  let relatedProducts: ProductData[] = [];

  if (isStatic) {
    product = staticProducts.find((p) => p.slug === slug);
    if (product) {
      relatedProducts = staticProducts.filter(
        (p) => p.type === product!.type && p.id !== product!.id
      );
    }
  } else {
    const { prisma } = await import("@/lib/db");
    product = await prisma.product.findUnique({ where: { slug } });
    if (product) {
      relatedProducts = (
        await prisma.product.findMany({
          where: { type: product.type, id: { not: product.id } },
          take: 3,
        })
      ).map((p) => ({
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
  }

  if (!product) {
    notFound();
  }

  const config = typeConfig[product.type] ?? typeConfig.BOOK;
  const Icon = config.icon;

  return (
    <div className="bg-warm-white min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-text-muted hover:text-text transition-colors text-sm font-medium"
        >
          <ArrowLeft size={16} />
          Back to Shop
        </Link>
      </div>

      {/* Product Detail */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image Placeholder */}
          <div
            className={`bg-gradient-to-br ${config.gradient} rounded-2xl p-12 flex items-center justify-center aspect-square max-w-lg mx-auto w-full`}
          >
            <div className="text-center">
              <Icon className="mx-auto text-text/50 mb-4" size={64} />
              <h3 className="text-xl font-bold text-text mb-1">
                {product.name}
              </h3>
              <p className="text-text-muted text-sm">{config.label}</p>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${config.badge}`}
            >
              {config.label}
            </span>

            <h1 className="text-3xl sm:text-4xl font-bold text-text mb-4">
              {product.name}
            </h1>

            <p className="text-3xl font-bold text-text mb-6">
              {formatPrice(product.price)}
            </p>

            <div className="prose prose-gray max-w-none mb-8">
              <p className="text-text-muted text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Features based on type */}
            <div className="space-y-3 mb-8">
              {product.type === "BOOK" && (
                <>
                  <Feature text="Complete guide to the Rooted in Good Method" />
                  <Feature text="8-week guided journey with daily prompts" />
                  <Feature text="Real stories from parents like you" />
                  <Feature text="Digital download - start reading immediately" />
                </>
              )}
              {product.type === "WORKBOOK" && (
                <>
                  <Feature text="Hands-on exercises for each week" />
                  <Feature text="Reflection prompts and journaling space" />
                  <Feature text="Printable activity sheets" />
                  <Feature text="Companion to the main book" />
                </>
              )}
              {product.type === "COURSE" && (
                <>
                  <Feature text="Video lessons with guided instruction" />
                  <Feature text="Weekly live Q&A sessions" />
                  <Feature text="Community access included" />
                  <Feature text="Lifetime access to all materials" />
                </>
              )}
            </div>

            {/* Add to Cart */}
            <AddToCartButton product={{
              id: product.id,
              name: product.name,
              slug: product.slug,
              description: product.description,
              price: product.price,
              type: product.type as ProductType,
              imageUrl: product.imageUrl,
              previewUrl: product.previewUrl ?? undefined,
              downloadUrl: product.downloadUrl ?? undefined,
            }} />
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
          <h2 className="text-2xl font-bold text-text mb-8">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((related) => {
              const relConfig = typeConfig[related.type] ?? typeConfig.BOOK;
              const RelIcon = relConfig.icon;

              return (
                <Link
                  key={related.id}
                  href={`/shop/${related.slug}`}
                  className={`bg-white rounded-2xl border ${relConfig.border} shadow-sm overflow-hidden hover:shadow-md transition-shadow block`}
                >
                  <div
                    className={`bg-gradient-to-br ${relConfig.gradient} p-6 flex items-center justify-center aspect-[4/3]`}
                  >
                    <RelIcon className="text-text/50" size={36} />
                  </div>
                  <div className="p-5">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold mb-2 ${relConfig.badge}`}
                    >
                      {relConfig.label}
                    </span>
                    <h3 className="font-bold text-text mb-1">{related.name}</h3>
                    <p className="text-text-muted text-sm line-clamp-2 mb-2">
                      {related.description}
                    </p>
                    <p className="font-bold text-text">
                      {formatPrice(related.price)}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1.5 w-5 h-5 bg-touch-light rounded-full flex items-center justify-center flex-shrink-0">
        <div className="w-2 h-2 bg-touch-dark rounded-full" />
      </div>
      <span className="text-text-muted">{text}</span>
    </div>
  );
}

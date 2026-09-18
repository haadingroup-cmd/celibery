import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ProductVisual } from "@/components/ui/ProductVisual";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Rating } from "@/components/ui/Rating";
import { formatPrice } from "@/lib/utils";
import { getProductBySlug } from "@/data/products";

export function FeaturedProduct() {
  const product = getProductBySlug("nexus-100-gan-charger")!;

  return (
    <section className="bg-ink-950 py-16 text-white sm:py-24">
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 mx-auto w-full max-w-md lg:order-1 lg:max-w-none">
          <ProductVisual icon={product.icon} variant="dark" />
        </div>

        <div className="order-1 flex flex-col items-start gap-5 lg:order-2">
          <Badge tone="brand">Featured product</Badge>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
            {product.name}
          </h2>
          <Rating value={product.rating} count={product.reviewCount} />
          <p className="max-w-lg text-base leading-relaxed text-ink-300 sm:text-lg">
            {product.description}
          </p>

          <ul className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
            {product.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-200">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-400" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-2 flex items-center gap-3">
            <span className="font-display text-2xl font-bold">{formatPrice(product.price)}</span>
            {product.compareAtPrice && (
              <span className="text-ink-400 line-through">{formatPrice(product.compareAtPrice)}</span>
            )}
          </div>

          <Button href={`/products/${product.slug}`} variant="accent" size="lg" className="mt-2">
            View details
          </Button>
        </div>
      </Container>
    </section>
  );
}

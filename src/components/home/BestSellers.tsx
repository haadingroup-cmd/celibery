import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/products/ProductCard";
import { products } from "@/data/products";

export function BestSellers() {
  const featured = products.filter((p) => p.badge === "Bestseller" || p.badge === "New").slice(0, 4);

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Fan favorites"
            title="Best sellers this month"
            description="The products our customers reorder — and recommend to everyone who asks what charger they're using."
          />
          <Button href="/products" variant="outline" size="md" className="hidden sm:inline-flex">
            View all products
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-6 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <Button href="/products" variant="outline" size="md" className="mt-8 w-full sm:hidden">
          View all products
        </Button>
      </Container>
    </section>
  );
}

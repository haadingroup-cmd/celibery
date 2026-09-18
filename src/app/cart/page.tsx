import type { Metadata } from "next";
import { ShoppingBag } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Your Bag",
};

export default function CartPage() {
  return (
    <div className="py-24 sm:py-32">
      <Container className="flex flex-col items-center gap-4 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100 text-neutral-400">
          <ShoppingBag className="h-7 w-7" strokeWidth={1.5} />
        </div>
        <h1 className="font-display text-2xl font-semibold text-neutral-900">Your bag is empty</h1>
        <p className="max-w-sm text-neutral-500">
          Looks like you haven&apos;t added anything yet. Explore our chargers, cables, and power
          banks to find your next essential.
        </p>
        <Button href="/products" variant="primary" size="lg" className="mt-2">
          Continue shopping
        </Button>
      </Container>
    </div>
  );
}

import { Hero } from "@/components/home/Hero";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FeaturedProduct } from "@/components/home/FeaturedProduct";
import { BestSellers } from "@/components/home/BestSellers";
import { TechShowcase } from "@/components/home/TechShowcase";
import { WhyCelibery } from "@/components/home/WhyCelibery";
import { Testimonials } from "@/components/home/Testimonials";
import { Newsletter } from "@/components/home/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <FeaturedProduct />
      <BestSellers />
      <TechShowcase />
      <WhyCelibery />
      <Testimonials />
      <Newsletter />
    </>
  );
}

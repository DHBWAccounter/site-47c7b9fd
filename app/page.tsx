import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Solutions } from "@/components/solutions";
import { Stats } from "@/components/stats";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Stats />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

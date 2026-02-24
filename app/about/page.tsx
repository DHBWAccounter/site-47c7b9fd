import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AboutHero } from "@/components/about-hero";
import { AboutHistory } from "@/components/about-history";
import { LeadershipCouncil } from "@/components/leadership-council";
import { AboutValues } from "@/components/about-values";
import { AboutContact } from "@/components/about-contact";

export const metadata = {
  title: "About Us | White Tree Systems",
  description:
    "Learn about White Tree Systems, Gondor's premier SAP consultancy. Our history, leadership team, and commitment to enterprise excellence across Middle-earth.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <AboutHistory />
        <LeadershipCouncil />
        <AboutValues />
        <AboutContact />
      </main>
      <Footer />
    </>
  );
}

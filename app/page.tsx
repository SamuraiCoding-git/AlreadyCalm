import { CoreTruthSection } from "@/components/landing/core-truth-section";
import { CosmicCursor } from "@/components/landing/cosmic-cursor";
import { ExitPopup } from "@/components/landing/exit-popup";
import { FaqFinalSection } from "@/components/landing/faq-final-section";
import { Footer } from "@/components/landing/footer";
import { HeroSection } from "@/components/landing/hero-section";
import { OfferSection } from "@/components/landing/offer-section";
import { PainSection } from "@/components/landing/pain-section";
import { ResetSection } from "@/components/landing/reset-section";
import { SocialProofSection } from "@/components/landing/social-proof-section";
import { StickyBar } from "@/components/landing/sticky-bar";
import { TrustBar } from "@/components/landing/trust-bar";

export default function Page() {
  return (
    <main className="relative overflow-hidden bg-cosmos-950 text-cream" id="hero">
      <CosmicCursor />
      <StickyBar />
      <ExitPopup />

      <HeroSection />
      <TrustBar />
      <PainSection />
      <CoreTruthSection />
      <ResetSection />
      <SocialProofSection />
      <OfferSection />
      <FaqFinalSection />
      <Footer />
    </main>
  );
}

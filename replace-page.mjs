
import fs from "fs";
const page = `import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { EditorialIntro } from "@/components/OccasionsSection";
import { InvitationCollection } from "@/components/InvitationCollection";
import { PartnersSection } from "@/components/PartnersSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { EventsSection } from "@/components/EventsSection";
import { TicketingSection } from "@/components/TicketingSection";
import { PastEventsSection } from "@/components/PastEventsSection";
import { HowItWorksSection } from "@/components/CheckinAndHowItWorks";
import { Footer } from "@/components/OtherSections";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-bg relative selection:bg-brand-gold/20 selection:text-brand-charcoal">
      <Navbar />
      <HeroSection />
      <EditorialIntro />
      <InvitationCollection />
      <PartnersSection />
      <FeaturesSection />
      <EventsSection />
      <HowItWorksSection />
      <TicketingSection />
      <PastEventsSection />
      <Footer />
    </main>
  );
}`;
fs.writeFileSync("src/app/page.tsx", page, "utf-8");

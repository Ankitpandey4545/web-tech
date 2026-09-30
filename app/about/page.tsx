import AboutHero from "@/app/components/AboutHero";
import OurStory from "@/app/components/OurStory";
import MissionVision from "@/app/components/MissionVision";
import CoreValues from "@/app/components/CoreValues";
import Team from "@/app/components/Team";
import StatsStrip from "@/app/components/StatsStrip";
import CTA from "@/app/components/CTA";

export const metadata = {
  title: "About Us — DellOps Tech",
  description:
    "Learn about DellOps Tech — a team of passionate developers, designers & strategists building digital products that matter.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <AboutHero />
      <OurStory />
      <MissionVision />
      <CoreValues />
      <StatsStrip />
      <Team />
      <CTA />
    </main>
  );
}
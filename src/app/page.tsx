import { AmbientBackground } from "@/components/sections/ambient-background";
import { LandingHero } from "@/components/sections/landing-hero";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0A0A0A]">
      <AmbientBackground />
      <LandingHero />
    </main>
  );
}

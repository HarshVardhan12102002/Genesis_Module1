import { AmbientBackground } from "@/components/sections/ambient-background";
import { LoadingExperience } from "@/analysis/loading-experience";

export default function LoadingAnalysisPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0A0A0A]">
      <AmbientBackground />
      <LoadingExperience />
    </div>
  );
}

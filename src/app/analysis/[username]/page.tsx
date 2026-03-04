import { AmbientBackground } from "@/components/sections/ambient-background";
import { AnalysisClient } from "@/components/sections/analysis-client";

export default async function AnalysisPage({ params }: { params: Promise<{ username: string }> }) {
  const { username } = await params;

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0A0A0A]">
      <AmbientBackground />
      <AnalysisClient username={username} />
    </div>
  );
}

"use client";

import { TypeAnimation } from "react-type-animation";
import { Brain } from "lucide-react";
import { Card } from "@/components/ui/card";
import { DeveloperInsights } from "@/types/github";
import { SectionShell } from "@/analysis/section-shell";

export function PersonalitySection({ insights }: { insights: DeveloperInsights }) {
  return (
    <SectionShell className="mt-14">
      <h2 className="text-2xl font-semibold text-white md:text-3xl">Developer Personality</h2>
      <Card className="mt-6 border-white/15 p-7">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-200">
          <Brain className="h-4 w-4" /> AI Interpretation
        </div>
        <div className="mt-6 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          <TypeAnimation sequence={["", insights.personality]} speed={44} cursor={true} repeat={0} />
        </div>
      </Card>
    </SectionShell>
  );
}

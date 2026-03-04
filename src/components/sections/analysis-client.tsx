"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { AlertTriangle } from "lucide-react";
import { LoadingExperience } from "@/analysis/loading-experience";
import { ProfileHeroCard } from "@/analysis/profile-hero-card";
import { StatsGrid } from "@/analysis/stats-grid";
import { Card } from "@/components/ui/card";
import { DeveloperInsights } from "@/types/github";

const TechStackChart = dynamic(() => import("@/analysis/tech-stack-chart").then((mod) => mod.TechStackChart), {
  ssr: false,
});

const TopRepositories = dynamic(() => import("@/analysis/top-repositories").then((mod) => mod.TopRepositories), {
  ssr: false,
});

const PersonalitySection = dynamic(() => import("@/analysis/personality-section").then((mod) => mod.PersonalitySection), {
  ssr: false,
});

const RepositoryBreakdown = dynamic(
  () => import("@/analysis/repository-breakdown").then((mod) => mod.RepositoryBreakdown),
  {
    ssr: false,
  },
);

export function AnalysisClient({ username }: { username: string }) {
  const [insights, setInsights] = useState<DeveloperInsights | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    async function runAnalysis() {
      try {
        const response = await fetch(`/api/github?username=${username}`);
        const payload = (await response.json()) as DeveloperInsights | { error: string };

        if (!response.ok) {
          throw new Error("error" in payload ? payload.error : "Unable to analyze this profile.");
        }

        if (mounted) {
          setInsights(payload as DeveloperInsights);
        }
      } catch (analysisError) {
        if (mounted) {
          setError(analysisError instanceof Error ? analysisError.message : "Unable to analyze this profile.");
        }
      }
    }

    runAnalysis();

    return () => {
      mounted = false;
    };
  }, [username]);

  if (error) {
    return (
      <div className="mx-auto flex min-h-screen w-full max-w-4xl items-center px-6">
        <Card className="w-full border-rose-300/20 p-7">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/15 text-rose-300">
            <AlertTriangle className="h-5 w-5" />
          </div>
          <h2 className="mt-4 text-2xl font-semibold text-white">Analysis failed</h2>
          <p className="mt-2 text-zinc-300">{error}</p>
        </Card>
      </div>
    );
  }

  if (!insights) {
    return <LoadingExperience />;
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-6 pt-14 md:px-10">
      <ProfileHeroCard insights={insights} />
      <StatsGrid insights={insights} />
      <TechStackChart insights={insights} />
      <TopRepositories insights={insights} />
      <PersonalitySection insights={insights} />
      <RepositoryBreakdown insights={insights} />
    </main>
  );
}

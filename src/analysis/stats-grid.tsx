"use client";

import CountUp from "react-countup";
import { ChartNoAxesCombined, GitFork, Star, FolderKanban } from "lucide-react";
import { Card } from "@/components/ui/card";
import { DeveloperInsights } from "@/types/github";
import { SectionShell } from "@/analysis/section-shell";

const items = [
  { key: "totalRepositories", label: "Repositories", icon: FolderKanban },
  { key: "totalStars", label: "Total Stars", icon: Star },
  { key: "following", label: "Following", icon: GitFork },
  { key: "followers", label: "Followers", icon: ChartNoAxesCombined },
] as const;

export function StatsGrid({ insights }: { insights: DeveloperInsights }) {
  return (
    <SectionShell className="mt-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ key, label, icon: Icon }) => (
          <Card key={label} className="relative overflow-hidden">
            <div className="absolute right-2 top-2 h-16 w-16 rounded-full bg-white/5 blur-2xl" />
            <Icon className="h-5 w-5 text-zinc-300" />
            <p className="mt-5 text-3xl font-semibold text-white">
              <CountUp end={insights[key]} duration={1.5} separator="," />
            </p>
            <p className="mt-1 text-sm text-zinc-400">{label}</p>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}

"use client";

import Image from "next/image";
import CountUp from "react-countup";
import { ArrowUpRight, Users } from "lucide-react";
import { DeveloperInsights } from "@/types/github";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionShell } from "@/analysis/section-shell";

export function ProfileHeroCard({ insights }: { insights: DeveloperInsights }) {
  return (
    <SectionShell>
      <Card className="p-6 md:p-8">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="flex items-center gap-4 md:gap-5">
            <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-white/20">
              <Image src={insights.avatarUrl} alt={insights.username} fill className="object-cover" />
            </div>
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{insights.displayName}</h1>
              <p className="text-zinc-300">@{insights.username}</p>
              <p className="mt-2 max-w-2xl text-sm text-zinc-400 md:text-base">{insights.bio}</p>
            </div>
          </div>

          <a
            href={insights.profileUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-zinc-100 transition hover:bg-white/10"
          >
            View Profile <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <Badge>
            <Users className="mr-2 h-3.5 w-3.5" />
            <CountUp end={insights.followers} duration={1.5} separator="," /> followers
          </Badge>
          <Badge className="border-blue-400/30 bg-blue-500/15 text-blue-200">Most used: {insights.mostUsedLanguage}</Badge>
          <Badge className="border-amber-300/30 bg-amber-400/10 text-amber-200">{insights.recentActivity}</Badge>
        </div>
      </Card>
    </SectionShell>
  );
}

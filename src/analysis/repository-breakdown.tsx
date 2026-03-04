"use client";

import { Card } from "@/components/ui/card";
import { DeveloperInsights } from "@/types/github";
import { SectionShell } from "@/analysis/section-shell";

export function RepositoryBreakdown({ insights }: { insights: DeveloperInsights }) {
  return (
    <SectionShell className="mt-14 pb-20">
      <h2 className="text-2xl font-semibold text-white md:text-3xl">Repository Insights</h2>
      <p className="mt-2 text-zinc-400">Complexity and activity signals from top repositories.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {insights.repositoryBreakdown.map((repo) => (
          <Card key={repo.id}>
            <p className="text-lg font-semibold text-white">{repo.name}</p>
            <div className="mt-4 space-y-3 text-sm text-zinc-300">
              <div className="flex items-center justify-between">
                <span>Language</span>
                <span>{repo.language}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Size</span>
                <span>{repo.sizeKb.toLocaleString()} KB</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Last commit</span>
                <span>{new Date(repo.pushedAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Complexity estimation</span>
                <span>{repo.complexityScore}/100</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/10">
                <div className="h-full rounded-full bg-gradient-to-r from-violet-500 to-blue-500" style={{ width: `${repo.complexityScore}%` }} />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}

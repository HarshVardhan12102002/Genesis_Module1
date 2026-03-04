"use client";

import { motion } from "framer-motion";
import { GitBranch, Star, Clock3, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { DeveloperInsights } from "@/types/github";
import { SectionShell } from "@/analysis/section-shell";

export function TopRepositories({ insights }: { insights: DeveloperInsights }) {
  return (
    <SectionShell className="mt-14">
      <h2 className="text-2xl font-semibold text-white md:text-3xl">Top Repositories</h2>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {insights.topRepositories.map((repo, index) => (
          <motion.a
            key={repo.id}
            href={repo.htmlUrl}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="h-full border-white/15 transition-all hover:border-blue-400/40 hover:shadow-[0_0_38px_rgba(59,130,246,0.2)]">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg font-semibold text-white">{repo.name}</h3>
                <ArrowUpRight className="h-4 w-4 text-zinc-400" />
              </div>
              <p className="mt-2 line-clamp-2 text-sm text-zinc-400">{repo.description}</p>
              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-zinc-300">
                <span>{repo.language}</span>
                <span className="inline-flex items-center gap-1"><Star className="h-3.5 w-3.5" /> {repo.stars}</span>
                <span className="inline-flex items-center gap-1"><GitBranch className="h-3.5 w-3.5" /> {repo.forks}</span>
                <span className="inline-flex items-center gap-1"><Clock3 className="h-3.5 w-3.5" /> {new Date(repo.updatedAt).toLocaleDateString()}</span>
              </div>
            </Card>
          </motion.a>
        ))}
      </div>
    </SectionShell>
  );
}

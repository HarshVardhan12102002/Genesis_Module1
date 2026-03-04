"use client";

import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card } from "@/components/ui/card";
import { DeveloperInsights } from "@/types/github";
import { SectionShell } from "@/analysis/section-shell";

const COLORS = ["#A855F7", "#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6", "#06B6D4"];

export function TechStackChart({ insights }: { insights: DeveloperInsights }) {
  return (
    <SectionShell className="mt-14">
      <h2 className="text-2xl font-semibold text-white md:text-3xl">Tech Stack Visualization</h2>
      <p className="mt-2 text-zinc-400">Language distribution across public repositories.</p>
      <Card className="mt-6 p-4 md:p-6">
        <div className="h-[280px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={insights.techStack} margin={{ top: 8, right: 6, left: -20, bottom: 8 }}>
              <XAxis dataKey="language" stroke="#9ca3af" fontSize={12} />
              <YAxis stroke="#9ca3af" fontSize={12} />
              <Tooltip
                cursor={{ fill: "rgba(255,255,255,0.05)" }}
                contentStyle={{ background: "#101010", border: "1px solid rgba(255,255,255,0.14)", borderRadius: "12px" }}
              />
              <Bar dataKey="percentage" radius={[8, 8, 0, 0]} isAnimationActive animationDuration={1200}>
                {insights.techStack.map((item, index) => (
                  <Cell key={item.language} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {insights.techStack.slice(0, 4).map((item, index) => (
          <Card key={item.language} className="border-white/15">
            <p className="text-sm text-zinc-400">{item.language}</p>
            <p className="mt-1 text-xl font-semibold text-white">{item.percentage}%</p>
            <div className="mt-3 h-1.5 rounded-full bg-white/10">
              <div
                className="h-full rounded-full"
                style={{ width: `${item.percentage}%`, backgroundColor: COLORS[index % COLORS.length] }}
              />
            </div>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}

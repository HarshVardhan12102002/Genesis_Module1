"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const lines = ["Analyzing repositories...", "Understanding architecture...", "Generating insights..."];

export function LoadingExperience() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-5xl items-center px-6 py-16">
      <div className="w-full space-y-6">
        <Card className="p-8">
          <motion.div
            animate={{ rotate: [0, 8, -8, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.2, ease: "easeInOut" }}
            className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/40 bg-violet-500/15"
          >
            <Github className="h-6 w-6 text-violet-200" />
          </motion.div>
          <div className="space-y-2 text-zinc-200">
            {lines.map((line, index) => (
              <motion.p
                key={line}
                initial={{ opacity: 0.3 }}
                animate={{ opacity: [0.35, 1, 0.35] }}
                transition={{ delay: index * 0.25, duration: 1.8, repeat: Number.POSITIVE_INFINITY }}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Skeleton className="h-40" />
          <Skeleton className="h-40" />
          <Skeleton className="h-32 md:col-span-2" />
        </div>
      </div>
    </div>
  );
}

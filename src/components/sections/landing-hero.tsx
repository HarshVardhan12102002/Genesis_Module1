"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Github, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { extractUsername } from "@/utils/analysis/extract-username";

export function LandingHero() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [profileInput, setProfileInput] = useState("");
  const [error, setError] = useState("");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const username = extractUsername(profileInput);

    if (!username) {
      setError("Please enter a valid GitHub profile URL or username.");
      return;
    }

    setError("");
    startTransition(() => {
      router.push(`/analysis/${username}`);
    });
  }

  return (
    <section className="relative mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 py-20 md:px-10">
      <div className="grid w-full items-center gap-10 lg:grid-cols-[1.2fr_0.9fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-zinc-300">
            <Sparkles className="h-4 w-4 text-violet-300" /> Premium GitHub intelligence
          </p>
          <h1 className="text-4xl leading-tight font-semibold tracking-tight text-white md:text-6xl">
            Decode Any GitHub Profile
          </h1>
          <p className="mt-6 max-w-2xl text-base text-zinc-300 md:text-xl">
            Understand any developer&apos;s work, architecture, and coding style instantly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15 }}
        >
          <Card className="relative overflow-hidden border-white/15 p-7">
            <div className="absolute -right-24 -top-20 h-44 w-44 rounded-full bg-blue-400/15 blur-3xl" />
            <div className="absolute -left-20 -bottom-24 h-48 w-48 rounded-full bg-violet-500/20 blur-3xl" />
            <div className="relative">
              <p className="mb-5 text-sm text-zinc-300">Paste a GitHub profile link</p>
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="relative">
                  <Github className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                  <Input
                    value={profileInput}
                    onChange={(event) => setProfileInput(event.target.value)}
                    className="pl-11"
                    placeholder="https://github.com/username"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  {isPending ? "Analyzing..." : "Analyze Profile"}
                </Button>
              </form>
              {error ? <p className="mt-3 text-sm text-rose-300">{error}</p> : null}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

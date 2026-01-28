"use client";

import React, { useState } from "react";
import { FlameIcon } from "@/components/features/FlameIcon";
import { TrioCard } from "@/components/features/TrioCard";
import { StreakModal } from "@/components/features/StreakModal";
import { Card } from "@/components/ui/Card";
import { Cloud, TrendingUp, Lock } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [isStreakModalOpen, setIsStreakModalOpen] = useState(false);

  return (
    <main className="flex-1 flex flex-col p-6 space-y-6 pb-24">
      {/* Header */}
      <header className="flex items-center justify-between">
        <div>
          <p className="text-slate-500 text-sm font-medium">Good Morning, Arvinth</p>
          <h1 className="text-2xl font-bold text-slate-900 mt-0.5">Day 6 <span className="text-slate-400 font-normal">of 28</span></h1>
        </div>
        <FlameIcon active={true} onClick={() => setIsStreakModalOpen(true)} />
      </header>

      {/* Streak Modal */}
      <StreakModal isOpen={isStreakModalOpen} onClose={() => setIsStreakModalOpen(false)} />

      {/* Main Action - Daily Trio */}
      <section>
        <TrioCard />
      </section>

      {/* Band Score Prediction */}
      <section>
        <Link href="/score">
          <Card className="flex items-center justify-between p-5 hover:border-brand-primary/20 transition-colors cursor-pointer group">
            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-brand-primary" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Predicted Score</p>
                <p className="text-lg font-bold text-slate-900">Band 6.5</p>
              </div>
            </div>
            <div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors">
              <span className="text-lg text-slate-400 group-hover:text-white">→</span>
            </div>
          </Card>
        </Link>
      </section>

      {/* Upcoming & Unlockables */}
      <section className="space-y-4">
        <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Coming Up</h2>

        <Link href="/capsule">
          <Card className="flex items-center space-x-4 p-4 opacity-75 grayscale-[0.5] hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer border-dashed border-2 bg-slate-50">
            <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center">
              <Lock className="h-5 w-5 text-slate-400" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-700">Time Capsule Unlock</p>
              <p className="text-xs text-slate-500">Available on Day 14</p>
            </div>
          </Card>
        </Link>
      </section>

      {/* Smart Commute / Offline Indicator */}
      <div className="fixed bottom-6 left-0 right-0 flex justify-center pointer-events-none">
        <div className="bg-slate-900/90 text-white backdrop-blur-md px-4 py-2 rounded-full flex items-center shadow-lg space-x-2 pointer-events-auto transform hover:scale-105 transition-transform">
          <Cloud className="h-4 w-4 text-sky-400 fill-sky-400" />
          <span className="text-xs font-medium">Session ready offline</span>
        </div>
      </div>
    </main>
  );
}

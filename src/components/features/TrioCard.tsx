"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Play, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useMomentum } from "@/context/MomentumContext";

interface TrioCardProps {
    completed?: boolean;
}

export const TrioCard = ({ completed: propCompleted = false }: TrioCardProps) => {
    const { isTrioComplete } = useMomentum();
    // Allow prop override for testing/flexibility, but default to context
    const completed = propCompleted || isTrioComplete;

    return (
        <Card className="relative overflow-hidden border-none bg-gradient-to-br from-brand-primary to-brand-secondary text-white shadow-xl">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute bottom-0 left-0 -mb-4 -ml-4 h-24 w-24 rounded-full bg-white/10 blur-2xl" />

            <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h3 className="text-sm font-medium text-white/80 uppercase tracking-wider">Today's Focus</h3>
                        <p className="text-2xl font-bold mt-1">Daily Trio</p>
                    </div>
                    <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                        <span className="text-xl font-bold">15</span>
                        <span className="text-xs ml-1">min</span>
                    </div>
                </div>

                <div className="space-y-3 mb-8">
                    <div className="flex items-center space-x-3 text-white/90">
                        <div className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
                        <span className="text-sm font-medium">Learn: Complex Sentences</span>
                    </div>
                    <div className="flex items-center space-x-3 text-white/90">
                        <div className="h-2 w-2 rounded-full bg-blue-300" />
                        <span className="text-sm font-medium">Apply: 5 Quick Questions</span>
                    </div>
                    <div className="flex items-center space-x-3 text-white/90">
                        <div className="h-2 w-2 rounded-full bg-purple-300" />
                        <span className="text-sm font-medium">Reflect: Self-Correction</span>
                    </div>
                </div>

                {completed ? (
                    <div className="flex items-center justify-center w-full py-4 bg-white/20 rounded-xl backdrop-blur-md">
                        <CheckCircle2 className="mr-2 h-5 w-5 text-green-300" />
                        <span className="font-semibold">Session Complete</span>
                    </div>
                ) : (
                    <Link href="/trio" className="block w-full">
                        <Button className="w-full bg-white text-brand-primary hover:bg-white/90 border-none shadow-lg group">
                            Start Session
                            <Play className="ml-2 h-4 w-4 fill-current transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                )}
            </div>
        </Card>
    );
};

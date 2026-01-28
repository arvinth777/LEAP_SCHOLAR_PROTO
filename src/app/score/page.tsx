"use client";

import React from "react";
import { ChevronLeft, TrendingUp, AlertCircle, Info } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";

export default function ScorePage() {
    return (
        <main className="flex-1 flex flex-col min-h-screen bg-white">
            {/* Header */}
            <div className="flex items-center p-6 pb-2">
                <Link href="/" className="p-2 -ml-2 text-slate-400 hover:text-slate-600">
                    <ChevronLeft className="h-6 w-6" />
                </Link>
                <span className="ml-2 text-lg font-bold text-slate-900">Band Readiness</span>
            </div>

            <div className="flex-1 p-6 space-y-8">
                {/* Main Score Display */}
                <div className="flex flex-col items-center justify-center py-8">
                    <div className="relative h-64 w-64">
                        {/* Simple SVG Guage mockup */}
                        <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
                            <circle
                                className="text-slate-100"
                                strokeWidth="8"
                                stroke="currentColor"
                                fill="transparent"
                                r="44"
                                cx="50"
                                cy="50"
                            />
                            <circle
                                className="text-brand-primary transition-all duration-1000 ease-out"
                                strokeWidth="8"
                                strokeDasharray={276}
                                strokeDashoffset={276 - (276 * 0.75)} // ~75% filled for 6.5/9 approx
                                strokeLinecap="round"
                                stroke="currentColor"
                                fill="transparent"
                                r="44"
                                cx="50"
                                cy="50"
                            />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-5xl font-bold text-slate-900">6.5</span>
                            <span className="text-sm font-medium text-slate-400 uppercase tracking-widest mt-1">Band Score</span>
                        </div>
                    </div>

                    <div className="flex items-center space-x-2 mt-2 bg-green-50 text-green-700 px-4 py-1.5 rounded-full">
                        <TrendingUp className="h-4 w-4" />
                        <span className="text-sm font-semibold text-green-700">On Track for 7.0</span>
                    </div>
                </div>

                {/* Feedback Cards */}
                <div className="space-y-4">
                    <Card className="bg-slate-50 border-none">
                        <div className="flex items-start space-x-3">
                            <Info className="h-5 w-5 text-brand-primary mt-0.5" />
                            <div>
                                <h3 className="font-semibold text-slate-900">Why this score?</h3>
                                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                                    Based on your consistency (6 days) and accuracy in "Complex Sentences", you have stabilized at 6.5.
                                </p>
                            </div>
                        </div>
                    </Card>

                    <Card className="bg-orange-50 border-none">
                        <div className="flex items-start space-x-3">
                            <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                            <div>
                                <h3 className="font-semibold text-orange-900">Consistency Warning</h3>
                                <p className="text-sm text-orange-800 mt-1 leading-relaxed">
                                    Missing tomorrow's Trio could drop your prediction to <span className="font-bold">6.0</span>. Keep the momentum!
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </main>
    );
}

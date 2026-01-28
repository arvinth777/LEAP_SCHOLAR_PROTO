"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useMomentum } from "@/context/MomentumContext";
import { ChevronLeft, CheckCircle, BookOpen, PenTool, BrainCircuit } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function TrioPage() {
    const router = useRouter();
    const { completeTrio } = useMomentum();
    const [step, setStep] = useState(1);
    const totalSteps = 3;

    const handleNext = () => {
        if (step < totalSteps) {
            setStep(step + 1);
        } else {
            completeTrio();
            router.push("/");
        }
    };

    const steps = [
        {
            id: 1,
            title: "Learn",
            subtitle: "Complex Sentences",
            icon: BookOpen,
            color: "bg-green-100 text-green-600",
            content: (
                <div className="space-y-4">
                    <p className="text-lg font-medium text-slate-800">
                        Use "Although" to contrast two ideas.
                    </p>
                    <div className="bg-slate-50 p-4 rounded-lg text-slate-600 italic">
                        "Although the test was difficult, I finished on time."
                    </div>
                    <p className="text-slate-600">
                        This structure boosts your Grammatical Range and Accuracy score.
                    </p>
                </div>
            ),
        },
        {
            id: 2,
            title: "Apply",
            subtitle: "5 Quick Questions",
            icon: PenTool,
            color: "bg-blue-100 text-blue-600",
            content: (
                <div className="space-y-4">
                    <p className="text-slate-600">Select the correct sentence:</p>
                    <div className="space-y-2">
                        {[1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className="p-3 border rounded-lg border-slate-200 hover:border-brand-primary cursor-pointer transition-colors"
                                onClick={() => { }}
                            >
                                Option {i}: Example answer text skeleton.
                            </div>
                        ))}
                    </div>
                </div>
            ),
        },
        {
            id: 3,
            title: "Reflect",
            subtitle: "Self-Correction",
            icon: BrainCircuit,
            color: "bg-purple-100 text-purple-600",
            content: (
                <div className="space-y-4">
                    <p className="text-slate-600">Review your mistake from yesterday:</p>
                    <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                        <p className="text-red-800 line-through">I go to school yesterday.</p>
                        <p className="text-green-700 font-bold mt-1">I went to school yesterday.</p>
                    </div>
                    <p className="text-slate-600">Past tense is crucial for Part 2 Speaking.</p>
                </div>
            ),
        },
    ];

    const currentStep = steps[step - 1];
    const Icon = currentStep.icon;

    return (
        <main className="flex-1 flex flex-col min-h-screen bg-slate-50">
            {/* Header */}
            <div className="flex items-center justify-between p-6 bg-white shadow-sm z-10">
                <Link href="/" className="p-2 -ml-2 text-slate-400 hover:text-slate-600">
                    <ChevronLeft className="h-6 w-6" />
                </Link>
                <div className="text-center">
                    <p className="text-xs text-slate-500 font-medium tracking-wider uppercase">Daily Trio</p>
                    <p className="text-sm font-bold text-slate-900">Step {step} of {totalSteps}</p>
                </div>
                <div className="w-8" /> {/* Spacer */}
            </div>

            {/* Progress Bar */}
            <div className="h-1 w-full bg-slate-200">
                <div
                    className="h-full bg-brand-primary transition-all duration-300 ease-out"
                    style={{ width: `${(step / totalSteps) * 100}%` }}
                />
            </div>

            {/* Content */}
            <div className="flex-1 p-6 flex flex-col">
                <div className="flex-1 space-y-6">
                    <div className="flex items-center space-x-4">
                        <div className={cn("h-12 w-12 rounded-xl flex items-center justify-center shadow-sm", currentStep.color)}>
                            <Icon className="h-6 w-6" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-slate-900">{currentStep.title}</h1>
                            <p className="text-slate-500">{currentStep.subtitle}</p>
                        </div>
                    </div>

                    <Card className="min-h-[200px] flex flex-col justify-center">
                        {currentStep.content}
                    </Card>
                </div>

                {/* Footer Action */}
                <div className="mt-6">
                    <Button onClick={handleNext} className="w-full shadow-lg shadow-brand-primary/20">
                        {step === totalSteps ? "Complete Session" : "Next Step"}
                    </Button>
                </div>
            </div>
        </main>
    );
}

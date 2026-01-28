"use client";

import React from "react";
import { ChevronLeft, MailOpen } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function CapsulePage() {
    return (
        <main className="flex-1 flex flex-col min-h-screen bg-[#F8FAFC]">
            {/* Header */}
            <div className="flex items-center p-6 pb-2">
                <Link href="/" className="p-2 -ml-2 text-slate-400 hover:text-slate-600">
                    <ChevronLeft className="h-6 w-6" />
                </Link>
            </div>

            <div className="flex-1 px-8 flex flex-col items-center justify-center text-center pb-12">
                <div className="bg-white p-6 rounded-full shadow-lg mb-8 animate-bounce-slow">
                    <MailOpen className="h-12 w-12 text-brand-primary" />
                </div>

                <h1 className="text-2xl font-bold text-slate-900 mb-2">A Message from Day-0 You</h1>
                <p className="text-slate-500 mb-8">Written on Jan 14, 2026</p>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 max-w-sm w-full relative">
                    <div className="absolute -top-3 -left-3 text-4xl text-slate-200">"</div>
                    <p className="text-lg text-slate-700 font-medium italic leading-relaxed">
                        I am doing this because I want to study in Canada. I promised myself I wouldn't give up like last time. Remember the goal.
                    </p>
                    <div className="absolute -bottom-6 -right-3 text-4xl text-slate-200">"</div>
                </div>

                <div className="mt-12 w-full max-w-xs space-y-4">
                    <Link href="/">
                        <Button className="w-full shadow-lg">
                            Continue the Journey
                        </Button>
                    </Link>
                    <p className="text-xs text-slate-400">
                        Next capsule unlocks on Day 28
                    </p>
                </div>
            </div>
        </main>
    );
}

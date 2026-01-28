"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Flame, Snowflake, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface StreakModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const StreakModal = ({ isOpen, onClose }: StreakModalProps) => {
    if (!isOpen) return null;

    // Mock data for the last 7 days
    const weekHistory = [
        { day: "M", status: "completed" },
        { day: "T", status: "completed" },
        { day: "W", status: "frozen" }, // Grace used
        { day: "T", status: "completed" },
        { day: "F", status: "completed" },
        { day: "S", status: "active" }, // Today
        { day: "S", status: "future" },
    ];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
            <Card className="w-full max-w-sm overflow-hidden p-0 animate-in zoom-in-95 duration-200">
                {/* Header with Flame */}
                <div className="bg-orange-50 p-8 text-center border-b border-orange-100">
                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 shadow-[0_0_20px_rgba(251,146,60,0.3)]">
                        <Flame className="h-10 w-10 text-orange-500 fill-orange-500 animate-pulse" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">6 Day Streak!</h2>
                    <p className="font-medium text-orange-600 mt-1">You are on fire, Arvinth!</p>
                </div>

                {/* Calendar / History */}
                <div className="p-6">
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4 text-center">
                        This Week
                    </h3>

                    <div className="flex justify-between items-center mb-6">
                        {weekHistory.map((day, index) => (
                            <div key={index} className="flex flex-col items-center space-y-2">
                                <span className="text-xs font-medium text-slate-400">{day.day}</span>
                                <div className={cn(
                                    "h-8 w-8 rounded-full flex items-center justify-center border-2 transition-all",
                                    day.status === "completed" && "bg-orange-500 border-orange-500 text-white",
                                    day.status === "frozen" && "bg-blue-100 border-blue-200 text-blue-500",
                                    day.status === "active" && "bg-white border-orange-500 border-dashed text-orange-500",
                                    day.status === "future" && "bg-slate-50 border-slate-100",
                                )}>
                                    {day.status === "completed" && <Check className="h-4 w-4" />}
                                    {day.status === "frozen" && <Snowflake className="h-4 w-4" />}
                                    {day.status === "active" && <Flame className="h-4 w-4 fill-current" />}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Grace/Freeze Info */}
                    <div className="bg-blue-50 rounded-xl p-4 flex items-start space-x-3 mb-6">
                        <div className="p-2 bg-blue-100 rounded-lg">
                            <Snowflake className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-slate-900">Streak Freeze Used</h4>
                            <p className="text-xs text-slate-600 mt-0.5">
                                You missed Wednesday, but your streak was saved by a Freeze. You have <strong>0 Freezes</strong> left.
                            </p>
                        </div>
                    </div>

                    <Button onClick={onClose} className="w-full bg-slate-900 text-white hover:bg-slate-800">
                        Keep Going
                    </Button>
                </div>
            </Card>
        </div>
    );
};

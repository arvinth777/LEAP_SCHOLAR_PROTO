import React from "react";
import { Flame } from "lucide-react";

export const FlameIcon = ({ active = false }: { active?: boolean }) => {
    return (
        <div className={`relative flex items-center justify-center h-12 w-12 rounded-full ${active ? "bg-orange-100" : "bg-slate-100"}`}>
            <Flame
                className={`h-6 w-6 ${active ? "text-orange-500 fill-orange-500" : "text-slate-400"}`}
            />
            {active && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white border-2 border-white">
                    6
                </span>
            )}
        </div>
    );
};

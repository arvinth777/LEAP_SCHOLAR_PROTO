import React from "react";
import { Flame } from "lucide-react";

interface FlameIconProps {
    active?: boolean;
    onClick?: () => void;
}

export const FlameIcon = ({ active = false, onClick }: FlameIconProps) => {
    return (
        <button
            onClick={onClick}
            className={`relative flex items-center justify-center h-12 w-12 rounded-full transition-transform active:scale-95 ${active ? "bg-orange-100 cursor-pointer hover:bg-orange-200" : "bg-slate-100 cursor-default"}`}
        >
            <Flame
                className={`h-6 w-6 ${active ? "text-orange-500 fill-orange-500" : "text-slate-400"}`}
            />
            {active && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white border-2 border-white">
                    6
                </span>
            )}
        </button>
    );
};

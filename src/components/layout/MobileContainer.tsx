import React from "react";
import { cn } from "@/lib/utils";

interface MobileContainerProps {
    children: React.ReactNode;
    className?: string;
}

export const MobileContainer = ({ children, className }: MobileContainerProps) => {
    return (
        <div className="min-h-screen w-full flex justify-center bg-gray-50">
            <div className={cn(
                "w-full max-w-[400px] min-h-screen bg-white shadow-xl relative flex flex-col",
                className
            )}>
                {children}
            </div>
        </div>
    );
};

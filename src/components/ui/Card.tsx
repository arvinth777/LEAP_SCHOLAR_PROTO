import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const Card = ({ children, className, ...props }: CardProps) => {
    return (
        <div
            className={cn(
                "rounded-2xl bg-white p-6 shadow-sm border border-slate-100",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

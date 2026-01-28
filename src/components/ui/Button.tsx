import React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", isLoading, children, disabled, ...props }, ref) => {
        const variants = {
            primary: "bg-brand-primary text-white hover:bg-opacity-90 active:scale-95",
            secondary: "bg-brand-secondary text-white hover:bg-opacity-90 active:scale-95",
            outline: "border-2 border-brand-primary text-brand-primary bg-transparent hover:bg-brand-primary/5 active:scale-95",
            ghost: "text-slate-600 hover:bg-slate-100 active:scale-95",
        };

        return (
            <button
                ref={ref}
                disabled={disabled || isLoading}
                className={cn(
                    "relative flex items-center justify-center rounded-xl px-6 py-4 font-semibold transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none w-full",
                    variants[variant],
                    className
                )}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";

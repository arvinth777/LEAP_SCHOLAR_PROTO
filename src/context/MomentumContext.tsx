"use client";

import React, { createContext, useContext, useState } from "react";

interface MomentumContextType {
    isTrioComplete: boolean;
    completeTrio: () => void;
}

const MomentumContext = createContext<MomentumContextType | undefined>(undefined);

export function MomentumProvider({ children }: { children: React.ReactNode }) {
    const [isTrioComplete, setIsTrioComplete] = useState(false);

    const completeTrio = () => {
        setIsTrioComplete(true);
    };

    return (
        <MomentumContext.Provider value={{ isTrioComplete, completeTrio }}>
            {children}
        </MomentumContext.Provider>
    );
}

export function useMomentum() {
    const context = useContext(MomentumContext);
    if (context === undefined) {
        throw new Error("useMomentum must be used within a MomentumProvider");
    }
    return context;
}

import React, { ReactNode } from "react";

// Definimos a interface para as props do componente
interface GlassCardProps {
  children: ReactNode;
  className?: string; // O '?' indica que é opcional
}

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`
       "bg-white/10 
       backdrop-blur-md 
       border
       border-white/20 
       rounded-lg 
       shadow-lg 
       mx-auto 
       w-max 
       p-3"
        ${className}
      `}
    >
      {children}
    </div>
  );
}

import React from "react";

export default function SectionCard({ children, className="" }: React.PropsWithChildren<{className?: string}>) {
  return (
    <div
      className={`
        rounded-2xl border border-white/10 bg-white/5 dark:bg-white/5
        backdrop-blur-md shadow-[0_8px_40px_-12px_rgba(0,0,0,0.45)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}

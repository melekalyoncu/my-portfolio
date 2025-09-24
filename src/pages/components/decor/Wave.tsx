import React from "react";

export default function Wave({ className="" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1440 180" className={className} aria-hidden>
      <path
        d="M0,96 C160,160 320,0 480,48 C640,96 800,208 960,176 C1120,144 1280,64 1440,96 L1440,180 L0,180 Z"
        className="fill-[#FFC527]"
      />
    </svg>
  );
}

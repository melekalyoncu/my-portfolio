import React from "react";

type Props = {
  className?: string;
  size?: number;        // px
  blur?: number;        // px
  hue?: number;         // 0..360
  opacity?: number;     // 0..1
};

export default function Orb({ className="", size=220, blur=40, hue=260, opacity=0.8 }: Props) {
  const style: React.CSSProperties = {
    width: size, height: size,
    filter: `blur(${blur}px)`,
    opacity,
    background: `radial-gradient(circle at 30% 30%,
      hsl(${hue} 90% 70% / .95),
      hsl(${hue+40} 90% 60% / .65) 40%,
      transparent 70%)`,
  };
  return <div aria-hidden className={`pointer-events-none rounded-full ${className}`} style={style} />;
}

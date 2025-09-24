"use client";
import { useEffect, useRef } from "react";

export default function Parallax({ children }: React.PropsWithChildren) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) / r.width;   // -0.5..0.5
      const dy = (e.clientY - cy) / r.height;
      el.querySelectorAll<HTMLElement>("[data-speed]").forEach((n) => {
        const sp = Number(n.dataset.speed || "10");
        n.style.transform = `translate3d(${dx * sp}px, ${dy * sp}px, 0)`;
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return <div ref={ref}>{children}</div>;
}

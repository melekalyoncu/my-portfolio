"use client";
import { useEffect, useRef } from "react";

export default function Parallax({ children }: React.PropsWithChildren) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    let raf = 0, mx = 0, my = 0;

    const apply = () => {
      raf = 0;
      el.querySelectorAll<HTMLElement>("[data-speed]").forEach((n) => {
        const sp = Number(n.dataset.speed || "10");
        n.style.setProperty("--px", `${mx * sp}px`);
        n.style.setProperty("--py", `${my * sp}px`);
      });
    };

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      mx = (e.clientX - cx) / r.width;
      my = (e.clientY - cy) / r.height;
      if (!raf) raf = requestAnimationFrame(apply);
    };

    const onLeave = () => {
      mx = my = 0;
      if (!raf) raf = requestAnimationFrame(apply);
    };

    window.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref}>{children}</div>;
}
  
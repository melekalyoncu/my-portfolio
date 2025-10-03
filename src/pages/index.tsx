"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Building2 } from "lucide-react";

import ProjectCard from "./components/ProjectCard";
import { projects } from "./lib/projects";
import Orb from "./components/decor/Orb";
import SectionCard from "./components/ui/SectionCard";
import FeaturedProjectRow from "./components/FeaturedProjectRow";
import Parallax from "./components/Parallax";

export default function HomePage() {
  // Reveal animasyonları
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("aos-show");
            io.unobserve(e.target); // bir kez göster
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main className="relative overflow-hidden bg-[#0B1020] text-white">
      {/* Arka plan: Parallax orblar + çizgiler (random kaldırıldı → hydration temiz) */}
      <Parallax>
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div data-speed="12" className="absolute -top-32 -left-24">
            <Orb size={320} blur={60} hue={260} opacity={0.7} />
          </div>
          <div data-speed="-8" className="absolute top-24 right-[-80px]">
            <Orb size={280} blur={50} hue={200} opacity={0.7} />
          </div>
          <div data-speed="6" className="absolute bottom-0 left-1/3 translate-y-1/2">
            <Orb size={380} blur={70} hue={310} opacity={0.5} />
          </div>

          {/* yıldız çizgileri */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute left-0 right-0 top-36 h-[2px] bg-[radial-gradient(circle,rgba(255,255,255,.35),transparent_60%)] blur-[2px]" />
            <div className="absolute left-0 right-0 top-60 h-[1px] bg-[radial-gradient(circle,rgba(255,255,255,.25),transparent_60%)] blur-[1px]" />
          </div>

          {/* sabit, non-random yıldız taneleri */}
          <div className="absolute inset-0">
            {[
              { left: "12%", top: "22%" },
              { left: "28%", top: "68%" },
              { left: "54%", top: "18%" },
              { left: "75%", top: "42%" },
              { left: "83%", top: "70%" },
              { left: "36%", top: "85%" },
            ].map((s, i) => (
              <span
                key={i}
                className="absolute block h-[2px] w-[60px] bg-[radial-gradient(circle,rgba(255,255,255,.5),transparent_60%)] blur-[1px] opacity-40"
                style={{ left: s.left, top: s.top }}
                aria-hidden
              />
            ))}
          </div>
        </div>
      </Parallax>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* HERO */}
        <section className="relative grid grid-cols-1 md:grid-cols-[1.2fr_.8fr] gap-10 items-center">
          <div className="space-y-6 reveal">
            {/* İş arayışı / durum rozeti */}
            <div
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-200"
              aria-label="Open to work"
            >
              <span className="size-2 rounded-3xl bg-emerald-400 animate-pulse" />
              Open to work · New Grad
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              <span className="opacity-80">Creative Full-Stack </span>
              <span className="gradient-text">Developer</span>{" "}
              <span className="text-indigo-300">Melek Kalyoncuoğlu</span>
            </h1>

            <p className="text-white/80 max-w-2xl">
              Mezun oldum ve aktif olarak iş/staj fırsatlarına açığım. Next.js, Tailwind,
              React Native ve Node.js ile modern, performanslı ve ölçeklenebilir arayüzler geliştiriyorum.
              Aşağıda son çalışmalarımın bir kısmını bulabilirsin.
            </p>

            {/* Call-to-action */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-xl bg-indigo-500/90 px-5 py-2.5 hover:bg-indigo-400 transition"
              >
                Projelerim
              </a>
              <a
                href="mailto:melekalyoncuoglu2003@gmail.com"
                className="rounded-xl border border-white/15 px-5 py-2.5 hover:bg-white/5"
              >
                E-posta Gönder
              </a>
              {/* CV bağlantını burada güncelle */}
              <Link
                href="/cv.pdf"
                className="rounded-xl px-5 py-2.5 underline underline-offset-4 decoration-white/30 hover:decoration-white"
              >
                Özgeçmiş (PDF)
              </Link>
            </div>

            {/* tech pills */}
            <ul className="flex flex-wrap gap-2 pt-1" aria-label="Teknolojiler">
              {["Next.js", "TypeScript", "Tailwind", "React Native", "Node.js"].map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* SAĞ KART */}
          <div className="reveal aos-delay">
            <SectionCard className="p-6 md:p-8 relative float-soft">
              <div className="absolute -right-6 -top-6 opacity-70" data-speed="-6">
                <Orb size={140} blur={24} hue={220} opacity={0.7} />
              </div>
              <div className="relative h-48 w-48 mx-auto overflow-hidden rounded-full ring-4 ring-white/10 shadow-2xl">
                <Image
                  src="/images/avatar.png"
                  alt="Melek Kalyoncuoğlu, profil görseli"
                  fill
                  sizes="(min-width: 768px) 20vw, 40vw"
                  className="object-cover"
                  priority
                />
              </div>
              <p className="mt-4 text-center text-sm text-white/70">
                Kullanıcı deneyimine odaklanan, temiz ve ölçeklenebilir arayüzler.
              </p>
              <div className="mt-1 text-xs text-white/50 mx-auto max-w-[360px] flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                  {/* Pin */}
                  <svg viewBox="0 0 24 24" className="size-3.5 opacity-60" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                    <path d="M12 21s-6-5.5-6-10a6 6 0 1 1 12 0c0 4.5-6 10-6 10Z" />
                    <circle cx="12" cy="11" r="2.5" />
                  </svg>
                  <span>Ankara / İstanbul</span>
                </span>

                <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                  {/* Work mode (laptop/office) */}
                  <svg viewBox="0 0 24 24" className="size-3.5 opacity-60" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                    <rect x="4" y="6" width="16" height="10" rx="1.5" />
                    <path d="M2 18h20" />
                  </svg>
                  <span>Ofis / Hibrit / Remote</span>
                </span>
              </div>

            </SectionCard>
          </div>
        </section>

        {/* ÖNE ÇIKAN SATIR KARTLAR */}
        <section className="space-y-10 sm:space-y-12" aria-labelledby="featured">
          <h2 id="featured" className="sr-only">
            Öne çıkan projeler (satır kartlar)
          </h2>
          {projects.slice(0, 3).map((p, i) => (
            <div key={p.slug} className="reveal">
              <FeaturedProjectRow
                title={p.title}
                summary={p.summary}
                image={p.cover || "/images/e-commerce.png"}
                href={`/projects/${p.slug}`}
                reversed={i % 2 === 1}
              />
            </div>
          ))}
        </section>

        {/* TÜM PROJELER – grid */}
        <section id="projects" className="space-y-6 reveal" aria-labelledby="all-projects">
          <div className="flex items-end justify-between">
            <h2 id="all-projects" className="text-2xl md:text-3xl font-semibold">
              Öne Çıkan Projeler
            </h2>
            <Link href="/projects" className="text-indigo-300 hover:underline">
              Tüm projeler →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.slug} {...p} />
            ))}
          </div>
        </section>

        {/* İLETİŞİM */}
        <section
          id="contact"
          className="relative isolate my-8 rounded-2xl overflow-hidden reveal"
          aria-labelledby="contact-title"
        >
          {/* arkaplan gradyan + hafif doku */}
          <div
            className="absolute inset-0 -z-10"
            aria-hidden
          >
            <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_20%_0%,rgba(99,102,241,.25),transparent),radial-gradient(60%_80%_at_80%_100%,rgba(16,185,129,.22),transparent)]" />
            <div className="absolute inset-0 backdrop-blur-[2px] bg-white/[.02]" />
          </div>

          <div className="px-4 sm:px-6 lg:px-8 py-12">
            <div className="mx-auto max-w-5xl grid gap-8 md:grid-cols-[1.2fr_.8fr] items-center">
              {/* Sol taraf: metin + CTA’lar */}
              <div>
                <h3 id="contact-title" className="text-2xl md:text-3xl font-semibold">
                  Let’s Build Something Great !
                </h3>
                <p className="mt-3 text-sm md:text-base text-white/80 max-w-2xl">
                  Her tür çalışma modeline açığım: <strong>ofis</strong>, <strong>hibrit</strong> veya <strong>remote</strong>.
                  Yeni mezunum ve aktif olarak fırsat arıyorum. Projenize hızla entegre olup
                  Next.js, TypeScript ve modern UI pratikleriyle değer katabilirim.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="mailto:melekalyoncuoglu2003@gmail.com"
                    className="rounded-xl bg-indigo-500/90 px-5 py-2.5 hover:bg-indigo-400 transition"
                  >
                    E-posta Gönder
                  </a>
                  <a
                    href="https://www.linkedin.com/in/melek-kalyoncuoğlu-4a17b3229/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-white/20 px-5 py-2.5 hover:bg-white/5"
                  >
                    LinkedIn
                  </a>
                  <Link
                    href="/cv.pdf"
                    className="rounded-xl px-5 py-2.5 underline underline-offset-4 decoration-white/30 hover:decoration-white"
                  >
                    Özgeçmiş (PDF)
                  </Link>
                </div>
              </div>

              {/* Sağ taraf: hızlı iletişim bilgileri */}
              <ul className="grid gap-3 text-sm md:justify-self-end">
                <li className="flex items-center gap-3">
                  <span className="size-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden />
                  <span className="text-white/80">Open to work · Ofis / Hibrit / Remote</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="opacity-60">📧</span>
                  <a href="mailto:melekalyoncuoglu2003@gmail.com" className="underline decoration-white/30 hover:decoration-white">
                    melekalyoncuoglu2003@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="opacity-60">📍</span>
                  <span className="text-white/80">Ankara / Konya · TR</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

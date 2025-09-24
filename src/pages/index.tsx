import Image from "next/image";
import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./lib/projects";
import Orb from "./components/decor/Orb";
import SectionCard from "./components/ui/SectionCard";
import FeaturedProjectRow from "./components/FeaturedProjectRow";   
import Parallax from "./components/Parallax";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("aos-show"); });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main className="relative overflow-hidden bg-[#0B1020] text-white">
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

          {/* yıldız tozu çizgiler */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute left-0 right-0 top-36 h-[2px] bg-[radial-gradient(circle,rgba(255,255,255,.35),transparent_60%)] blur-[2px]" />
            <div className="absolute left-0 right-0 top-60 h-[1px] bg-[radial-gradient(circle,rgba(255,255,255,.25),transparent_60%)] blur-[1px]" />
          </div>

          {/* küçük yıldız partikülleri */}
          <div className="absolute inset-0">
            {Array.from({ length: 24 }).map((_, i) => (
              <span key={i}
                className="star"
                style={{
                  left: Math.random()*100 + '%',
                  top: Math.random()*100 + '%',
                  animationDelay: `${Math.random()*3}s`
                }}
              />
            ))}
          </div>
        </div>
      </Parallax>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* HERO */}
        <section className="relative grid grid-cols-1 md:grid-cols-[1.2fr_.8fr] gap-10 items-center">
          <div className="space-y-6 reveal">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
              <span className="size-2 rounded-3xl bg-emerald-400 animate-pulse" />
              Available for work
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              <span className="opacity-80">Creative Full-Stack </span>
              <span className="gradient-text">Developer</span>{" "}
              <span className="text-indigo-300">Melek Kalyoncuoğlu</span>
            </h1>
            <p className="text-white/80 max-w-2xl">
              Next.js, Tailwind, React Native ve Node.js ile modern, performanslı
              arayüzler geliştiriyorum. Aşağıda son çalışmalarımın bir kısmını
              görebilirsin.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="rounded-xl bg-indigo-500/90 px-5 py-2.5 hover:bg-indigo-400 transition">Projeler</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/15 px-5 py-2.5 hover:bg-white/5">LinkedIn</a>
              <Link href="/#contact" className="rounded-xl px-5 py-2.5 underline underline-offset-4 decoration-white/30 hover:decoration-white">İletişim</Link>
            </div>

            {/* tech pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {["Next.js","TypeScript","Tailwind","React Native","Node.js"].map((t)=>(
                <span key={t} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* SAĞ KART: hafif yüzer animasyon + parallax orb içinde */}
          <div className="reveal aos-delay">
            <SectionCard className="p-6 md:p-8 relative float-soft">
              <div className="absolute -right-6 -top-6 opacity-70" data-speed="-6">
                <Orb size={140} blur={24} hue={220} opacity={0.7} />
              </div>
              <div className="relative h-48 w-48 mx-auto overflow-hidden rounded-full ring-4 ring-white/10 shadow-2xl">
                <Image src="/images/avatar.png" alt="Melek Kalyoncuoğlu" fill sizes="(min-width: 768px) 20vw, 40vw" className="object-cover" />
              </div>
              <p className="mt-4 text-center text-sm text-white/70">
                Kullanıcı deneyimine odaklanan, temiz ve ölçeklenebilir arayüzler.
              </p>
            </SectionCard>
          </div>
        </section>

        {/* ÖNE ÇIKAN SATIR KARTLAR */}
        <section className="space-y-10 sm:space-y-12">
          {projects.slice(0,3).map((p,i)=>(
            <div key={p.slug} className="reveal">
              <FeaturedProjectRow
                title={p.title}
                summary={p.summary}
                image={p.cover || "/images/e-commarce.png"}
                href={`/projects/${p.slug}`}
                reversed={i % 2 === 1}
              />
            </div>
          ))}
        </section>

        {/* TÜM PROJELER – grid */}
        <section id="projects" className="space-y-6 reveal">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl md:text-3xl font-semibold">Öne Çıkan Projeler</h2>
            <Link href="/projects" className="text-indigo-300 hover:underline">Tüm projeler →</Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p)=> <ProjectCard key={p.slug} {...p} /> )}
          </div>
        </section>

        {/* İLETİŞİM */}
        <section id="contact" className="grid gap-6 md:grid-cols-2">
          <div className="reveal">
            <SectionCard className="p-6 md:p-8">
              <h3 className="text-xl font-semibold">Get in touch</h3>
              <p className="mt-2 text-sm text-white/70">
                E-posta veya LinkedIn üzerinden iletişime geçebilirsin. Yeni projelere açığım.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li>📍 Konum: Ankara/Konya</li>
                <li>📧 melekalyoncuoglu2003@gmail.com</li>
                <li>🔗 <a href="https://www.linkedin.com/in/melek-kalyoncuoğlu-4a17b3229/" target="_blank" rel="noopener noreferrer" className="underline decoration-white/30 hover:decoration-white">LinkedIn profilim</a></li>
              </ul>
            </SectionCard>
          </div>

          <div className="reveal">
            <SectionCard className="p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4">Send me a message</h3>
              <form className="space-y-3">
                <input className="w-full rounded-lg bg-white/10 px-3 py-2 outline-none placeholder:text-white/50 focus:ring-2 focus:ring-indigo-400/40" placeholder="Name" />
                <input className="w-full rounded-lg bg-white/10 px-3 py-2 outline-none placeholder:text-white/50 focus:ring-2 focus:ring-indigo-400/40" placeholder="Email Address" />
                <input className="w-full rounded-lg bg-white/10 px-3 py-2 outline-none placeholder:text-white/50 focus:ring-2 focus:ring-indigo-400/40" placeholder="Subject" />
                <textarea rows={4} className="w-full rounded-lg bg-white/10 px-3 py-2 outline-none placeholder:text-white/50 focus:ring-2 focus:ring-indigo-400/40" placeholder="Your message" />
                <button className="rounded-xl bg-indigo-500/90 px-5 py-2.5 hover:bg-indigo-400 transition">Send Message</button>
              </form>
            </SectionCard>
          </div>
        </section>
      </div>
    </main>
  );
}

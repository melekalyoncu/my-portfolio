import Image from "next/image";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./lib/projects";

export default function HomePage() {
return (
<div className="space-y-12">
{/* Hero */}
<section className="flex flex-col md:flex-row items-center gap-8">
<div className="flex-1 space-y-4">
<h1 className="text-3xl md:text-4xl font-bold text-balance">
Merhaba, ben <span className="text-brand-700 dark:text-brand-300">Melek Kalyoncuoğlu</span> 👋
</h1>
<p className="text-neutral-700 dark:text-neutral-300 max-w-2xl">
Web & mobil geliştiriciyim. Next.js, Tailwind, React Native ve Node.js ile projeler
geliştiriyorum. Aşağıda seçtiğim projelerden bazılarını bulabilirsin.
</p>
<div className="flex gap-3">
<a href="#projects" className="px-4 py-2 rounded-xl bg-brand-600 text-white hover:bg-brand-700 transition">Projeler</a>
<a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl border border-black/10 dark:border-white/10">LinkedIn</a>
</div>
</div>
<div className="relative w-40 h-40 rounded-full overflow-hidden border border-black/10 dark:border-white/10">
<Image src="/images/avatar.png" alt="Avatar" fill className="object-cover" />
</div>
</section>

{/* Projects */}
<section id="projects" className="space-y-6">
<h2 className="text-2xl font-semibold">Öne Çıkan Projeler</h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
{projects.map((p) => (
<ProjectCard key={p.slug} {...p} />
))}
</div>
</section>
</div>
);
}
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { getProject } from "../lib/projects";

export default function ProjectDetail() {
const router = useRouter();
const { slug } = router.query;
const project = typeof slug === "string" ? getProject(slug) : undefined;

if (!project) {
return (
<div className="py-16">
<p>Proje bulunamadı.</p>
<Link href="/" className="text-brand-600 hover:underline">← Ana sayfaya dön</Link>
</div>
);
}

return (
<article className="space-y-6">
<Link href="/" className="text-brand-600 hover:underline">← Tüm projeler</Link>
<h1 className="text-3xl font-bold">{project.title}</h1>
<p className="text-neutral-600 dark:text-neutral-300">{project.summary}</p>

<div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-black/10 dark:border-white/10">
<Image src={project.cover || "/projects/placeholder.png"} alt={project.title} fill className="object-cover" />
</div>

<div className="flex flex-wrap gap-2">
{project.tech.map((t) => (
<span key={t} className="text-xs border border-black/10 dark:border-white/10 px-2 py-1 rounded-full">{t}</span>
))}
</div>

<div className="prose dark:prose-invert max-w-none">
{project.content.split("\n").map((line, i) => (
<p key={i}>{line}</p>
))}
</div>

<div className="flex gap-3">
{project.github && (
<a href={project.github} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl border border-black/10 dark:border-white/10">GitHub</a>
)}
{project.demo && (
<a href={project.demo} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl bg-brand-600 text-white hover:bg-brand-700">Canlı Demo</a>
)}
</div>
</article>
);
}
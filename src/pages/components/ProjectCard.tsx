import Link from "next/link";
import Image from "next/image";
import { clsx } from "clsx";

type Props = {
slug: string;
title: string;
summary: string;
tech: string[];
cover?: string;
};

export default function ProjectCard({ slug, title, summary, tech, cover }: Props) {
return (
<Link href={`../projects/${slug}`} className="group">
<article className={clsx(
"rounded-2xl overflow-hidden border border-black/10 dark:border-white/10",
"bg-white/70 dark:bg-neutral-900/60 hover:bg-white dark:hover:bg-neutral-900",
"shadow-sm hover:shadow-md transition-all"
)}>
<div className="aspect-video relative bg-neutral-100 dark:bg-neutral-800">
<Image src={cover || "/projects/placeholder.png"} alt={title} fill className="object-cover" />
</div>
<div className="p-4">
<h3 className="font-semibold text-lg mb-1">{title}</h3>
<p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 mb-3">{summary}</p>
<div className="flex flex-wrap gap-2">
{tech.map((t) => (
<span key={t} className="text-xs border border-black/10 dark:border-white/10 px-2 py-1 rounded-full">
{t}
</span>
))}
</div>
</div>
</article>
</Link>
);
}
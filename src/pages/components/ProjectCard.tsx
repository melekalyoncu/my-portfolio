import Link from "next/link";
import Image from "next/image";
import type { Project } from "../lib/projects";

export default function ProjectCard(props: Project) {
  return (
    <article
      className="
        group relative overflow-hidden rounded-2xl border
        border-black/10 dark:border-white/10
        bg-white/60 dark:bg-neutral-900/50
        backdrop-blur-md shadow-sm
        hover:shadow-xl transition-all duration-300
        hover:-translate-y-1
      "
    >
      <Link href={`/projects/${props.slug}`} className="absolute inset-0 z-10" aria-label={props.title} />
      {/* Cover */}
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={props.cover || "/projects/placeholder.png"}
          alt={props.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
        <div className="absolute left-4 bottom-3 flex gap-2 flex-wrap">
          {props.tech.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/30 bg-white/20 px-2 py-0.5 text-xs text-white backdrop-blur-md"
            >
              {t}
            </span>
          ))}
          {props.tech.length > 3 && (
            <span className="rounded-full border border-white/30 bg-white/20 px-2 py-0.5 text-xs text-white backdrop-blur-md">
              +{props.tech.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="p-4 sm:p-5">
        <h3 className="text-lg font-semibold tracking-tight">
          <Link href={`/projects/${props.slug}`} className="relative z-10 hover:underline">
            {props.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-neutral-600 dark:text-neutral-300">
          {props.summary}
        </p>

        {/* Footer */}
        <div className="mt-4 flex items-center gap-2">
          {props.github && (
            <a
              href={props.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-lg border border-black/10 dark:border-white/10 px-3 py-1.5 text-sm hover:bg-black/5 dark:hover:bg-white/5"
              onClick={(e) => e.stopPropagation()}
            >
              <span>GitHub</span> <span aria-hidden>↗</span>
            </a>
          )}
          {props.demo && (
            <a
              href={props.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-lg bg-brand-600 text-white px-3 py-1.5 text-sm hover:bg-brand-700"
              onClick={(e) => e.stopPropagation()}
            >
              <span>Canlı Demo</span> <span aria-hidden>▶</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getLocalizedProject, getProjectSlugs } from "../../lib/projects";

type Props = { slug: string };

export default function ProjectDetail({ slug }: Props) {
  const { t } = useTranslation("projects");
  const project = getLocalizedProject(slug, t);

  if (!project) {
    return (
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 text-white">
        <p className="text-white/80">{t("page.notFound")}</p>
        <Link href="/" className="text-indigo-300 hover:underline mt-2 block">
          {t("page.backAll")}
        </Link>
      </div>
    );
  }

  return (
    <main className="relative min-h-screen bg-[#0B1020] text-white">
      <div className="absolute inset-x-0 -top-24 h-[220px] bg-[radial-gradient(ellipse_at_top,rgba(129,140,248,.25),transparent_60%)] pointer-events-none" />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <Link href="/" className="text-indigo-300 hover:underline">
          {t("page.backAll")}
        </Link>

        <header className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{project.title}</h1>
          <p className="text-white/70">{project.summary}</p>
          <div className="flex flex-wrap gap-2 pt-1">
            {project.tech.map((tech) => (
              <span key={tech} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80">
                {tech}
              </span>
            ))}
          </div>
        </header>

        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
          <Image
            src={project.cover || "/projects/placeholder.png"}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        <article className="prose prose-invert max-w-none prose-p:leading-relaxed">
          {project.content.split("\n").map((line, i) =>
            line.trim() ? <p key={i}>{line}</p> : <div key={i} className="h-2" />
          )}
        </article>

        <div className="flex flex-wrap gap-3 pt-2">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-xl border border-white/10 px-4 py-2 hover:bg-white/5">
              {t("page.github")}
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-xl bg-indigo-500/90 px-4 py-2 hover:bg-indigo-400">
              {t("page.liveDemo")}
            </a>
          )}
        </div>
      </div>
    </main>
  );
}

export async function getStaticProps({ params, locale }: { params: { slug: string }, locale: string }) {
  const slug = params.slug; 
  return {
    props: {
      slug,
      ...(await serverSideTranslations(locale, ["projects"])),
    },
  };
}

export async function getStaticPaths() {
  const slugs = getProjectSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: "blocking", 
  };
}

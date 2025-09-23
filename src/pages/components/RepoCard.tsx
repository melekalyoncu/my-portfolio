import Link from "next/link";
import { Repo } from "../lib/github";

export default function RepoCard({ repo }: { repo: Repo }) {
  // Öncelik: Live demo (homepage) → GitHub → Dahili detay
  const primaryHref =
    (repo.homepage && repo.homepage.trim()) ||
    repo.html_url ||
    `/projects/${repo.owner.login}/${repo.name}`;

  const isExternal = primaryHref.startsWith("https://books-store-git-main-melek-kalyoncuoglus-projects.vercel.app");

  const Card = ({ children }: { children: React.ReactNode }) =>
    isExternal ? (
      <a href={primaryHref} target="_blank" rel="noreferrer" className="group">
        {children}
      </a>
    ) : (
      <Link href={primaryHref} className="group">
        {children}
      </Link>
    );

  return (
    <Card>
      <article className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 hover:bg-white dark:hover:bg-neutral-900 shadow-sm hover:shadow-md transition-all p-4">
        <h3 className="font-semibold text-lg mb-1 group-hover:underline">{repo.name}</h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 mb-3">
          {repo.description || "Açıklama yok"}
        </p>

        <div className="flex items-center gap-3 text-xs text-neutral-600 dark:text-neutral-400 mb-3">
          {repo.language && <span>{repo.language}</span>}
          <span>★ {repo.stargazers_count}</span>
          <span>⑂ {repo.forks_count}</span>
        </div>

        {/* İkincil aksiyonlar */}
        <div className="flex items-center gap-3 text-sm">
          {repo.homepage && repo.homepage.trim() && (
            <a
              href={repo.homepage}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1 rounded-lg bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15"
              onClick={(e) => e.stopPropagation()}
            >
              Canlı
            </a>
          )}
          {repo.html_url && (
            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1 rounded-lg border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub
            </a>
          )}
        </div>
      </article>
    </Card>
  );
}

export type ProjectBase = {
  slug: string;
  tech: string[];
  cover?: string;
  github?: string;
  demo?: string;
};

export type Project = ProjectBase & {
  title: string;
  summary: string;
  content: string;
};

const baseProjects: ProjectBase[] = [
  {
    slug: "e-commerce",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    cover: "/images/e-commerce.png",
    github: "https://github.com/melekalyoncu/e-commerce",
    demo: "https://e-commerce-rouge-ten-15.vercel.app"
  },
   {
    slug: "sport-clup",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    cover: "/images/kadikoy.png",
    github: "https://github.com/melekalyoncu/yeni_kadikoy",
    demo: "https://www.yenikadikoyspor.com/"
  },
  {
    slug: "crypto-tracker",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    cover: "/images/crypto-tracker.png",
    github: "https://github.com/melekalyoncu/crypto-tracker",
    demo: "https://crypto-tracker-delta-eight-20.vercel.app/"
  },
  {
    slug: "piton-intern",
    tech: ["JavaScript", "Next.js", "Tailwind"],
    cover: "/images/piton-intern.png",
    github: "https://github.com/melekalyoncu/piton_intern",
    demo: "https://piton-intern.vercel.app"
  },
  {
    slug: "book-store",
    tech: ["Next.js", "TypeScript", "Tailwind", "SWR", "Axios"],
    cover: "/images/book-store.png",
    github: "https://github.com/melekalyoncu/books-store",
    demo: "https://books-store-nu.vercel.app"
  },
  {
    slug: "nextjs-contact-page",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    cover: "/images/contact-page.png",
    github: "https://github.com/melekalyoncu/nextjs-contact-page",
    demo: "https://e-commerce-g8bv.vercel.app"
  }
];

export function getLocalizedProjects(t: (key: string) => string): Project[] {
  return baseProjects.map(p => ({
    ...p,
    title: t(`${p.slug}.title`),
    summary: t(`${p.slug}.summary`),
    content: t(`${p.slug}.content`)
  }));
}

export function getLocalizedProject(
  slug: string,
  t: (key: string) => string
): Project | undefined {
  const base = baseProjects.find(p => p.slug === slug);
  if (!base) return undefined;
  return {
    ...base,
    title: t(`${slug}.title`),
    summary: t(`${slug}.summary`),
    content: t(`${slug}.content`)
  };
}
export function getProjectSlugs(): string[] {
  return baseProjects.map((p) => p.slug);
}


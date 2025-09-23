export type Project = {
  slug: string;
  title: string;
  summary: string;
  tech: string[];
  cover?: string;
  github?: string;
  demo?: string;
  content: string;
};

export const projects: Project[] = [
  {
    slug: "book-store",
    title: "E-Ticaret: Book-Store",
    summary: "Next.js + Tailwind ile kitap e-ticaret sitesi; SWR, Axios, JWT, Docker.",
    tech: ["Next.js", "TypeScript", "Tailwind", "SWR", "Axios"],
    cover: "/images/book-store.png",
    github: "https://github.com/melekalyoncu/books-store",
    demo: "https://books-store-git-main-melek-kalyoncuoglus-projects.vercel.app",
    content: `Özellikler:
- Kategoriye göre filtreleme, yatay scroll liste.
- SWR + Axios ile veri yönetimi, JWT hazır entegrasyon yapısı.
- Dark/Light tema, responsive tasarım.
- Admin/Seller rolleri için arayüz (tasarım).`
  },

  {
    slug: "aysar-mobile",
    title: "Aysar – Müzik Keşif Uygulaması",
    summary: "React Native tabanlı keşif ve öneri; Q-Learning, favoriler, listeler.",
    tech: ["React Native", "Node.js", "PostgreSQL"],
    // cover: "/images/aysar.png",
    // github: "<Aysar repo linki burada değilse boş bırakıyoruz>",
    demo: "",
    content: `Özellikler:
- Keşfet: Popüler şarkılardan rastgele seçim.
- Q-Learning tabanlı öneri yaklaşımı.
- Favorileme, listeler, profil ekranları.`
  },

  {
    slug: "crypto-tracker",
    title: "Crypto Tracker – Fiyat & Piyasa Takip",
    summary: "Next.js ile coin takip paneli; responsive arayüz ve temel grafikler.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    // cover: "/images/crypto-tracker.png",
    github: "https://github.com/melekalyoncu/crypto-tracker",
    demo: "https://crypto-tracker-delta-eight-20.vercel.app",
    content: `Özellikler:
- Coin listeleme ve detay görünümü.
- Mobil uyumlu arayüz ve hızlı arama.
- Geliştirmeye açık grafik/analitik altyapısı.`
  },

  {
    slug: "piton-intern",
    title: "Piton Intern – Çalışmalar",
    summary: "Staj sürecinde yapılan alıştırmalar, küçük projeler ve notlar.",
    tech: ["TypeScript", "Node.js", "SQL"],
    // cover: "/images/piton-intern.png",
    github: "https://github.com/melekalyoncu/piton_intern",
    demo: "",
    content: `İçerik:
- Backend ve veri tabanı alıştırmaları.
- Küçük servisler, yardımcı scriptler.
- Notlar ve deneyler.`
  },

  {
    slug: "nextjs-contact-page",
    title: "Next.js Contact Page",
    summary: "Basit ama şık iletişim sayfası; Next.js + Tailwind.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    // cover: "/images/contact-page.png",
    github: "https://github.com/melekalyoncu/nextjs-contact-page",
    demo: "",
    content: `Özellikler:
- Form bileşenleri ve validasyon iskeleti.
- Görsel/ikon kullanımıyla sade tasarım.
- Kolayca projelere entegre edilebilir.`
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

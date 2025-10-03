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
    slug: "e-commerce",
    title: "Next.js e-Ticaret Websitesi",
    summary: "e-ticaret sitesi tasarımı; ürün listeleme, detay, sepet ve ödeme sayfaları.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    cover: "/images/e-commerce.png",
    github: "https://github.com/melekalyoncu/e-commerce",
    demo: "https://e-commerce-rouge-ten-15.vercel.app",
    content: `Özellikler:
- Ürün listeleme, detay, sepet ve ödeme sayfaları.
- Responsive tasarım ve temel etkileşimler.
- E-ticaret projeleri için başlangıç şablonu.`
  },

  {
    slug: "crypto-tracker",
    title: "Crypto Tracker – Fiyat & Piyasa Takip",
    summary: "Next.js ile coin takip paneli; responsive arayüz ve temel grafikler.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    cover: "/images/crypto-tracker.png",
    github: "https://github.com/melekalyoncu/crypto-tracker",
    demo: "https://crypto-tracker-delta-eight-20.vercel.app/",
    content: `Özellikler:
- Coin listeleme ve detay görünümü.
- Mobil uyumlu arayüz ve hızlı arama.
- Geliştirmeye açık grafik/analitik altyapısı.`
  },

  {
    slug: "piton-intern",
    title: "Staj Websitesi",
    summary: "Staj kabulu için web site tasarımı",
    tech: ["JavaScript", "Next.js", "Tailwind"],
    cover: "/images/piton-intern.png",
    github: "https://github.com/melekalyoncu/piton_intern",
    demo: "https://piton-intern.vercel.app",
    content: `İçerik:
- Staj başvurusu için hazırlanan web sitesi.
- Figma’daki verilen örnek tasarım üzerinden kodlandı.`
  },
  {
    slug: "book-store",
    title: "E-Ticaret: Book-Store",
    summary: "Next.js + Tailwind ile kitap e-ticaret sitesi; SWR, Axios, JWT, Docker.",
    tech: ["Next.js", "TypeScript", "Tailwind", "SWR", "Axios"],
    cover: "/images/book-store.png",
    github: "https://github.com/melekalyoncu/books-store",
    demo: "https://books-store-nu.vercel.app",
    content: `Özellikler:
- Kategoriye göre filtreleme, yatay scroll liste.
- SWR + Axios ile veri yönetimi, JWT hazır entegrasyon yapısı.
- Dark/Light tema, responsive tasarım.
- Admin/Seller rolleri için arayüz (tasarım).`
  },

  {
    slug: "nextjs-contact-page",
    title: "Next.js Contact Page",
    summary: "Basit ama şık iletişim sayfası; Next.js + Tailwind.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    cover: "/images/contact-page.png",
    github: "https://github.com/melekalyoncu/nextjs-contact-page",
    demo: "https://e-commerce-g8bv.vercel.app",
    content: `Özellikler:
- Form bileşenleri ve validasyon iskeleti.
- Görsel/ikon kullanımıyla sade tasarım.
- Kolayca projelere entegre edilebilir.`
  },

];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

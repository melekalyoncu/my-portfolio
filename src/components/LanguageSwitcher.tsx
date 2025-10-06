import Link from "next/link";
import { useRouter } from "next/router";

export default function LanguageSwitcher() {
  const { asPath, locale } = useRouter();

  const btn = (active: boolean) =>
    `inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs transition
     focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400
     ${active ? "bg-white/20 text-white font-semibold" : "text-white/80 hover:bg-white/10"}`;

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/10 p-1 backdrop-blur">
      <Link
        href={asPath}
        locale="tr"
        aria-current={locale === "tr" ? "true" : undefined}
        className={btn(locale === "tr")}
        title="Türkçe"
      >
        <span role="img" aria-label="Türkiye bayrağı" className="text-lg">🇹🇷</span>
        <span className="ml-1">TR</span>
      </Link>

      <Link
        href={asPath}
        locale="en"
        aria-current={locale === "en" ? "true" : undefined}
        className={btn(locale === "en")}
        title="English"
      >
        <span role="img" aria-label="United Kingdom flag" className="text-lg">🇬🇧</span>
        <span className="ml-1">EN</span>
      </Link>
    </div>
  );
}

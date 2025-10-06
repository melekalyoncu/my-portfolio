import Link from "next/link";
import { useRouter } from "next/router";

export default function LanguageSwitcher() {
  const { asPath, locale } = useRouter();
  return (
    <div className="flex gap-3 text-sm">
      <Link href={asPath} locale="tr" aria-current={locale === "tr" ? "true" : undefined}>
        TR
      </Link>
      <span>/</span>
      <Link href={asPath} locale="en" aria-current={locale === "en" ? "true" : undefined}>
        EN
      </Link>
    </div>
  );
}

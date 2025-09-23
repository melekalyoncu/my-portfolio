export default function Footer() {
return (
<footer className="mt-16 border-t border-black/5 dark:border-white/10">
<div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-6 text-sm text-neutral-600 dark:text-neutral-400">
© {new Date().getFullYear()} Melek Kalyoncuoğlu — Tüm hakları saklıdır.
</div>
</footer>
);
}
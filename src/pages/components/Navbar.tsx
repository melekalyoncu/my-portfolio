import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
const { theme, setTheme, resolvedTheme } = useTheme();
const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);

return (
<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60 border-b border-black/5 dark:border-white/10">
<nav className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-6 lg:px-8 h-14">
<Link href="/" className="font-semibold tracking-tight text-lg">
<span className="text-brand-700 dark:text-brand-300">Melek</span> • Portfolio
</Link>
<div className="flex items-center gap-4">
<Link href="/" className="hover:underline">Projeler</Link>
<a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
<button
aria-label="Tema Değiştir"
onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
className="p-2 rounded-xl border border-black/10 dark:border-white/10"
>
{mounted && resolvedTheme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
</button>
</div>
</nav>
</header>
);
}
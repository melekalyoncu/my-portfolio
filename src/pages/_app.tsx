import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function MyApp({ Component, pageProps }: AppProps) {
return (
<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
<div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 transition-colors">
<Navbar />
<main className="px-4 md:px-6 lg:px-8 max-w-6xl mx-auto py-8">
<Component {...pageProps} />
</main>
<Footer />
</div>
</ThemeProvider>
);
}
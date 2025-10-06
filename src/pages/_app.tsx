import type { AppProps } from "next/app";
import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 transition-colors">
      <main className="relative">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default appWithTranslation(MyApp);

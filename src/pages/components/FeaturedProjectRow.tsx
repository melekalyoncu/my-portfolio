import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  summary: string;
  image: string;
  href?: string;
  reversed?: boolean;
  className?: string;
};

export default function FeaturedProjectRow({
  title,
  summary,
  image,
  href,
  reversed = false,
  className = "",
}: Props) {
  return (
    <article
      className={`
        overflow-hidden rounded-3xl
        border border-white/10
        bg-white/5 dark:bg-white/5
        backdrop-blur-md
        shadow-[0_8px_30px_-10px_rgba(0,0,0,0.5)]
        ${className}
      `}
    >
      <div
        className={`
          grid items-stretch
          md:grid-cols-2
          ${reversed ? "md:[&>*:first-child]:order-2" : ""}
        `}
      >
        {/* Text */}
        <div className="flex">
          <div className="p-6 sm:p-10 md:p-12 lg:p-14 flex flex-col justify-center gap-5">
            <header>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                {title}
              </h3>
              <div className="mt-2 h-1.5 w-16 rounded-full bg-indigo-400/70" />
            </header>

            <p className="text-white/70 leading-relaxed max-w-prose">
              {summary}
            </p>

            <div>
              {href ? (
                <Link
                  href={href}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20
                             px-4 py-2 text-sm
                             hover:bg-white/10 transition"
                >
                  View Project <span aria-hidden>→</span>
                </Link>
              ) : (
                <button
                  className="inline-flex items-center gap-2 rounded-full border border-white/20
                             px-4 py-2 text-sm
                             hover:bg-white/10 transition"
                >
                  View Project <span aria-hidden>→</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative min-h-[220px] md:min-h-[320px]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <div className="pointer-events-none absolute inset-0 rounded-3xl md:rounded-none md:rounded-r-3xl ring-1 ring-black/0" />
        </div>
      </div>
    </article>
  );
}

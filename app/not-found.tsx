import Link from "next/link";

/**
 * Not Found Page
 *
 * Minimal, on-brand 404 page
 * Provides clear path back to home
 */

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="container-main text-center">
        <span className="text-xs uppercase tracking-wider text-[#6B6B6B] mb-4 block">
          404
        </span>
        <h1 className="font-serif text-4xl md:text-5xl text-[#0F0F0F] mb-4">
          Page not found
        </h1>
        <p className="text-[#6B6B6B] mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#0F0F0F] hover:opacity-60 transition-opacity duration-300 group"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform duration-300">
            ←
          </span>
          <span className="font-medium">Back to home</span>
        </Link>
      </div>
    </main>
  );
}

"use client";

import Link from "next/link";

/**
 * Header component - Floating minimal style
 *
 * Design philosophy: "quiet luxury" - minimal, floating, not service-website-like
 * No language switcher, no full menu. Just wordmark + 2 links max.
 */
export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] pointer-events-none">
      {/* Background layer - subtle with backdrop blur */}
      <div className="absolute inset-0 bg-[#FCFCFA]/80 backdrop-blur-md pointer-events-none" />

      <div className="container-main relative">
        <nav className="flex items-center justify-between h-14 md:h-16">
          {/* Wordmark - Sans-serif, clean, doesn't compete with headlines */}
          <Link
            href="/"
            className="pointer-events-auto text-[#0F0F0F] font-sans text-xs tracking-[0.15em] uppercase hover:opacity-60 transition-opacity duration-300"
          >
            Portfolio
          </Link>

          {/* Minimal nav - sleek underline on hover */}
          <div className="pointer-events-auto flex items-center gap-6 md:gap-8">
            <a
              href="#works"
              className="relative text-sm text-[#6B6B6B] hover:text-[#0F0F0F] transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[1.5px] after:bg-[#0F0F0F] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              Dự án
            </a>
            <a
              href="#about"
              className="relative text-sm text-[#6B6B6B] hover:text-[#0F0F0F] transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[1.5px] after:bg-[#0F0F0F] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              Giới thiệu
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

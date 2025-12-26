import Link from "next/link";

/**
 * FooterCTA component
 *
 * CTA that links back to main website (placeholder URL)
 * Used at the end of pages and case studies
 */

interface FooterCTAProps {
  variant?: "default" | "compact";
}

export function FooterCTA({ variant = "default" }: FooterCTAProps) {
  const placeholderURL = "https://example.com/build-yours";

  if (variant === "compact") {
    return (
      <div className="border-t border-[rgba(15,15,15,0.08)] pt-8">
        <p className="text-sm text-[#6B6B6B] mb-3">
          Bạn muốn sở hữu portfolio như thế này?
        </p>
        <Link
          href={placeholderURL}
          className="inline-flex items-center gap-2 text-[#0F0F0F] hover:opacity-60 transition-opacity duration-300 group"
        >
          <span className="font-medium">Sở hữu ngay</span>
          <span className="transform group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </Link>
      </div>
    );
  }

  return (
    <footer id="contact" className="py-32 md:py-40 bg-[#F5F5F3]">
      <div className="container-main flex flex-col items-center">
        {/* Centered CTA Content */}
        <div className="max-w-2xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.5rem] text-[#0F0F0F] mb-5 leading-[1.2] tracking-[-0.02em]">
            Bạn muốn sở hữu portfolio như thế này?
          </h2>
          <p className="text-[#5A5A5A] mb-10 text-base md:text-lg leading-[1.8] max-w-lg mx-auto">
            Đây là bản demo phong cách tối giản. Giúp tác phẩm của bạn tỏa sáng
            bằng sự tinh tế và trật tự.
          </p>
          <Link
            href={placeholderURL}
            className="inline-flex items-center gap-3 px-6 py-3 bg-[#0F0F0F] text-white rounded-sm hover:bg-[#2A2A2A] transition-colors duration-300 group"
          >
            <span className="text-sm font-medium tracking-wide">
              Sở hữu ngay
            </span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </Link>
        </div>

        {/* Subtle footer info */}
        <div className="mt-24 pt-8 border-t border-[rgba(15,15,15,0.06)] flex flex-col md:flex-row justify-center gap-4 text-xs text-[#8A8A8A]">
          <span>Portfolio Designer Demo</span>
          <span className="hidden md:inline">·</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}

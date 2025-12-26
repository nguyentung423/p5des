import Link from "next/link";
import { getProjectBySlug } from "@/lib/projects";

/**
 * CaseNav component
 *
 * Navigation for case study pages
 * Back to Works + Next Project + CTA
 * Ensures no dead-ends
 */

interface CaseNavProps {
  nextSlug: string;
}

export function CaseNav({ nextSlug }: CaseNavProps) {
  const nextProject = getProjectBySlug(nextSlug);
  const placeholderURL = "https://example.com/build-yours";

  return (
    <nav className="mt-20 md:mt-28">
      {/* Project Navigation - The Middle Layer */}
      <div className="border-t border-[rgba(15,15,15,0.08)]">
        <div className="container-main py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            {/* Back to works - Subtle, gray */}
            <Link
              href="/#works"
              className="group inline-flex items-center gap-2 text-[#8A8A8A] hover:text-[#0F0F0F] transition-colors duration-300"
            >
              <span className="transform group-hover:-translate-x-1 transition-transform duration-300">
                ←
              </span>
              <span className="text-sm">Quay lại danh sách</span>
            </Link>

            {/* Next project - Teaser style */}
            {nextProject && (
              <Link
                href={`/work/${nextSlug}`}
                className="group inline-flex items-center gap-5"
              >
                <div className="text-right">
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#8A8A8A] block mb-2">
                    Dự án tiếp theo
                  </span>
                  <span className="font-serif text-2xl md:text-3xl text-[#0F0F0F] leading-tight group-hover:opacity-70 transition-opacity duration-300">
                    {nextProject.title}
                  </span>
                </div>
                <span className="transform group-hover:translate-x-[5px] transition-transform duration-300 text-2xl text-[#0F0F0F]">
                  →
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Footer CTA - The Sales Pitch (Centered, Separated) */}
      <div className="bg-[#F8F8F6]">
        <div className="container-main py-28 md:py-36">
          <div className="max-w-lg mx-auto text-center">
            <p className="font-serif text-xl md:text-2xl text-[#0F0F0F] mb-6 leading-[1.3]">
              Bạn muốn sở hữu portfolio như thế này?
            </p>
            <Link
              href={placeholderURL}
              className="group inline-flex items-center gap-2 text-[#0F0F0F]"
            >
              <span className="font-medium border-b border-[#0F0F0F] pb-1 group-hover:border-transparent transition-colors duration-300">
                Sở hữu ngay
              </span>
              <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

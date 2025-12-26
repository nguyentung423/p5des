import { Header, FooterCTA, WorkCard, Reveal } from "@/components";
import { projects } from "@/lib/projects";

/**
 * Home Page
 *
 * Sections:
 * 1. Hero - Minimal, evocative headline
 * 2. Selected Works - Project cards with metric hooks
 * 3. About - Brief mindset statement
 * 4. Footer CTA - Link back to main website
 */

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section - Swiss Style, optical center positioning */}
        <section className="min-h-screen flex items-center pt-16 pb-24 md:pt-0 md:pb-32">
          <div className="container-main w-full mt-[15vh] md:mt-[12vh]">
            <Reveal>
              <h1 className="font-serif text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] text-[#0F0F0F] max-w-4xl leading-[1.05] md:leading-[1.0] tracking-[-0.02em]">
                Kiến tạo trật tự
                <br /> từ sự hỗn mang.
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-8 md:mt-10 text-base md:text-lg text-[#3D3D3D] max-w-lg leading-[1.8] tracking-[-0.01em]">
                Product Designer với tư duy hệ thống. Tôi giúp doanh nghiệp vận
                hành nhanh hơn bằng cách biến những quy trình rối rắm trở nên
                hiển nhiên và đơn giản.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-6 md:mt-8">
                <a
                  href="#works"
                  className="group inline-flex items-center gap-3 text-[#0F0F0F] text-sm tracking-wide hover:opacity-70 transition-opacity duration-300"
                >
                  <span>Xem dự án tiêu biểu</span>
                  <span className="flex items-center justify-center w-8 h-8 rounded-full border border-[#0F0F0F]/20 group-hover:translate-y-[3px] transition-transform duration-300">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="opacity-70"
                    >
                      <path
                        d="M6 2.5V9.5M6 9.5L2.5 6M6 9.5L9.5 6"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Selected Works */}
        <section id="works" className="py-20 md:py-28 scroll-mt-24">
          <div className="container-main">
            <Reveal>
              <div className="flex items-center justify-between mb-12 md:mb-16">
                <h2 className="text-xs uppercase tracking-wider text-[#6B6B6B] font-medium">
                  Dự án tiêu biểu
                </h2>
                <span className="text-xs text-[#6B6B6B]">
                  {projects.length} dự án
                </span>
              </div>
            </Reveal>

            <div className="space-y-16 md:space-y-24">
              {projects.map((project, index) => (
                <Reveal key={project.slug} delay={index * 100}>
                  <WorkCard project={project} index={index} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* About Section - Full viewport, 2-column editorial layout */}
        <section
          id="about"
          className="min-h-screen flex items-center bg-[#F8F8F6] scroll-mt-24 py-20 md:py-0"
        >
          <div className="container-main w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
              {/* Left Column - The Philosophy (Visual Anchor) */}
              <div className="md:self-start">
                <Reveal>
                  <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#6B6B6B] block mb-6">
                    Giới thiệu
                  </span>
                </Reveal>
                <Reveal delay={100}>
                  <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.25rem] text-[#0F0F0F] leading-[1.15] tracking-[-0.02em]">
                    Đỉnh cao của thiết kế là sự vô hình.
                  </h2>
                </Reveal>
              </div>

              {/* Right Column - The Details (Staggered editorial offset) */}
              <div className="md:pt-32 lg:pt-40">
                <div className="max-w-[500px]">
                  <Reveal delay={200}>
                    <div className="space-y-5 text-[#4A4A4A] text-base md:text-[17px] leading-[1.85]">
                      <p>
                        7 năm tôi luyện trong môi trường sản phẩm số—từ startup
                        giai đoạn đầu đến các nền tảng doanh nghiệp. Trọng tâm
                        của tôi là tư duy hệ thống, kiến trúc thông tin, và
                        những giao diện tôn trọng thời gian của người dùng.
                      </p>
                      <p>
                        Tôi bị cuốn hút bởi những vấn đề phức tạp với kết quả rõ
                        ràng. Những flow thanh toán thực sự chuyển đổi. Những
                        design system mà team thực sự áp dụng. Những portfolio
                        tạo ra khách hàng tiềm năng chất lượng, không chỉ lời
                        khen.
                      </p>
                      <p>
                        Hiện tại đang mở cho các vị trí senior product design và
                        một số dự án tư vấn chọn lọc.
                      </p>
                    </div>

                    {/* Download CV - subtle, like a signature */}
                    <a
                      href="/resume.pdf"
                      className="group inline-flex items-center gap-1.5 mt-8 text-[#5A5A5A] text-sm hover:text-[#0F0F0F] transition-colors duration-300"
                    >
                      <span className="border-b border-transparent group-hover:border-[#0F0F0F]/40 pb-0.5 transition-colors duration-300">
                        Tải Hồ sơ năng lực (PDF)
                      </span>
                      <span className="text-xs">↓</span>
                    </a>
                  </Reveal>

                  <Reveal delay={300}>
                    <div className="mt-10 flex flex-wrap gap-2 text-sm">
                      <span className="px-3 py-1.5 bg-white/80 rounded text-[#5A5A5A]">
                        Product Design
                      </span>
                      <span className="px-3 py-1.5 bg-white/80 rounded text-[#5A5A5A]">
                        Design Systems
                      </span>
                      <span className="px-3 py-1.5 bg-white/80 rounded text-[#5A5A5A]">
                        UX Strategy
                      </span>
                      <span className="px-3 py-1.5 bg-white/80 rounded text-[#5A5A5A]">
                        Prototyping
                      </span>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterCTA />
    </>
  );
}

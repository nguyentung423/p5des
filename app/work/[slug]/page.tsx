import { notFound } from "next/navigation";
import Image from "next/image";
import { Header, CaseNav, Reveal, SectionLabel } from "@/components";
import { getProjectBySlug, getAllSlugs } from "@/lib/projects";

/**
 * Case Study Page
 *
 * Dynamic route for individual project pages
 * Structure: Hero → Context/Role → Problem → Constraints → Solution → Screens → Outcomes
 */

// Generate static params for all projects
export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for each project
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Designer Portfolio Demo`,
    description: project.subtitle,
    openGraph: {
      title: `${project.title} — Designer Portfolio Demo`,
      description: project.subtitle,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="container-main pb-16 md:pb-20">
          <Reveal>
            <div className="mb-8">
              <span className="text-xs uppercase tracking-wider text-[#6B6B6B]">
                {project.tags.join(" · ")}
              </span>
            </div>
          </Reveal>

          <Reveal delay={50}>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#0F0F0F] max-w-3xl leading-[1.1] mb-4">
              {project.title}
            </h1>
          </Reveal>

          <Reveal delay={100}>
            <p className="text-xl md:text-2xl text-[#6B6B6B] max-w-2xl">
              {project.subtitle}
            </p>
          </Reveal>

          {/* Hero Image */}
          <Reveal delay={150}>
            <div className="mt-12 md:mt-16 relative aspect-[16/10] bg-[#F5F4F0] rounded overflow-hidden">
              <Image
                src={project.heroImage}
                alt={`${project.title} hero image`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1040px) 100vw, 1040px"
              />
            </div>
          </Reveal>
        </section>

        {/* Meta Info - Role / Timeline / Year */}
        <section className="container-main py-12 border-t border-[rgba(15,15,15,0.08)]">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <SectionLabel>Vai trò</SectionLabel>
                <p className="text-[#0F0F0F]">{project.role}</p>
              </div>
              <div>
                <SectionLabel>Thời gian</SectionLabel>
                <p className="text-[#0F0F0F]">{project.timeline}</p>
              </div>
              <div>
                <SectionLabel>Năm</SectionLabel>
                <p className="text-[#0F0F0F]">{project.year}</p>
              </div>
              <div>
                <SectionLabel>Kết quả</SectionLabel>
                <p className="text-[#0F0F0F] font-medium">
                  {project.metricHook}
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Context */}
        <section className="container-main py-12 md:py-16">
          <Reveal>
            <div className="max-w-2xl">
              <SectionLabel>Bối cảnh</SectionLabel>
              <p className="text-base md:text-lg text-[#0F0F0F] leading-relaxed">
                {project.context}
              </p>
            </div>
          </Reveal>
        </section>

        {/* Problem */}
        <section className="container-main py-12 md:py-16">
          <Reveal>
            <div className="max-w-2xl">
              <SectionLabel>Vấn đề</SectionLabel>
              <p className="font-serif text-2xl md:text-3xl text-[#0F0F0F] leading-snug">
                {project.problem}
              </p>
            </div>
          </Reveal>
        </section>

        {/* Constraints */}
        <section className="container-main py-12 md:py-16 bg-[#F8F8F6] -mx-6 px-6 md:-mx-10 md:px-10">
          <div className="max-w-[1040px] mx-auto">
            <Reveal>
              <SectionLabel>Hạn chế</SectionLabel>
              <ul className="space-y-3">
                {project.constraints.map((constraint, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[#0F0F0F]"
                  >
                    <span className="text-[#6B6B6B] mt-1.5">•</span>
                    <span className="text-base md:text-lg leading-relaxed">
                      {constraint}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Solution */}
        <section className="container-main py-12 md:py-16">
          <Reveal>
            <div className="max-w-2xl">
              <SectionLabel>Giải pháp</SectionLabel>
              <ul className="space-y-4">
                {project.solution.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[#0F0F0F]"
                  >
                    <span className="text-xs text-[#6B6B6B] font-mono mt-1.5 min-w-[1.5rem]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base md:text-lg leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>

        {/* Key Screens */}
        <section className="container-main py-12 md:py-16">
          <Reveal>
            <SectionLabel>Màn hình chính</SectionLabel>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-6">
            {project.images.map((image, index) => (
              <Reveal key={index} delay={index * 100}>
                <div className="relative aspect-[4/3] bg-[#F5F4F0] rounded overflow-hidden">
                  <Image
                    src={image}
                    alt={`${project.title} screen ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Outcomes */}
        <section className="container-main py-12 md:py-16">
          <Reveal>
            <div className="max-w-2xl">
              <SectionLabel>Kết quả đạt được</SectionLabel>
              <ul className="space-y-3">
                {project.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#0F0F0F] mt-1.5 text-sm">—</span>
                    <span className="text-base md:text-lg text-[#0F0F0F] leading-relaxed">
                      {outcome}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>
      </main>

      <CaseNav nextSlug={project.nextSlug} />
    </>
  );
}

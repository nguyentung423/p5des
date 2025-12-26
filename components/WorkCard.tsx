"use client";

import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/projects";

/**
 * WorkCard component
 *
 * Displays project preview with hover effects
 * Motion: subtle opacity + translate on hover
 */

interface WorkCardProps {
  project: Project;
  index: number;
}

export function WorkCard({ project, index }: WorkCardProps) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <article className="relative">
        {/* Project number - subtle */}
        <span className="absolute -left-4 md:-left-8 top-0 text-xs text-[#6B6B6B] opacity-50 font-mono">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Image container */}
        <div className="relative aspect-[16/10] bg-[#F5F4F0] rounded-sm overflow-hidden mb-8 md:mb-10">
          <Image
            src={project.heroImage}
            alt={`${project.title} project preview`}
            fill
            className="object-cover transform group-hover:scale-[1.02] transition-transform duration-500 ease-out"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* Subtle overlay on hover */}
          <div className="absolute inset-0 bg-[#0F0F0F] opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500" />
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 md:gap-8">
          <div className="flex-1">
            <h3 className="font-serif text-xl md:text-2xl text-[#0F0F0F] mb-1 group-hover:opacity-70 transition-opacity duration-300">
              {project.title}
            </h3>
            <p className="text-sm text-[#6B6B6B]">{project.subtitle}</p>
          </div>

          {/* Tags + Year - baseline aligned with title */}
          <div className="flex items-center gap-3 text-xs text-[#6B6B6B] md:translate-y-[2px]">
            <span>{project.year}</span>
            <span className="w-1 h-1 rounded-full bg-[#6B6B6B] opacity-40" />
            <span>{project.tags[0]}</span>
          </div>
        </div>

        {/* Metric hook - the "so what" */}
        <p className="mt-3 text-sm text-[#6B6B6B] leading-relaxed">
          {project.metricHook}
        </p>
      </article>
    </Link>
  );
}

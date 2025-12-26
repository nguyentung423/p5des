import { ReactNode } from "react";

/**
 * Prose component
 *
 * Typography wrapper for long-form content in case studies
 * Ensures consistent styling for paragraphs, lists, etc.
 */

interface ProseProps {
  children: ReactNode;
  className?: string;
}

export function Prose({ children, className = "" }: ProseProps) {
  return (
    <div
      className={`
        prose-custom
        text-[#0F0F0F]
        leading-relaxed
        
        [&>p]:mb-4
        [&>p]:text-base
        [&>p]:md:text-lg
        [&>p]:text-[#0F0F0F]
        [&>p]:leading-[1.75]
        
        [&>ul]:my-4
        [&>ul]:space-y-2
        [&>ul>li]:text-base
        [&>ul>li]:md:text-lg
        [&>ul>li]:text-[#0F0F0F]
        [&>ul>li]:leading-[1.75]
        [&>ul>li]:pl-4
        [&>ul>li]:relative
        [&>ul>li]:before:content-['']
        [&>ul>li]:before:absolute
        [&>ul>li]:before:left-0
        [&>ul>li]:before:top-[0.75em]
        [&>ul>li]:before:w-1
        [&>ul>li]:before:h-1
        [&>ul>li]:before:rounded-full
        [&>ul>li]:before:bg-[#6B6B6B]
        
        [&>h2]:font-serif
        [&>h2]:text-2xl
        [&>h2]:md:text-3xl
        [&>h2]:mt-12
        [&>h2]:mb-4
        [&>h2]:text-[#0F0F0F]
        
        [&>h3]:font-sans
        [&>h3]:text-sm
        [&>h3]:uppercase
        [&>h3]:tracking-wider
        [&>h3]:text-[#6B6B6B]
        [&>h3]:mt-10
        [&>h3]:mb-3
        
        ${className}
      `}
    >
      {children}
    </div>
  );
}

/**
 * Section header for case studies
 */
interface SectionLabelProps {
  children: ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <h3 className="text-xs uppercase tracking-wider text-[#6B6B6B] mb-4 font-medium">
      {children}
    </h3>
  );
}

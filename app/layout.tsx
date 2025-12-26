import type { Metadata } from "next";
import { Be_Vietnam_Pro, Playfair_Display } from "next/font/google";
import "./globals.css";

/**
 * Typography Setup - Vietnamese Optimized
 *
 * Using Google Fonts with full Vietnamese support:
 * - Sans: Be Vietnam Pro (body, UI) - excellent Vietnamese diacritics
 * - Serif: Playfair Display (headings, editorial) - elegant, supports Vietnamese
 */

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-be-vietnam-pro",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-playfair-display",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Portfolio Designer — Phong cách Tối giản",
  description:
    "Portfolio demo với phong cách thiết kế tối giản, tinh tế. Sự rõ ràng thay vì hỗn độn, tinh xảo thay vì ồn ào.",
  openGraph: {
    title: "Portfolio Designer — Phong cách Tối giản",
    description:
      "Portfolio demo với phong cách thiết kế tối giản, tinh tế. Sự rõ ràng thay vì hỗn độn.",
    type: "website",
    locale: "vi_VN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Designer — Phong cách Tối giản",
    description: "Portfolio demo với phong cách thiết kế tối giản, tinh tế.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${beVietnamPro.variable} ${playfairDisplay.variable}`}
      suppressHydrationWarning
    >
      <body
        className="bg-[#FCFCFA] text-[#0F0F0F] antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

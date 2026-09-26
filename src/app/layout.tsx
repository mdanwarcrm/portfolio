import type { Metadata } from "next";
import { Geist_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: "Dindi Narendra Kumar Madala — Entrepreneur & Technology Professional", template: "%s | DNKM Portfolio" },
  description: "Entrepreneur and technology professional with experience across network engineering, cyber security, business operations and digital product development.",
  openGraph: {
    title: "Dindi Narendra Kumar Madala — Entrepreneur & Technology Professional",
    description: "Entrepreneur and technology professional with experience across network engineering, cyber security, business operations and digital product development.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistMono.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}

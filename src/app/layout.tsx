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
  title: { default: "Dindi Narendra Kumar Madala — Entrepreneur & Technologist", template: "%s | DNKM Portfolio" },
  description: "The interactive portfolio of Dindi Narendra Kumar Madala—entrepreneur, technologist, system builder, and creator of practical digital products.",
  openGraph: {
    title: "Dindi Narendra Kumar Madala — Entrepreneur & Technologist",
    description: "Building systems for real problems across networks, cyber security, operations, and digital products.",
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

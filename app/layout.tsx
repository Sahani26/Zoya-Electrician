import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import "./card-images.css";
import "./mobile-controls.css";
import "./background-shapes.css";
import { homeMetadata } from "@/lib/seo";

const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"] });
const serif = Playfair_Display({ variable: "--font-serif", subsets: ["latin"] });
export const metadata: Metadata = { ...homeMetadata, icons: { icon: "/favicon.svg", shortcut: "/favicon.svg", apple: "/favicon.svg" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en-IN"><body className={`${sans.variable} ${serif.variable}`}>{children}</body></html>; }

import type { Metadata } from "next";
import type { Page } from "./content";

const site = "https://www.zoyaelectrician.in";
export const pageMetadata = (page: Page): Metadata => ({
  title: `${page.title} | Zoya Electrician`, description: page.meta, keywords: page.keywords, alternates: { canonical: `${site}${page.slug}` }, robots: { index: true, follow: true },
  openGraph: { title: page.title, description: page.meta, url: `${site}${page.slug}`, siteName: "Zoya Electrician", locale: "en_IN", type: page.kind === "blog" ? "article" : "website", images: [{ url: `${site}/og.png`, width: 1728, height: 912, alt: "Zoya Electrician, Surat" }] },
  twitter: { card: "summary_large_image", title: page.title, description: page.meta, images: [`${site}/og.png`] },
});

export const homeMetadata: Metadata = pageMetadata({ kind: "main", slug: "/", title: "Electrician in Surat", meta: "Zoya Electrician provides careful, premium electrical repairs, installations, lighting and safety service across Surat, Gujarat.", eyebrow: "", summary: "", body: [], keywords: ["electrician Surat", "electrician near me Surat", "electrical services Surat"], icon: "ZE" });

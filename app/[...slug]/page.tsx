import { notFound } from "next/navigation";
import { SitePage } from "@/components/SitePage";
import { allPaths, getPage } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return allPaths.map((path) => ({ slug: path.split("/") }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }) {
  return params.then(({ slug }) => {
    const page = getPage(`/${slug.join("/")}`);
    return page ? pageMetadata(page) : {};
  });
}

export default async function CatchAllPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const page = getPage(`/${slug.join("/")}`);
  if (!page) notFound();
  return <SitePage page={page} />;
}

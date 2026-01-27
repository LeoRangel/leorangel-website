import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { print } from "graphql/language/printer";
import { setSeoData } from "@/utils/seoData";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { ContentInfoQuery } from "@queries/general/ContentInfoQuery";
import { ContentNode } from "@/gql/graphql";
import { nextSlugToWpSlug } from "@/utils/nextSlugToWpSlug";
import { SeoQuery } from "@queries/general/SeoQuery";
import PageTemplate from "@templates/Page/PageTemplate";
import PostTemplate from "@templates/Post/PostTemplate";
import HomePageTemplate from "@templates/HomePage/HomePageTemplate";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = nextSlugToWpSlug(params?.slug || "");
  const isPreview = slug?.includes("preview");
  const isHomePage = slug === "/";

  const { contentNode } = await fetchGraphQL<{
    contentNode: ContentNode | null;
  }>(print(SeoQuery), {
    slug: isPreview ? slug?.split("preview/")[1] : slug,
    idType: isPreview ? "DATABASE_ID" : "URI",
  });

  if (!contentNode && !isHomePage) {
    return notFound();
  }

  const metadata = setSeoData({ seo: contentNode?.seo });

  return {
    ...metadata,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/${slug}`,
    },
  } as Metadata;
}

export function generateStaticParams() {
  return [];
}

export default async function Page({ params }: Props) {
  const slug = nextSlugToWpSlug(params?.slug);
  const isPreview = slug?.includes("preview");
  const isHomePage = slug === "/";
  const { contentNode } = await fetchGraphQL<{
    contentNode: ContentNode | null;
  }>(print(ContentInfoQuery), {
    slug: isPreview ? slug?.split("preview/")[1] : slug,
    idType: isPreview ? "DATABASE_ID" : "URI",
  });

  if (!contentNode && !isHomePage) return notFound();

  if (isHomePage) return <HomePageTemplate node={contentNode} />;

  switch (contentNode?.contentTypeName) {
    case "page":
      return <PageTemplate node={contentNode} />;
    case "post":
      return <PostTemplate node={contentNode} />;
    default:
      return notFound();
  }
}

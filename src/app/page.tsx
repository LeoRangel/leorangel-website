import type { Metadata } from "next";
import { print } from "graphql/language/printer";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { ContentInfoQuery } from "@queries/general/ContentInfoQuery";
import { SeoQuery } from "@queries/general/SeoQuery";
import { setSeoData } from "@/utils/seoData";
import HomePageTemplate from "@templates/HomePage/HomePageTemplate";

export async function generateMetadata(): Promise<Metadata> {
  const { contentNode } = await fetchGraphQL<{ contentNode: any }>(
    print(SeoQuery),
    {
      slug: "/abv",
      idType: "URI",
    }
  );

  const metadata = setSeoData({ seo: contentNode?.seo });

  return {
    ...metadata,
    alternates: {
      canonical: process.env.NEXT_PUBLIC_BASE_URL,
    },
  };
}

export default async function HomePage() {
  const { contentNode } = await fetchGraphQL<{ contentNode: any }>(
    print(ContentInfoQuery),
    {
      slug: "/abc",
      idType: "URI",
    }
  );

  return <HomePageTemplate node={contentNode} />;
}

import type { Metadata } from "next";
import { print } from "graphql/language/printer";

import { setSeoData } from "@/utils/seoData";

import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { ContentNode, Page, PostTypeSeo } from "@/gql/graphql";
import { PageQuery } from "@templates/Page/PageQuery";
import { SeoQuery } from "@/queries/general/SeoQuery";

const notFoundPageWordPressId = 16;

export async function generateMetadata(): Promise<Metadata> {
  const { contentNode } = await fetchGraphQL<{ contentNode: ContentNode }>(
    print(SeoQuery),
    { slug: notFoundPageWordPressId, idType: "DATABASE_ID" }
  );

  let metadata;

  if (contentNode?.seo) {
    metadata = setSeoData({ seo: contentNode?.seo });
  } else {
    // TODO: Add default seo tags
    const defaultSeoData: PostTypeSeo = {};
    metadata = setSeoData({ seo: defaultSeoData });
  }

  return {
    ...metadata,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/404-not-found/`,
    },
  } as Metadata;
}

export default async function NotFound() {
  const { page } = await fetchGraphQL<{ page: Page }>(print(PageQuery), {
    id: notFoundPageWordPressId,
  });

  if (page?.content) {
    return <div dangerouslySetInnerHTML={{ __html: page?.content || " " }} />;
  }

  // TODO: Add page not found default template

  return (
    <div>
      <h1>Page Not Found...</h1>
    </div>
  );
}

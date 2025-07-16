import type { Metadata } from "next";
import { print } from "graphql/language/printer";
import { setSeoData } from "@/utils/seoData";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { ContentNode, Page, PostTypeSeo } from "@/gql/graphql";
import { PageQuery } from "@queries/page/PageQuery";
import { SeoQuery } from "@queries/general/SeoQuery";
import { Heading } from "@atoms/Heading";
import { Container } from "@/components/atoms/Container";

const notFoundPageWordPressId = 16;

export async function generateMetadata(): Promise<Metadata> {
  const { contentNode } = await fetchGraphQL<{
    contentNode: ContentNode | null;
  }>(print(SeoQuery), { slug: notFoundPageWordPressId, idType: "DATABASE_ID" });

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
  const { page } = await fetchGraphQL<{ page: Page | null }>(print(PageQuery), {
    id: notFoundPageWordPressId,
  });

  // TODO: Add page not found default template

  return (
    <div className="w-full my-20 flex justify-center align-middle text-center">
      <Container>
        {page?.content ? (
          <div dangerouslySetInnerHTML={{ __html: page?.content || " " }} />
        ) : (
          <Heading as="h1" unstyled>
            Page Not Found...
          </Heading>
        )}
      </Container>
    </div>
  );
}

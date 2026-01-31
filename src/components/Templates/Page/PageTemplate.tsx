import { print } from "graphql/language/printer";
import { ContentNode, Page } from "@/gql/graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { PageQuery } from "@queries/page/PageQuery";
import { Container } from "@atoms/Container";
import { Heading } from "@atoms/Heading";
import { Separator } from "@ui/separator";
import { Aside } from "@organisms/Aside/Aside";

interface TemplateProps {
  node: ContentNode;
}

export default async function PageTemplate({ node }: TemplateProps) {
  const { page } = await fetchGraphQL<{ page: Page | null }>(print(PageQuery), {
    id: node?.databaseId,
  });

  if (!page) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Container variant="fullMobileConstrainedPadded">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[320px_1fr_auto]">
          <Aside className="mt-4 md:mt-6 lg:mt-12 lg:sticky lg:top-12 h-fit" />

          <main className="space-y-12 lg:space-y-24 pb-12 lg:py-12">
            <header className="mb-12">
              <Heading as="h1" unstyled>
                {page?.title}
              </Heading>
              <Separator />
            </header>

            <section>
              <div dangerouslySetInnerHTML={{ __html: page.content || "" }} />
            </section>
          </main>
        </div>
      </Container>
    </div>
  );
}

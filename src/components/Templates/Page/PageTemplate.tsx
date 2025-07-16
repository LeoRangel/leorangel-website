import { print } from "graphql/language/printer";
import { ContentNode, Page } from "@/gql/graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { PageQuery } from "./PageQuery";
import { Container } from "@atoms/Container";
import { Heading } from "@atoms/Heading";
import { Separator } from "@ui/separator";

interface TemplateProps {
  node: ContentNode;
}

export default async function PageTemplate({ node }: TemplateProps) {
  const { page } = await fetchGraphQL<{ page: Page }>(print(PageQuery), {
    id: node.databaseId,
  });

  return (
    <Container variant="narrowConstrainedPadded">
      <section className="mt-16">
        <Heading as="h1" unstyled>
          {page?.title}
        </Heading>
      </section>
      <Separator />
      <section className="my-16">
        <div dangerouslySetInnerHTML={{ __html: page.content || "" }} />
      </section>
    </Container>
  );
}

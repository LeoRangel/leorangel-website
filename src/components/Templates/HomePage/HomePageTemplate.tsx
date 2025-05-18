import { print } from "graphql/language/printer";
import { ContentNode, Page } from "@/gql/graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { HomePageQuery } from "./HomePageQuery";

import { Container } from "@/components/Globals/Container/Container";
import { HeroHome } from "./components/HeroHome/HeroHome";

interface TemplateProps {
  node: ContentNode;
}

export default async function HomePageTemplate({ node }: TemplateProps) {
  const { page } = await fetchGraphQL<{ page: Page }>(print(HomePageQuery), {
    id: node.databaseId,
  });

  return (
    <Container variant="narrowConstrainedPadded">
      <HeroHome />

      <div dangerouslySetInnerHTML={{ __html: page?.content || "" }} />
    </Container>
  );
}

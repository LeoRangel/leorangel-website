import { print } from "graphql/language/printer";
import { ContentNode, Page } from "@/gql/graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { HomePageQuery } from "./HomePageQuery";

import { Container } from "@atoms/Container";
import { HeroHome } from "./components/HeroHome";
import { LatestPostsHome } from "./components/LatestPostsHome/LatestPostsHome";
import { Separator } from "@ui/separator";
import { PinnedProjects } from "./components/PinnedProjects/PinnedProjects";

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
      <Separator />

      <LatestPostsHome />
      <Separator />

      <PinnedProjects />
      <Separator />

      <section className="py-18">
        <div dangerouslySetInnerHTML={{ __html: page?.content || "" }} />
      </section>
    </Container>
  );
}

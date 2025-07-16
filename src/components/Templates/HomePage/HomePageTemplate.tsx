import { print } from "graphql/language/printer";
import { ContentNode, Page } from "@/gql/graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { Container } from "@atoms/Container";
import { Separator } from "@ui/separator";
import { HeroHome } from "./components/HeroHome";
import { LatestPostsHome } from "./components/LatestPostsHome";
import { PinnedProjects } from "./components/PinnedProjects";
import { HomePageQuery } from "@queries/page/HomePageQuery";

interface TemplateProps {
  node: ContentNode;
}

export default async function HomePageTemplate({ node }: TemplateProps) {
  const { page } = await fetchGraphQL<{ page: Page | null }>(
    print(HomePageQuery),
    {
      id: node?.databaseId,
    }
  );

  return (
    <Container variant="narrowConstrainedPadded">
      <HeroHome />
      <Separator />

      <PinnedProjects />
      <Separator />

      <LatestPostsHome />

      {page && (
        <section className="py-18">
          <div dangerouslySetInnerHTML={{ __html: page?.content || "" }} />
        </section>
      )}
    </Container>
  );
}

import { print } from "graphql/language/printer";
import { ContentNode, Page } from "@/gql/graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { HomePageQuery } from "./HomePageQuery";

interface TemplateProps {
  node: ContentNode;
}

export default async function HomePageTemplate({ node }: TemplateProps) {
  const { page } = await fetchGraphQL<{ page: Page }>(print(HomePageQuery), {
    id: node.databaseId,
  });

  return (
    <div>
      <h1>HomePage</h1>
      <div dangerouslySetInnerHTML={{ __html: page?.content || "" }} />
    </div>
  );
}

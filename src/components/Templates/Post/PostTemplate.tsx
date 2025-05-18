import { print } from "graphql/language/printer";

import { ContentNode, Post } from "@/gql/graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";

import styles from "./PostTemplate.module.css";
import { PostQuery } from "./PostQuery";
import { PostHeader } from "./components/PostHeader/PostHeader";
import { Container } from "@/components/Globals/Container/Container";

interface TemplateProps {
  node: ContentNode;
}

export default async function PostTemplate({ node }: TemplateProps) {
  const { post } = await fetchGraphQL<{ post: Post }>(print(PostQuery), {
    id: node.databaseId,
  });

  return (
    <div className={styles.post}>
      <PostHeader
        title={post.title || ""}
        author={{
          name: post.author?.node.name || "",
          avatarUrl: post.author?.node.avatar?.url || "",
        }}
        date={post.date || ""}
        readTime="5 min"
      />

      <Container variant="narrowConstrainedPadded">
        <div dangerouslySetInnerHTML={{ __html: post.content || "" }} />
      </Container>
    </div>
  );
}

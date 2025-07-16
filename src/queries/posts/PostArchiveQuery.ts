import gql from "graphql-tag";

export const PostArchiveQuery = gql`
  query PostArchiveQuery($first: Int!, $after: String) {
    posts(first: $first, after: $after) {
      nodes {
        id
        title
        slug
        uri
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

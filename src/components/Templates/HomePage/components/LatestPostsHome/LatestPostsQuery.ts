import gql from "graphql-tag";

const POSTS_TO_SHOW_QTD = 6;

export const LatestPostsQuery = gql`
  query LatestPostsQuery($postQtd: Int = ${POSTS_TO_SHOW_QTD}) {
    posts(first: $postQtd, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        id
        title
        date
        uri
        excerpt
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;

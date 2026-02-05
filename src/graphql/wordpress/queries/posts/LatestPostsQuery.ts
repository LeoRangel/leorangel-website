import gql from "graphql-tag";

const POSTS_TO_SHOW_QTD = 6;

export const LatestPostsQuery = gql`
  query LatestPostsQuery($postQtd: Int = ${POSTS_TO_SHOW_QTD}) {
    posts(first: $postQtd, where: { orderby: { field: DATE, order: DESC } }) {
    nodes {
      id
      title
      uri
      excerpt
      date
      modified
      commentCount
      categories {
        nodes {
          id
          name
          slug
        }
      }
      tags {
        nodes {
          id
          name
          slug
        }
      }
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

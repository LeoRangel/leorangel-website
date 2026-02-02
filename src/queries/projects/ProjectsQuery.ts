import gql from "graphql-tag";

const PROJECTS_TO_SHOW_QTD = 6;

export const ProjectsQuery = gql`
  query ProjectsQuery($projectQtd: Int = 6) {
    projects(
      first: $projectQtd
      where: { orderby: { field: DATE, order: DESC } }
    ) {
      nodes {
        id
        title
        projects {
          link
          description
          technologies
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

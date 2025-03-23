import gql from "graphql-tag";

export const HomePageQuery = gql`
  query HomePageQuery($id: ID!, $preview: Boolean = false) {
    page(id: $id, idType: DATABASE_ID, asPreview: $preview) {
      content
    }
  }
`;

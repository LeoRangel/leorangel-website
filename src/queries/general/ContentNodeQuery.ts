import gql from "graphql-tag";

export const ContentNodeQuery = gql`
  query GetContentNode($id: ID!) {
    contentNode(id: $id, idType: DATABASE_ID) {
      uri
      status
      databaseId
    }
  }
`;

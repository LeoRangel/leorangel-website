import gql from "graphql-tag";

export const MenuQuery = gql`
  query MenuQuery {
    menuItems(where: { location: PRIMARY_MENU }) {
      nodes {
        uri
        target
        label
      }
    }
  }
`;

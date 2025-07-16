import { print } from "graphql/language/printer";
import gql from "graphql-tag";

import { MenuItem, RootQueryToMenuItemConnection } from "@/gql/graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import NavigationClient from "./NavigationClient";
import { defaultNavigationMenu } from "@/data/navigation";
import { Container } from "@atoms/Container";

async function getData(): Promise<MenuItem[]> {
  const menuQuery = gql`
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

  try {
    const { menuItems } = await fetchGraphQL<{
      menuItems: RootQueryToMenuItemConnection;
    }>(print(menuQuery));

    if (!menuItems?.nodes?.length) {
      console.info(
        "Nenhum item de menu encontrado na API. Usando menu default."
      );
      return defaultNavigationMenu.nodes as MenuItem[];
    }

    return menuItems.nodes;
  } catch (error) {
    console.info("Erro ao buscar menu na API. Usando menu default.");
    console.info(error);
    return defaultNavigationMenu.nodes as MenuItem[];
  }
}

export default async function Navigation() {
  const menuItems = await getData();

  return (
    <nav
      className="w-full py-4 border-b"
      role="navigation"
      itemScope
      itemType="http://schema.org/SiteNavigationElement"
    >
      <Container variant="constrainedPadded">
        <NavigationClient menuItems={menuItems} />
      </Container>
    </nav>
  );
}

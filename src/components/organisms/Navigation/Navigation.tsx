import { print } from "graphql/language/printer";

import { MenuItem, RootQueryToMenuItemConnection } from "@/gql/graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import NavigationClient from "./NavigationClient";
import { defaultNavigationMenu } from "@/data/navigation";
import { Container } from "@atoms/Container";
import { MenuQuery } from "@queries/menu/MenuQuery";

async function getData(): Promise<MenuItem[]> {
  try {
    const { menuItems } = await fetchGraphQL<{
      menuItems: RootQueryToMenuItemConnection;
    }>(print(MenuQuery));

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

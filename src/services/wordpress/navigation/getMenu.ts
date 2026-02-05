import { print } from "graphql";
import { defaultNavigationMenu } from "@/data/navigation";
import type { MenuItem, RootQueryToMenuItemConnection } from "@/gql/graphql";
import { MenuQuery } from "@graphql/wordpress/queries/menu/MenuQuery";
import { fetchGraphQL } from "@/utils/fetchGraphQL";

interface GetMenuOptions {
  extraItems?: MenuItem[];
}

export async function getMenu(
  options: GetMenuOptions = {},
): Promise<MenuItem[]> {
  const { extraItems = [] } = options;

  try {
    const { menuItems } = await fetchGraphQL<{
      menuItems: RootQueryToMenuItemConnection;
    }>(print(MenuQuery));

    const baseMenu = menuItems?.nodes?.length
      ? (menuItems.nodes as MenuItem[])
      : (defaultNavigationMenu.nodes as MenuItem[]);

    return [...baseMenu, ...extraItems];
  } catch (error) {
    console.info("Error fetching menu:", error);
    console.info("Using default navigation menu.");

    return [...(defaultNavigationMenu.nodes as MenuItem[]), ...extraItems];
  }
}

import { print } from "graphql/language/printer";
import {
  ContentNode,
  MenuItem,
  Page,
  RootQueryToMenuItemConnection,
} from "@/gql/graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { Container } from "@atoms/Container";
import { LatestPostsSection } from "./components/LatestPostsSection";
import { PinnedProjectsSection } from "./components/PinnedProjectsSection";
import { HomePageQuery } from "@queries/page/HomePageQuery";
import { AboutSection } from "./components/AboutSection";
import { SectionNav } from "./components/SectionNav";
import { ContactSection } from "./components/ContactSection";
import { SECTIONS } from "./sections";
import { MenuQuery } from "@queries/menu/MenuQuery";
import { defaultNavigationMenu } from "@/data/navigation";
import { Aside } from "@organisms/Aside/Aside";

interface TemplateProps {
  node: ContentNode | null;
}

const homePageNavMenu = [
  { uri: "#blog", target: null, label: "#blog" },
  { uri: "#projetos", target: null, label: "#projetos" },
  { uri: "#sobre", target: null, label: "#sobre" },
  { uri: "#contato", target: null, label: "#contato" },
];

async function getData(): Promise<MenuItem[]> {
  try {
    const { menuItems } = await fetchGraphQL<{
      menuItems: RootQueryToMenuItemConnection;
    }>(print(MenuQuery));

    if (!menuItems?.nodes?.length) {
      console.info("No menu items found. Using default menu.");

      const menuItemsDefault = [
        ...defaultNavigationMenu.nodes,
        ...homePageNavMenu,
      ] as MenuItem[];

      return menuItemsDefault;
    }

    const menuItemsDynamic = [
      ...menuItems.nodes,
      ...homePageNavMenu,
    ] as MenuItem[];

    return menuItemsDynamic;
  } catch (error) {
    console.info("Error fetching menu: ", error);
    console.info("Using default menu.");

    const menuItemsDefault = [
      ...defaultNavigationMenu.nodes,
      ...homePageNavMenu,
    ] as MenuItem[];

    return menuItemsDefault;
  }
}

export default async function HomePageTemplate({ node }: TemplateProps) {
  const { page } = await fetchGraphQL<{ page: Page | null }>(
    print(HomePageQuery),
    { id: node?.databaseId },
  );
  const menuItems = await getData();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Container variant="fullMobileConstrainedPadded">
        <div className="grid grid-cols-1 gap-12 py-12 lg:grid-cols-[320px_1fr_auto]">
          <Aside menuItems={menuItems} className="md:sticky md:top-12 h-fit" />

          <main className="space-y-24">
            <h1 className="sr-only">
              Artigos sobre front-end e engenharia web
            </h1>

            <LatestPostsSection
              id={SECTIONS.blog.id}
              className="scroll-mt-12"
            />

            <PinnedProjectsSection
              id={SECTIONS.projetos.id}
              className="scroll-mt-12"
            />

            <AboutSection id={SECTIONS.sobre.id} className="scroll-mt-12" />

            <ContactSection id={SECTIONS.contato.id} className="scroll-mt-12" />

            {page && (
              <section className="scroll-mt-12">
                <div dangerouslySetInnerHTML={{ __html: page.content || "" }} />
              </section>
            )}
          </main>

          <SectionNav sections={Object.values(SECTIONS)} />
        </div>
      </Container>
    </div>
  );
}

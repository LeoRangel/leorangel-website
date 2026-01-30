import { print } from "graphql/language/printer";
import { ContentNode, Page } from "@/gql/graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { Container } from "@atoms/Container";
import { LatestPostsHome } from "./components/LatestPostsHome";
import { PinnedProjects } from "./components/PinnedProjects";
import { HomePageQuery } from "@queries/page/HomePageQuery";
import { AboutSection } from "./components/AboutSection";
import { ProfileCard } from "./components/ProfileCard";
import { SectionTrail } from "./components/SectionTrail";
import { ContactSection } from "./components/ContactSection";
import { SECTIONS } from "./sections";

interface TemplateProps {
  node: ContentNode | null;
}

export default async function HomePageTemplate({ node }: TemplateProps) {
  const { page } = await fetchGraphQL<{ page: Page | null }>(
    print(HomePageQuery),
    { id: node?.databaseId },
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Container variant="fullMobileConstrainedPadded">
        <div className="grid grid-cols-1 gap-12 py-12 lg:grid-cols-[320px_1fr_auto]">
          <aside className="md:sticky md:top-12 h-fit">
            <ProfileCard />
          </aside>

          <main className="space-y-24">
            <h1 className="sr-only">
              Artigos sobre front-end e engenharia web
            </h1>

            <LatestPostsHome id={SECTIONS.blog.id} className="scroll-mt-12" />
            <PinnedProjects
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

          <SectionTrail sections={Object.values(SECTIONS)} />
        </div>
      </Container>
    </div>
  );
}

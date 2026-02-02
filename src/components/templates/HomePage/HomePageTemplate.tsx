import { print } from "graphql/language/printer";
import { ContentNode, Page } from "@/gql/graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { Container } from "@atoms/Container";
import { LatestPostsSection } from "./components/LatestPostsSection";
import { PinnedProjectsSection } from "./components/PinnedProjectsSection";
import { HomePageQuery } from "@queries/page/HomePageQuery";
import { AboutSection } from "./components/AboutSection";
import { SectionNav } from "./components/SectionNav";
import { ContactSection } from "./components/ContactSection";
import { Aside } from "@organisms/Aside/Aside";
import { SECTIONS } from "./sections";
import { homeContent } from "@/data/pages-content/home";

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
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[320px_1fr_auto]">
          <Aside
            isHomePage
            className="mt-4 md:mt-6 lg:mt-12 lg:sticky lg:top-12 h-fit"
          />

          <main className="space-y-12 lg:space-y-24 pb-12 lg:py-12">
            <h1 className="sr-only">{homeContent.pageTitle}</h1>

            <LatestPostsSection
              id={SECTIONS.blog.id}
              className="scroll-mt-20 lg:scroll-mt-12"
            />

            <PinnedProjectsSection
              id={SECTIONS.projetos.id}
              className="scroll-mt-20 lg:scroll-mt-12"
            />

            <AboutSection
              id={SECTIONS.sobre.id}
              className="scroll-mt-20 lg:scroll-mt-12"
            />

            <ContactSection
              id={SECTIONS.contato.id}
              className="scroll-mt-20 lg:scroll-mt-12"
            />

            {page && (
              <section className="scroll-mt-20 lg:scroll-mt-12">
                <div dangerouslySetInnerHTML={{ __html: page.content || "" }} />
              </section>
            )}
          </main>

          <SectionNav
            sections={Object.values(SECTIONS)}
            className="hidden lg:flex"
          />
        </div>
      </Container>
    </div>
  );
}

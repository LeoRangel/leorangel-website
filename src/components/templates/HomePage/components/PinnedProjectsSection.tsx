import { Heading } from "@atoms/Heading";
import { Text } from "@atoms/Text";
import { ProjectList } from "@organisms/ProjectList";
import { homeContent } from "@/data/pages-content/home";
import { getPinnedProjects } from "@services/github/projects/getPinnedProjects";

interface PinnedProjectsSectionProps {
  id?: string;
  className?: string;
}

const PinnedProjectsSection = async ({
  id,
  className,
}: PinnedProjectsSectionProps) => {
  const projects = await getPinnedProjects();

  const hasProjects = projects.length > 0;

  return (
    <section id={id} className={className}>
      <div>
        <Heading
          as="h2"
          weight="extrabold"
          className="text-1xl md:text-4xl mb-4"
        >
          {homeContent.sections.featuredProjects.title}
        </Heading>

        <Text as="p" variant="muted">
          {homeContent.sections.featuredProjects.description}
        </Text>
      </div>

      <div className="w-full grid md:grid-cols-2 gap-4 mb-8 mt-12">
        {hasProjects ? (
          <ProjectList projects={projects} />
        ) : (
          <Text variant="muted">Em breve...</Text>
        )}
      </div>
    </section>
  );
};

export { PinnedProjectsSection };

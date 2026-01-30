import { print } from "graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { Project, ProjectConnection } from "@/gql/graphql";
import { ProjectsQuery } from "@queries/projects/ProjectsQuery";
import { Heading } from "@atoms/Heading";
import { Text } from "@atoms/Text";
import { ProjectList } from "@organisms/ProjectList";

async function getData(): Promise<Project[]> {
  try {
    const { projects } = await fetchGraphQL<{
      projects: ProjectConnection | null;
    }>(print(ProjectsQuery));

    return projects?.nodes || [];
  } catch (error) {
    console.info("Error searching for projects.");
    console.info(error);
    return [];
  }
}

interface PinnedProjectsProps {
  id?: string;
  className?: string;
  heading?: string;
  description?: string;
}

const PinnedProjects = async ({
  id,
  className,
  heading = "Projetos em destaque",
  description = "Alguns projetos open source que estou trabalhando",
}: PinnedProjectsProps) => {
  const projects = await getData();

  if (!projects || projects?.length < 1) null;

  return (
    <section id={id} className={className}>
      <div>
        <Heading
          as="h2"
          weight="extrabold"
          className="text-1xl md:text-4xl mb-4"
        >
          {heading}
        </Heading>

        <Text as="p" variant="muted">
          {description}
        </Text>
      </div>

      <div className="w-full grid md:grid-cols-2 gap-4 mb-8 mt-12">
        <ProjectList projects={projects} />
      </div>
    </section>
  );
};

export { PinnedProjects };

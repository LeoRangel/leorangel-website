import { print } from "graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { Project, ProjectConnection } from "@/gql/graphql";
import { ProjectsQuery } from "@queries/projects/ProjectsQuery";
import { Heading } from "@atoms/Heading";
import { Container } from "@atoms/Container";
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
  heading?: string;
  description?: string;
}

const PinnedProjects = async ({
  heading = "Projetos em destaque",
  description = "Alguns projetos open source que estou trabalhando",
}: PinnedProjectsProps) => {
  const projects = await getData();

  if (!projects || projects?.length < 1) <></>;

  return (
    <section id="blog" className="py-20 px-6">
      <Container variant="narrowConstrainedPadded">
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

        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 mt-12">
          <ProjectList projects={projects} />
        </div>
      </Container>
    </section>
  );
};

export { PinnedProjects };

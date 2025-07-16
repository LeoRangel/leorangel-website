import { print } from "graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { Project, ProjectConnection } from "@/gql/graphql";
import { ProjectsQuery } from "./ProjectsQuery";
import { ProjectCard } from "@molecules/ProjectCard";
import { Heading } from "@atoms/Heading";

async function getData(): Promise<Project[]> {
  try {
    const { projects } = await fetchGraphQL<{ projects: ProjectConnection }>(
      print(ProjectsQuery)
    );

    return projects?.nodes || [];
  } catch (error) {
    console.info("Erro ao buscar projects na API.");
    console.info(error);
    return [];
  }
}

const PinnedProjects = async () => {
  const projects = await getData();

  if (!projects || projects?.length < 1) <></>;

  const projectsCards = () => (
    <>
      {projects?.map((project) => {
        return (
          <ProjectCard
            key={`project-card-${project.id}`}
            title={project?.title || ""}
            image={{
              url: project?.featuredImage?.node?.sourceUrl || "",
              alt: project?.featuredImage?.node?.altText || "",
            }}
            link={project?.projects?.link || ""}
            description={project?.projects?.description || ""}
          />
        );
      })}
    </>
  );

  return (
    <section className="py-20">
      <div className="container">
        <Heading as="h2">Pinned Projects</Heading>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 overflow-visible">
          {projectsCards()}
        </div>
      </div>
    </section>
  );
};

export { PinnedProjects };

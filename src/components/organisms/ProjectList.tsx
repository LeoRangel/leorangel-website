import { Project } from "@/gql/graphql";
import { ProjectCard } from "@molecules/ProjectCard";

const ProjectList = ({ projects }: { projects: Project[] }) => {
  if (!projects?.length) return null;

  return (
    <>
      {projects.map((project) => (
        <ProjectCard
          key={`project-card-${project.id}`}
          id={project.id}
          title={project?.title || ""}
          link={project?.projects?.link || ""}
          description={project?.projects?.description || ""}
          technologies={project?.projects?.technologies || []}
        />
      ))}
    </>
  );
};

export { ProjectList };

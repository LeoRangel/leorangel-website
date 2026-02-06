import { Project } from "@/types/Project";
import { ProjectCard } from "@molecules/ProjectCard/ProjectCard";

const ProjectList = ({ projects }: { projects: Project[] }) => {
  if (!projects?.length) return null;

  return (
    <>
      {projects.map((project) => (
        <ProjectCard
          key={`project-card-${project.id}`}
          id={project.id}
          title={project?.name || ""}
          link={project?.url || ""}
          description={project?.shortDescriptionHTML || ""}
          topics={project?.topics || []}
        />
      ))}
    </>
  );
};

export { ProjectList };

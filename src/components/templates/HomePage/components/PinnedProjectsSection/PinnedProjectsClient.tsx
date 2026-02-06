"use client";

import { useEffect, useState } from "react";
import { Project } from "@/types/Project";
import { ProjectList } from "@organisms/ProjectList";
import { Text } from "@atoms/Text";
import { ProjectCardSkeleton } from "@molecules/ProjectCard/ProjectCardSkeleton";

const PinnedProjectsClient = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    fetch("/api/github/projects")
      .then((res) => res.json())
      .then((data: Project[]) => {
        if (mounted) {
          setProjects(data);
        }
      })
      .finally(() => {
        if (mounted) {
          setLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return (
      <>
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
      </>
    );
  }

  if (!projects.length) {
    return <Text variant="muted">Em breve...</Text>;
  }

  return <ProjectList projects={projects} />;
};

export { PinnedProjectsClient };

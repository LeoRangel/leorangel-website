import { Heading } from "@atoms/Heading";
import { Text } from "@atoms/Text";
import { homeContent } from "@/data/pages-content/home";
import { PinnedProjectsClient } from "./PinnedProjectsClient";

interface PinnedProjectsSectionProps {
  id?: string;
  className?: string;
}

const PinnedProjectsSection = async ({
  id,
  className,
}: PinnedProjectsSectionProps) => {
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
        <PinnedProjectsClient />
      </div>
    </section>
  );
};

export { PinnedProjectsSection };

import { homeContent } from "@/data/pages-content/home";
import { profileInfo } from "@/data/profileInfo";
import { Heading } from "@atoms/Heading";
import { Text } from "@atoms/Text";
import { Badge } from "@ui/badge";

interface AboutSectionProps {
  id?: string;
  className?: string;
}

const AboutSection = ({ id, className }: AboutSectionProps) => {
  return (
    <section id={id} className={className}>
      <div>
        <Heading
          as="h2"
          weight="extrabold"
          className="text-1xl md:text-4xl mb-4"
        >
          {homeContent.sections.about.title}
        </Heading>

        <Text as="p" variant="muted">
          {homeContent.sections.about.description}
        </Text>
      </div>

      <Text variant="muted" size="base" className="leading-relaxed">
        {profileInfo?.bio?.long}
      </Text>

      {profileInfo?.skills?.primary?.length > 0 && (
        <div className="mt-8">
          <Heading as="h3" weight="bold" className="text-1xl mb-4">
            {homeContent.sections.about.skills.primary.title}
          </Heading>
          <div className="flex flex-wrap gap-3">
            <ul
              className="not-prose list-none flex items-center flex-wrap gap-2 m-0 p-0"
              aria-label="Principais habilidades em tecnoligas e ferramentas"
            >
              {profileInfo?.skills?.primary?.map((skill, index) => (
                <li className="flex" key={`about-skill-item-${index}`}>
                  <Badge variant="secondary">{skill}</Badge>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {profileInfo?.skills?.secondary?.length > 0 && (
        <div className="mt-8">
          <Heading as="h3" weight="bold" className="text-1xl mb-4">
            {homeContent.sections.about.skills.secondary.title}
          </Heading>
          <div className="flex flex-wrap gap-3">
            <ul
              className="not-prose list-none flex items-center flex-wrap gap-2 m-0 p-0"
              aria-label="Outras habilidades"
            >
              {profileInfo?.skills?.secondary?.map((skill, index) => (
                <li className="flex" key={`about-skill-item-${index}`}>
                  <Badge variant="secondary">{skill}</Badge>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export { AboutSection };

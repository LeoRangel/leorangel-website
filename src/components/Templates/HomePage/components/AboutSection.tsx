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
          About Me
        </Heading>

        <Text as="p" variant="muted">
          Algumas infos sobre mim
        </Text>
      </div>

      <Text variant="muted" size="sm" className="leading-relaxed">
        {profileInfo?.bio?.long}
      </Text>

      {profileInfo?.stacks?.full?.length > 0 && (
        <div className="mt-8">
          <Heading as="h3" weight="extrabold" className="text-1xl mb-4">
            Tech Stack
          </Heading>
          <div className="flex flex-wrap gap-3">
            <ul
              className="not-prose list-none flex items-center flex-wrap gap-2 m-0 p-0"
              aria-label="Minhas habilidades"
            >
              {profileInfo?.stacks?.full?.map((skill, index) => (
                <li className="flex" key={`about-skill-item-${index}`}>
                  <Badge variant="secondary">
                    <span className="sr-only">Habilidades:</span> {skill}
                  </Badge>
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

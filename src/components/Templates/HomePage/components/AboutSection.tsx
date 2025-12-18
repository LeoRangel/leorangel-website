import { Heading } from "@atoms/Heading";
import { Text } from "@atoms/Text";

interface AboutSectionProps {
  heading?: string;
  description?: string;
}

const AboutSection = ({
  heading = "About Me",
  description = "I'm specialized in building modern, scalable and optimized web applications with a focus on performance and user experience. I work mainly with React.js, Next.js, TypeScript and JavaScript, developing responsive, accessible (WCAG) and UX-centric interfaces.",
}: AboutSectionProps) => {
  return (
    <section className="py-20">
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
        <Heading as="h2" unstyled>
          {heading}
        </Heading>
        <Text as="p" variant="muted">
          {description}
        </Text>
      </div>
    </section>
  );
};

export { AboutSection };

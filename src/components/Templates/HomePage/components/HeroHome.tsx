import { SocialBtnList } from "./SocialBtnList";
import { Heading } from "@atoms/Heading";
import { Text } from "@atoms/Text";

interface HeroHomeProps {
  heading?: string;
  description?: string;
}

const HeroHome = ({
  heading = "Hey, I'm Leandro Rangel",
  description = "I usually design and build apps. Welcome to my space!",
}: HeroHomeProps) => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid items-center">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Heading as="h1" unstyled className="text-5xl">
              {heading}
            </Heading>
            <Text as="p" variant="muted">
              {description}
            </Text>
            <SocialBtnList />
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroHome };

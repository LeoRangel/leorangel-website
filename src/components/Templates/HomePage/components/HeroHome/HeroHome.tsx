import { Separator } from "@/components/ui/separator";
import { SocialBtnList } from "../SocialBtnList/SocialBtnList";
import { Heading } from "@/components/Globals/Heading/Heading";
import { Text } from "@/components/Globals/Text/Text";

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

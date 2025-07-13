import { Separator } from "@/components/ui/separator";
import { SocialBtnList } from "../SocialBtnList/SocialBtnList";

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
            <h1 className="mb-4 text-4xl font-bold text-pretty lg:text-5xl">
              {heading}
            </h1>
            <p className="mt-0 mb-8 max-w-xl text-muted-foreground lg:text-xl">
              {description}
            </p>
            <SocialBtnList />
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroHome };

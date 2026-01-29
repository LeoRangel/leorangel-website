import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@ui/card";
import { Heading } from "../atoms/Heading";
import { Maybe } from "@/gql/graphql";
import { LuExternalLink, LuGithub } from "react-icons/lu";
import { Badge } from "@ui/badge";

interface ProjectCardProps {
  id: string;
  title: string;
  link: string;
  description: string;
  technologies: Maybe<Maybe<string>[]>;
  className?: string;
}

const ProjectCard = ({
  id,
  title,
  link,
  description,
  technologies,
  className,
}: ProjectCardProps) => {
  return (
    <article className={className}>
      <Link
        href={link || "#"}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visite a página do projeto ${title}`}
        className="no-underline"
        title={title}
      >
        <Card
          className={`rounded-md overflow-hidden h-full gap-4 group hover:shadow-lg hover:border-highlight transition-all`}
        >
          <CardHeader className="relative w-full overflow-hidden gap-0">
            <div className="flex items-start justify-between">
              <div
                className="
                  flex h-10 w-10 items-center justify-center rounded-lg
                  bg-muted
                  transition-colors
                  group-hover:bg-foreground
                "
              >
                <LuGithub
                  className="
                    h-5 w-5
                    text-muted-foreground
                    transition-colors
                    group-hover:text-background
                  "
                />
              </div>

              <LuExternalLink
                className="
                  h-5 w-5
                  text-muted-foreground
                  transition-colors
                  group-hover:text-black
                  dark:group-hover:text-white
                "
              />
            </div>
          </CardHeader>

          <CardContent className="flex flex-col">
            {title && (
              <CardTitle>
                <Heading
                  as="h3"
                  weight="extrabold"
                  className="text-xl mb-1 group-hover:text-highlight transition-colors"
                >
                  {title}
                </Heading>
              </CardTitle>
            )}

            {description && (
              <CardDescription className="not-prose text-sm leading-relaxed">
                <div
                  dangerouslySetInnerHTML={{ __html: description || "" }}
                  className="line-clamp-2"
                />
              </CardDescription>
            )}
          </CardContent>

          {technologies && technologies?.length > 0 && (
            <CardFooter className="mt-auto">
              <ul
                className="not-prose list-none flex items-center flex-wrap gap-2 m-0 p-0"
                aria-label="Tecnologias do projeto"
              >
                {technologies?.map((item, index) => (
                  <li
                    className="flex"
                    key={`project-${id}-technologies-item-${index}`}
                  >
                    <Badge variant="secondary">
                      <span className="sr-only">Tecnologia:</span> {item}
                    </Badge>
                  </li>
                ))}
              </ul>
            </CardFooter>
          )}
        </Card>
      </Link>
    </article>
  );
};

export { ProjectCard };

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@ui/card";
import { Heading } from "../atoms/Heading";
import { Maybe } from "@/gql/graphql";
import { Text } from "@atoms/Text";
import { LuExternalLink, LuGithub } from "react-icons/lu";

interface ProjectCardProps {
  title: string;
  link: string;
  description: string;
  technologies: Maybe<Maybe<string>[]>;
  className?: string;
}

const ProjectCard = ({
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
          className={`rounded-md overflow-hidden h-full gap-4 group hover:shadow-lg transition-all`}
        >
          <CardHeader className="relative w-full overflow-hidden">
            <div className="flex items-start justify-between">
              <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-gray-900 dark:bg-gray-800 dark:group-hover:bg-gray-100 transition-colors">
                <LuGithub className="w-5 h-5 text-gray-700 group-hover:text-white dark:text-gray-300 dark:group-hover:text-gray-700 transition-colors" />
              </div>
              <LuExternalLink className="w-5 h-5 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-100 transition-colors" />
            </div>
          </CardHeader>

          <CardContent className="flex flex-col gap-2">
            {title && (
              <CardTitle>
                <Heading
                  as="h3"
                  weight="extrabold"
                  className="text-xl mb-2 group-hover:text-[#10B981] transition-colors"
                >
                  {title}
                </Heading>
              </CardTitle>
            )}

            {description && (
              <CardDescription className="not-prose mb-4 text-sm leading-relaxed">
                <div
                  dangerouslySetInnerHTML={{ __html: description || "" }}
                  className="line-clamp-2"
                />
              </CardDescription>
            )}

            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-gray-900 dark:bg-gray-50 rounded-full"></div>
              <Text as="span" variant="muted" size="xs">
                {technologies?.join(", ")}
              </Text>
            </div>
          </CardContent>
        </Card>
      </Link>
    </article>
  );
};

export { ProjectCard };

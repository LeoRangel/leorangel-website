import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@ui/card";
import Image from "next/image";
import { Heading } from "../atoms/Heading";

interface ProjectCardProps {
  title: string;
  image?: {
    url: string;
    alt: string;
  };
  link: string;
  description: string;
  className?: string;
}

const ProjectCard = ({
  title,
  image,
  link,
  description,
  className,
}: ProjectCardProps) => {
  return (
    <article className={`${className || ""} rounded-sm`}>
      <Card
        className={`rounded-sm overflow-hidden h-full ${
          image?.url && "pt-0"
        } gap-4`}
      >
        {image?.url && (
          <CardHeader className="relative w-full h-[150px] bg-muted overflow-hidden">
            <Image
              src={image?.url}
              alt={image?.alt || ""}
              fill
              priority={false}
              loading="lazy"
              objectFit="cover"
              className="not-prose w-full object-cover"
              placeholder="blur"
            />
          </CardHeader>
        )}
        <CardContent className="flex flex-col gap-2">
          {title && (
            <CardTitle>
              <Heading as="h3" unstyled>
                {title}
              </Heading>
            </CardTitle>
          )}
          {description && (
            <CardDescription className="not-prose">
              <div
                dangerouslySetInnerHTML={{ __html: description || "" }}
                className="line-clamp-2"
              />
            </CardDescription>
          )}
          {link && (
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visite a página do projeto ${title}`}
            >
              Ir para github
            </Link>
          )}
        </CardContent>
      </Card>
    </article>
  );
};

export { ProjectCard };

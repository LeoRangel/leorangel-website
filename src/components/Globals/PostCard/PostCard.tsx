import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatDate } from "@/utils/formatDate";
import Link from "next/link";
import { Heading } from "../Heading/Heading";
import Image from "next/image";

interface PostCardProps {
  title: string;
  url?: string;
  excerpt?: string;
  image?: {
    url: string;
    alt: string;
  };
  date: string;
  className?: string;
}

const PostCard = ({
  title,
  url,
  excerpt,
  image,
  date,
  className,
}: PostCardProps) => {
  return (
    <article
      className={`hover:shadow-sm transition-shadow duration-300 rounded-sm ${
        className || ""
      }`}
    >
      <Link
        href={url || "#"}
        className="no-underline"
        aria-label={`Leia o post: ${title || ""}`}
        title={title}
      >
        <Card
          className={`rounded-sm overflow-hidden h-full gap-4 ${
            image?.url && "pt-0"
          }`}
        >
          {image?.url && (
            <CardHeader className="relative w-full h-[150px] bg-muted overflow-hidden">
              <Image
                src={image?.url}
                alt={image?.alt || ""}
                fill
                priority={false}
                loading="lazy"
                className="not-prose w-full object-cover"
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
            {excerpt && (
              <CardDescription className="not-prose">
                <div
                  dangerouslySetInnerHTML={{ __html: excerpt || "" }}
                  className="line-clamp-2"
                />
              </CardDescription>
            )}
          </CardContent>
          <CardFooter className="mt-auto">
            {date && (
              <time
                dateTime={date}
                className="block text-sm text-muted-foreground"
              >
                {formatDate(date)}
              </time>
            )}
          </CardFooter>
        </Card>
      </Link>
    </article>
  );
};

export { PostCard };

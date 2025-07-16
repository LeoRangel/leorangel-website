import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@ui/card";
import { formatDate } from "@/utils/formatDate";
import { Heading } from "@atoms/Heading";

interface PostCardHorizontalProps {
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

const PostCardHorizontal = ({
  title,
  url,
  excerpt,
  image,
  date,
  className,
}: PostCardHorizontalProps) => {
  return (
    <article className={className}>
      <Link
        href={url || "#"}
        className="no-underline"
        aria-label={`Leia o post: ${title || ""}`}
        title={title}
      >
        <Card
          className={`border-0 rounded-none shadow-none gap-4 flex flex-row`}
        >
          <div className="flex-1 h-auto">
            <CardHeader className="p-0">
              {title && (
                <CardTitle>
                  <Heading as="h2" unstyled>
                    {title}
                  </Heading>
                </CardTitle>
              )}
            </CardHeader>
            <CardContent className="p-0">
              {excerpt && (
                <CardDescription className="not-prose">
                  <div
                    dangerouslySetInnerHTML={{ __html: excerpt || "" }}
                    className="line-clamp-2"
                  />
                </CardDescription>
              )}
            </CardContent>
            <CardFooter className="p-0 mt-4">
              {date && (
                <time
                  dateTime={date}
                  className="block text-sm text-muted-foreground"
                >
                  {formatDate(date)}
                </time>
              )}
            </CardFooter>
          </div>

          {image?.url && (
            <div className="ml-auto relative w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-muted overflow-hidden">
              <Image
                src={image?.url}
                alt={image?.alt || ""}
                fill
                priority={false}
                loading="lazy"
                className="not-prose w-full object-cover"
              />
            </div>
          )}
        </Card>
      </Link>
    </article>
  );
};

export { PostCardHorizontal };

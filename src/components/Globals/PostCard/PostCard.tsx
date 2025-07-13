import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { formatDate } from "@/utils/formatDate";
import Link from "next/link";

interface PostCardProps {
  title?: string;
  url?: string;
  excerpt?: string;
  imgUrl?: string;
  imgAlt?: string;
  date?: string;
  className?: string;
}

const PostCard = ({
  title,
  url,
  excerpt,
  imgUrl,
  imgAlt,
  date,
  className,
}: PostCardProps) => {
  return (
    <article
      className={`${
        className || ""
      } hover:shadow-xl transition-shadow duration-300 rounded-md`}
    >
      <Link href={url || "#"} className="no-underline">
        <Card
          className={`rounded-md overflow-hidden h-full ${
            imgUrl && "pt-0"
          } gap-4`}
        >
          {imgUrl && (
            <img
              src={imgUrl}
              alt={imgAlt || ""}
              height={150}
              className="not-prose w-full object-cover"
              style={{ height: 150 }}
            />
          )}
          <CardContent className="flex flex-col gap-2">
            {title && <CardTitle>{title}</CardTitle>}
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

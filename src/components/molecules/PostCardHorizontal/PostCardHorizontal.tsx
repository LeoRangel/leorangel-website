import Link from "next/link";
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
import { LuCalendar, LuSparkles } from "react-icons/lu";
import { Tag } from "@/gql/graphql";
import { isNewPost } from "@/utils/isNewPost";
import { Badge } from "@ui/badge";

interface PostCardHorizontalProps {
  id: string;
  title: string;
  url?: string;
  excerpt?: string;
  date: string;
  tags?: Tag[];
  className?: string;
}

const PostCardHorizontal = ({
  id,
  title,
  url,
  excerpt,
  date,
  className,
  tags,
}: PostCardHorizontalProps) => {
  const showNewPostTag = date && isNewPost(date);

  return (
    <article className={className}>
      <Link
        href={url || "#"}
        className="no-underline"
        aria-label={`Leia o post: ${title || ""}`}
        title={title}
      >
        <Card
          className={`flex gap-4 group rounded-md shadow-none hover:shadow-md transition-all cursor-pointer`}
        >
          <CardHeader>
            <div className="flex items-center gap-2">
              <ul
                className="not-prose list-none flex items-center gap-2 m-0 p-0"
                aria-label="Tags do post"
              >
                {tags?.map((tag) => (
                  <li className="flex" key={`post-${id}-tag-${tag?.id}`}>
                    <Badge variant="secondary">
                      <span className="sr-only">Tag:</span> {tag?.name}
                    </Badge>
                  </li>
                ))}
              </ul>

              {showNewPostTag && (
                <Badge variant="ghost" aria-label="Post novo" role="status">
                  <LuSparkles className="w-3 h-3" />
                  Novo
                </Badge>
              )}
            </div>
          </CardHeader>

          <CardContent>
            {title && (
              <CardTitle>
                <Heading
                  as="h3"
                  weight="extrabold"
                  className="text-1xl group-hover:text-[#10B981] transition-colors"
                >
                  {title}
                </Heading>
              </CardTitle>
            )}
            {excerpt && (
              <CardDescription className="not-prose text-muted-foreground leading-relaxed">
                <div
                  dangerouslySetInnerHTML={{ __html: excerpt || "" }}
                  className="line-clamp-2"
                />
              </CardDescription>
            )}
          </CardContent>

          <CardFooter className="mt-6">
            {date && (
              <time
                dateTime={date}
                className="text-xs text-muted-foreground flex items-center gap-1"
              >
                <LuCalendar className="w-3 h-3" />
                {formatDate(date)}
              </time>
            )}
          </CardFooter>
        </Card>
      </Link>
    </article>
  );
};

export { PostCardHorizontal };

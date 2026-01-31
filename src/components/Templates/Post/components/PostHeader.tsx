import { Heading } from "@atoms/Heading";
import { Text } from "@atoms/Text";
import { Avatar, AvatarFallback, AvatarImage } from "@ui/avatar";
import { Separator } from "@ui/separator";
import { formatDate } from "@/utils/formatDate";

interface PostHeaderProps {
  title: string;
  author: {
    name: string;
    avatarUrl?: string;
  };
  readTime?: string;
  date?: string;
}

const PostHeader = ({ title, author, readTime, date }: PostHeaderProps) => {
  return (
    <header className="mb-12">
      <Heading as="h1" unstyled>
        {title}
      </Heading>

      <div className="flex items-center text-sm text-muted-foreground space-x-3 mb-6">
        {/* <Avatar className="w-8 h-8">
          <AvatarImage src={author.avatarUrl} alt={author.name} />
          <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <Text as="span">{author.name}</Text> */}

        {date && <Text as="span">{formatDate(date)}</Text>}
        {readTime && (
          <>
            <span>•</span>
            <Text as="span">{readTime}</Text>
          </>
        )}
      </div>
      <Separator />
    </header>
  );
};

export { PostHeader };

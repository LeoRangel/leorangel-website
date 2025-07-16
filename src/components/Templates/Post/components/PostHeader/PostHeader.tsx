import { Heading } from "@/components/Globals/Heading/Heading";
import { Text } from "@/components/Globals/Text/Text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
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
    <section className="py-16">
      <Heading as="h1" unstyled>
        {title}
      </Heading>

      <div className="flex items-center text-sm text-muted-foreground space-x-3 mb-6">
        <Avatar className="w-8 h-8">
          <AvatarImage src={author.avatarUrl} alt={author.name} />
          <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <Text as="span">{author.name}</Text>
        {readTime && (
          <>
            <span>•</span>
            <Text as="span">{readTime}</Text>
          </>
        )}
        {date && (
          <>
            <span>•</span>
            <Text as="span">{formatDate(date)}</Text>
          </>
        )}
      </div>
      <Separator />
    </section>
  );
};

export { PostHeader };

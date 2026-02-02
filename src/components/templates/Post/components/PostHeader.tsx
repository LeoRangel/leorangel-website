import { Heading } from "@atoms/Heading";
import { Text } from "@atoms/Text";
import { Separator } from "@ui/separator";
import { formatDate } from "@/utils/formatDate";

interface PostHeaderProps {
  title: string;
  readTime?: string;
  date?: string;
}

const PostHeader = ({ title, readTime, date }: PostHeaderProps) => {
  return (
    <header className="mb-12">
      <Heading as="h1" unstyled>
        {title}
      </Heading>

      <div className="flex items-center text-sm text-muted-foreground space-x-3 mb-6">
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

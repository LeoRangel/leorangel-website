import { Container } from "@/components/Globals/Container/Container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

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
      <Container variant="narrowConstrainedPadded">
        <h1>{title}</h1>

        <div className="flex items-center text-sm text-muted-foreground space-x-3 mb-6">
          <Avatar className="w-8 h-8">
            <AvatarImage src={author.avatarUrl} alt={author.name} />
            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span>{author.name}</span>
          {readTime && (
            <>
              <span>•</span>
              <span>{readTime}</span>
            </>
          )}
          {date && (
            <>
              <span>•</span>
              <span>{date}</span>
            </>
          )}
        </div>
        <Separator />
      </Container>
    </section>
  );
};

export { PostHeader };

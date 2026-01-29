import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Text } from "@atoms/Text";
import { Badge } from "@ui/badge";
import { SocialBtnList } from "./SocialBtnList";
import { profileInfo } from "@/data/profileInfo";
import { Avatar, AvatarFallback, AvatarImage } from "@ui/avatar";

const ProfileCard = () => {
  return (
    <Card>
      <CardContent>
        <div className="flex items-center gap-4">
          <Avatar className="not-prose w-14 h-14 ring-1 ring-border/60">
            <AvatarImage
              src={profileInfo?.avatar?.src || ""}
              alt={profileInfo?.avatar?.alt || ""}
              width={"100%"}
              height={"100%"}
            />
            <AvatarFallback>{profileInfo?.name?.charAt(0)}</AvatarFallback>
          </Avatar>

          <div className="leading-tight flex flex-col">
            <Text
              as="span"
              size="lg"
              weight="semibold"
              className="tracking-tight"
            >
              {profileInfo?.name}
            </Text>
            <Text as="span" size="xs" variant="muted">
              {profileInfo?.role}
            </Text>
          </div>
        </div>

        <CardDescription className="not-prose leading-relaxed mt-4">
          <Text as="p" size="sm" variant="muted" className="mb-4">
            {profileInfo?.bio?.short}
          </Text>

          {profileInfo?.stacks?.favorite?.length > 0 && (
            <div>
              <Text as="p" size="sm" variant="muted" className="mb-4">
                Meus assuntos favoritos:
              </Text>

              <ul
                className="not-prose list-none flex items-center flex-wrap gap-2 m-0 p-0"
                aria-label="Assuntos favoritos"
              >
                {profileInfo?.stacks?.favorite?.map((skill, index) => (
                  <li className="flex" key={`about-skill-item-${index}`}>
                    <Badge variant="secondary">
                      <span className="sr-only">Assunto:</span> {skill}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardDescription>
      </CardContent>

      <CardFooter>
        <div className="flex flex-col">
          <Text as="p" size="sm" variant="muted" className="mb-4">
            Conecte-se comigo:
          </Text>

          <SocialBtnList />
        </div>
      </CardFooter>
    </Card>
  );
};

export { ProfileCard };

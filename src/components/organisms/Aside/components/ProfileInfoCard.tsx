import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Text } from "@atoms/Text";
import { Avatar, AvatarFallback, AvatarImage } from "@ui/avatar";
import { profileInfo } from "@/data/profileInfo";

const ProfileInfoCard = () => {
  return (
    <Card className="gap-4">
      <CardHeader className="gap-0">
        <div className="flex flex-col items-center text-center gap-2">
          <Avatar className="not-prose h-14 w-14 ring-1 ring-border/60">
            <AvatarImage
              src={profileInfo?.avatar?.src || ""}
              alt={profileInfo?.avatar?.alt || ""}
            />
            <AvatarFallback>{profileInfo?.name?.charAt(0)}</AvatarFallback>
          </Avatar>

          <CardTitle className="flex flex-col leading-tight">
            <Text as="span" size="lg" weight="semibold">
              {profileInfo?.name}
            </Text>
            <Text as="span" size="xs" variant="muted">
              {profileInfo?.role}
            </Text>
          </CardTitle>
        </div>
      </CardHeader>

      <CardContent className="text-center">
        <CardDescription>
          <Text as="p" size="xs" variant="muted" className="mb-2">
            {profileInfo.bio.short}
          </Text>
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export { ProfileInfoCard };

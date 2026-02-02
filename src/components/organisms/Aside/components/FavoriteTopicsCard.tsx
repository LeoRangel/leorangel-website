import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Text } from "@atoms/Text";
import { Badge } from "@ui/badge";
import { profileInfo } from "@/data/profileInfo";

const FavoriteTopicsCard = () => {
  if (profileInfo.favoriteTopics?.length < 1) return null;

  return (
    <Card className="gap-4">
      <CardContent className="text-center">
        <div>
          <CardTitle className="mb-2">
            <Text as="span" size="xs" variant="muted">
              Assuntos favoritos:
            </Text>
          </CardTitle>

          <ul className="not-prose list-none flex flex-wrap justify-center gap-2 m-0 p-0">
            {profileInfo?.favoriteTopics?.map((skill) => (
              <li key={skill}>
                <Badge variant="secondary">{skill}</Badge>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export { FavoriteTopicsCard };

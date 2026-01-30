import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@ui/button";
import { Text } from "@atoms/Text";
import { MenuItem } from "@/gql/graphql";

interface Props {
  menuItems: MenuItem[];
}

const NavigationCard = ({ menuItems }: Props) => {
  if (!menuItems.length) return null;

  return (
    <Card className="hidden md:block">
      <CardContent>
        <nav aria-label="Navegação principal">
          <ul className="not-prose list-none flex flex-wrap justify-center items-center gap-2 p-0 m-0">
            {menuItems.map((item) => (
              <li key={item.uri}>
                <Button asChild variant="secondary" size="sm">
                  <Link href={item.uri || ""} target={item.target || "_self"}>
                    <Text as="span" size="xs">
                      {item.label}
                    </Text>
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </CardContent>
    </Card>
  );
};

export { NavigationCard };

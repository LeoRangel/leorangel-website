import { Separator } from "@ui/separator";
import { SocialBtnList } from "./SocialBtnList";
import { Container } from "@atoms/Container";
import { Button } from "@ui/button";
import Link from "next/link";
import { Text } from "@atoms/Text";
import { getMenu } from "@services/wordpress/navigation/getMenu";
import { footerInfo } from "@/data/footer";

export default async function Footer() {
  const menuItems = await getMenu();

  return (
    <footer className="w-full flex flex-col bg-gray-50 dark:bg-gray-900">
      <Separator />
      <Container variant="fullMobileConstrainedPadded" className="w-full">
        <div className="w-full flex flex-col md:flex-row md:items-center justify-between my-6">
          {menuItems && menuItems?.length > 0 && (
            <nav
              aria-label="Navegação de links úteis"
              className="flex flex-wrap justify-center items-center"
            >
              <Text as="span" size="xs" variant="muted" className="mr-4">
                Links úteis:
              </Text>
              <ul className="not-prose list-none flex flex-wrap justify-center items-center gap-0 p-0 m-0">
                {menuItems?.map((item) => (
                  <li key={item.uri}>
                    <Button asChild variant="link" size="sm">
                      <Link
                        href={item.uri || ""}
                        target={item.target || "_self"}
                      >
                        <Text as="span" size="xs" variant="muted">
                          {item.label}
                        </Text>
                      </Link>
                    </Button>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <div className="text-center text-sm text-muted-foreground py-4">
            {footerInfo.developerBy}
          </div>

          <div className="flex gap-3 justify-center">
            <SocialBtnList />
          </div>
        </div>
      </Container>
    </footer>
  );
}

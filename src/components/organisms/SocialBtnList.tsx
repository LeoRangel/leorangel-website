import Link from "next/link";
import { Button } from "@ui/button";
import { socialLinks } from "@/data/sociaLinks";
import { getIconByKey } from "@/utils/getIconsByKey";

const SocialBtnList = () => {
  if (!socialLinks || socialLinks?.length < 1) null;

  return (
    <>
      {socialLinks?.map(({ name, href, iconKey }) => {
        const Icon = getIconByKey(iconKey);
        if (!Icon) return null;

        return (
          <Button key={name} variant="ghost" size="icon" asChild>
            <Link href={href} target="_blank" aria-label={name}>
              <Icon className="stroke-muted-foreground w-5 h-5" />
            </Link>
          </Button>
        );
      })}
    </>
  );
};

export { SocialBtnList };

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/data/sociaLinks";
import { getIconByKey } from "@/utils/getIconsByKey";

const SocialBtnList = () => {
  if (!socialLinks) <></>;

  return (
    <div className="flex flex-col justify-center gap-2 sm:flex-row lg:justify-start">
      <div className="flex items-center gap-2.5">
        {socialLinks?.map(({ name, href, iconKey }) => {
          const Icon = getIconByKey(iconKey);
          if (!Icon) return null;

          return (
            <Button key={name} variant="outline" size="icon" asChild>
              <Link href={href} target="_blank" aria-label={name}>
                <Icon className="stroke-muted-foreground w-5 h-5" />
              </Link>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export { SocialBtnList };

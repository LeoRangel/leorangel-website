import { socialLinks } from "@/data/sociaLinks";
import { getIconByKey } from "@/utils/getIconsByKey";
import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";

const SocialLinks = () => {
  if (!socialLinks || socialLinks?.length < 1) null;

  return (
    <>
      {socialLinks.map((link) => {
        const Icon = getIconByKey(link?.iconKey);
        if (!Icon) return null;

        return (
          <Link
            key={link?.name}
            href={link?.href}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group flex items-center gap-3 rounded-lg border p-3 no-underline
              bg-card text-card-foreground
              border-border
              transition-all
              hover:shadow-md
            "
          >
            <div
              className="
                flex h-10 w-10 items-center justify-center rounded-lg
                bg-muted
                transition-colors
                group-hover:bg-foreground
              "
            >
              <Icon
                className="
                  h-5 w-5
                  text-muted-foreground
                  transition-colors
                  group-hover:text-background
                "
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium">{link?.name}</div>
              <div className="truncate text-xs text-muted-foreground">
                {link?.handle}
              </div>
            </div>

            <LuExternalLink
              className="
                h-5 w-5 mr-2
                text-muted-foreground
                transition-colors
                group-hover:text-black
                dark:group-hover:text-white
              "
            />
          </Link>
        );
      })}
    </>
  );
};

export { SocialLinks };

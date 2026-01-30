import { MenuItem } from "@/gql/graphql";
import { NavigationCard } from "./components/NavigationCard";
import { ThemeCard } from "./components/ThemeCard";
import { ProfileInfoCard } from "./components/ProfileInfoCard";
import { SocialCard } from "./components/SocialCard";

interface AsideProps {
  menuItems: MenuItem[];
  className?: string;
}

const Aside = ({ menuItems, className }: AsideProps) => {
  return (
    <aside className={className}>
      <div className="flex flex-col gap-3">
        <ProfileInfoCard />
        <div className="hidden md:grid grid-cols-2 gap-3">
          <SocialCard />
          <ThemeCard />
        </div>
        <NavigationCard menuItems={menuItems} />
      </div>
    </aside>
  );
};

export { Aside };

import { ThemeCard } from "./components/ThemeCard";
import { ProfileInfoCard } from "./components/ProfileInfoCard";
import { SocialCard } from "./components/SocialCard";
import { SECTIONS } from "@templates/HomePage/sections";
import dynamic from "next/dynamic";
import { FavoriteTopicsCard } from "./components/FavoriteTopicsCard";

const SectionNavBarDynamic = dynamic(() => import("../SectionNavBar"));

const PageNavBarDynamic = dynamic(() => import("../PageNavBar"));

interface AsideProps {
  isHomePage?: boolean;
  className?: string;
}

const Aside = ({ isHomePage, className }: AsideProps) => {
  return (
    <aside className={className}>
      <div className="lg:hidden h-[56px]" aria-hidden />

      <div className="flex flex-col gap-3">
        <div
          className="
            fixed top-3 left-1/2 z-40
            -translate-x-1/2
            w-fit
            lg:static lg:translate-x-0
            lg:w-auto lg:max-w-none
            lg:z-auto
          "
        >
          {isHomePage && (
            <SectionNavBarDynamic sections={Object.values(SECTIONS)} />
          )}
          {!isHomePage && <PageNavBarDynamic />}
        </div>

        <ProfileInfoCard />

        <FavoriteTopicsCard />

        <div className="hidden lg:grid grid-cols-2 gap-3">
          <SocialCard />
          <ThemeCard />
        </div>
      </div>
    </aside>
  );
};

export { Aside };

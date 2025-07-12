"use client";

import Link from "next/link";
import { MenuItem } from "@/gql/graphql";
import { ThemeToggle } from "@/components/Globals/ThemeToggle/ThemeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { LuMenu } from "react-icons/lu";

interface NavigationClientProps {
  menuItems: MenuItem[];
}

function MyLogo() {
  return (
    <Avatar className="w-8 h-8">
      <AvatarImage src={""} alt={"Meu Nome"} />
      <AvatarFallback>{"Meu Nome".charAt(0)}</AvatarFallback>
    </Avatar>
  );
}

export default function NavigationClient({ menuItems }: NavigationClientProps) {
  const MenuItems = (
    <>
      {menuItems?.map((item, index) => {
        if (!item.uri) return null;

        return (
          <Link
            key={index}
            href={item.uri}
            target={item.target || "_self"}
            className="no-underline hover:underline transition-colors"
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );

  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex flex-row items-center gap-8">
        {MyLogo()}

        <div className="hidden md:flex items-center gap-4">{MenuItems}</div>
      </div>

      <div className="flex items-center gap-2">
        <ThemeToggle />

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Button
                variant="ghost"
                aria-label="Alternar Tema"
                size="icon"
                className="cursor-pointer"
                asChild
              >
                <LuMenu className="p-2" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <SheetHeader>
                <SheetTitle hidden>Menu lateral</SheetTitle>
                {MyLogo()}
              </SheetHeader>

              <div className="flex flex-col gap-4 px-4">{MenuItems}</div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { MenuItem } from "@/gql/graphql";
import { ThemeToggle } from "@molecules/ThemeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@ui/sheet";
import { Button } from "@ui/button";
import { LuMenu } from "react-icons/lu";
import { Text } from "@/components/atoms/Text";

interface NavigationClientProps {
  menuItems: MenuItem[];
}

function MyLogo() {
  return (
    <Avatar className="not-prose w-10 h-10">
      <AvatarImage
        src={"https://github.com/leorangel.png"}
        alt={"Leandro Rangel"}
        width={"100%"}
        height={"100%"}
        loading="lazy"
      />
      <AvatarFallback>{"Leandro Rangel".charAt(0)}</AvatarFallback>
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
        <div className="flex flex-col">
          <Text as="span">Leandro Rangel</Text>
          <Text as="span" variant="muted" size="xs">
            Software Engineer
          </Text>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="hidden md:flex items-center gap-4">
          {MenuItems}
          <ThemeToggle />
        </div>

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

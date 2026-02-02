"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

function Switch({
  className,
  size = "default",
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root> & {
  size?: "sm" | "default";
}) {
  return (
    <SwitchPrimitive.Root
      data-size={size}
      className={cn(
        "group relative inline-flex shrink-0 cursor-pointer items-center rounded-full",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60",
        "data-[state=checked]:bg-muted-foreground/25 data-[state=unchecked]:bg-muted",
        "p-[2px]",
        "data-[size=default]:h-[20px] data-[size=default]:w-[36px]",
        "data-[size=sm]:h-[16px] data-[size=sm]:w-[28px]",
        "transition-colors duration-300 ease-in-out",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          "pointer-events-none block rounded-full",
          "bg-background dark:bg-foreground",
          "shadow-sm",
          "group-data-[size=default]:h-4 group-data-[size=default]:w-4",
          "group-data-[size=sm]:h-3 group-data-[size=sm]:w-3",
          "group-data-[state=checked]:translate-x-full",
          "group-data-[state=unchecked]:translate-x-0",
          "transition-transform duration-300 ease-in-out will-change-transform",
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };

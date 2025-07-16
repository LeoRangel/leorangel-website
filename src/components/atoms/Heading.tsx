import { cn } from "@/lib/utils";
import React from "react";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingWeight = "normal" | "medium" | "semibold" | "bold";
type HeadingVariant = "default" | "muted" | "secondary";

type HeadingProps = {
  as?: HeadingTag;
  weight?: HeadingWeight;
  variant?: HeadingVariant;
  className?: string;
  unstyled?: boolean;
  children: React.ReactNode;
};

export const Heading: React.FC<HeadingProps> = ({
  as: Tag = "h2",
  weight = "semibold",
  variant = "default",
  className,
  unstyled = false,
  children,
}) => {
  const weightClasses: Record<HeadingWeight, string> = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  const variantClasses: Record<HeadingVariant, string> = {
    default: "text-foreground",
    muted: "text-muted-foreground",
    secondary: "text-secondary-foreground",
  };

  return (
    <Tag
      className={cn(
        "prose-no-margin-top",
        !unstyled && weightClasses[weight],
        !unstyled && variantClasses[variant],
        className
      )}
    >
      {children}
    </Tag>
  );
};

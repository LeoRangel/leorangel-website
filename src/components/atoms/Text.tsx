import { cn } from "@/lib/utils";
import React from "react";

type TextSize = "xs" | "sm" | "base" | "lg" | "xl";
type TextWeight = "normal" | "medium" | "semibold" | "bold" | "extrabold";
type TextVariant = "default" | "muted" | "secondary";

type TextProps = {
  as?: "p" | "span" | "div" | "strong" | "em" | "label";
  size?: TextSize;
  weight?: TextWeight;
  variant?: TextVariant;
  className?: string;
  children: React.ReactNode;
};

export const Text: React.FC<TextProps> = ({
  as: Tag = "p",
  size = "base",
  weight = "normal",
  variant = "default",
  className,
  children,
}) => {
  const sizeClasses: Record<TextSize, string> = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  const weightClasses: Record<TextWeight, string> = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
  };

  const variantClasses: Record<TextVariant, string> = {
    default: "text-foreground",
    muted: "text-muted-foreground",
    secondary: "text-secondary-foreground",
  };

  return (
    <Tag
      className={cn(
        "prose-no-margin-top",
        sizeClasses[size],
        weightClasses[weight],
        variantClasses[variant],
        className
      )}
    >
      {children}
    </Tag>
  );
};

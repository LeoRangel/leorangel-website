import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@ui/button";
import { ThemeToggle } from "@molecules/ThemeToggle";
import { LuArrowLeft } from "react-icons/lu";

interface PageNavBarProps {
  className?: string;
}

export default function PageNavBar({ className }: PageNavBarProps) {
  return (
    <nav
      aria-label="Navegação por página"
      className={cn(
        "relative mx-auto w-full rounded-full",
        "bg-muted/80 backdrop-blur",
        "supports-[backdrop-filter]:bg-muted/60",
        "border border-border/60",
        "shadow-sm",
        "overflow-hidden",
        "overflow-x-auto scrollbar-none",
        className,
      )}
    >
      <div className="flex items-center">
        <div className="relative flex-1 overflow-hidden">
          <div
            className="
              flex items-center gap-0
              overflow-x-auto
              px-1.5 py-1
              scrollbar-none
            "
          >
            <Button
              asChild
              variant="ghost"
              size="sm"
              className={cn(
                "shrink-0 rounded-full",
                "px-3 h-7 text-[11px] leading-none",
                "transition-colors",
                "text-foreground hover:text-foreground",
              )}
            >
              <Link href="/" className="no-underline">
                <LuArrowLeft className="h-1 w-1" />
                Home
              </Link>
            </Button>

            <Button
              asChild
              variant="ghost"
              size="sm"
              className={cn(
                "shrink-0 rounded-full",
                "px-3 h-7 text-[11px] leading-none",
                "transition-colors",
                "text-foreground hover:text-foreground",
              )}
            >
              <Link href="/posts" className="no-underline">
                Posts
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

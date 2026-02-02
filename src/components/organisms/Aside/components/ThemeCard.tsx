import { Card, CardContent } from "@/components/ui/card";
import { ThemeSwitch } from "@molecules/ThemeSwitch";

const ThemeCard = () => {
  return (
    <Card>
      <CardContent className="flex flex-col h-full items-center justify-center">
        <ThemeSwitch />
      </CardContent>
    </Card>
  );
};

export { ThemeCard };

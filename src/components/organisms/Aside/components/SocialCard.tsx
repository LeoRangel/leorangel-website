import { Card, CardContent } from "@/components/ui/card";
import { SocialBtnList } from "@organisms/SocialBtnList";

const SocialCard = () => {
  return (
    <Card>
      <CardContent className="flex justify-center">
        <SocialBtnList />
      </CardContent>
    </Card>
  );
};

export { SocialCard };

import { Card, CardContent } from "@ui/card";
import { Skeleton } from "@ui/skeleton";

const PostCardHorizontalSkeleton = () => {
  return (
    <Card className={`flex gap-4 shadow-none`}>
      <CardContent>
        <div className="flex-1 h-auto">
          <Skeleton className="h-[14px] w-[20%] rounded-xl mb-4" />
          <Skeleton className="h-[24px] w-[70%] rounded-xl mb-6" />
          <Skeleton className="h-[14px] w-[60%] rounded-xl mb-1" />
          <Skeleton className="h-[14px] w-[50%] rounded-xl mb-4" />
          <Skeleton className="h-[14px] w-[20%] rounded-xl" />
        </div>
      </CardContent>
    </Card>
  );
};

export { PostCardHorizontalSkeleton };

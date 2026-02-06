import { Card, CardContent, CardFooter, CardHeader } from "@ui/card";
import { LuExternalLink, LuGithub } from "react-icons/lu";
import { Skeleton } from "@ui/skeleton";

const ProjectCardSkeleton = () => {
  return (
    <Card className={`min-h-[281px] overflow-hidden gap-4 shadow-none`}>
      <CardHeader className="relative w-full overflow-hidden gap-0">
        <div className="flex items-start justify-between">
          <Skeleton className="h-10 w-10 rounded-xl" />
          <Skeleton className="h-5 w-5 rounded-xl" />
        </div>
      </CardHeader>

      <CardContent className="flex flex-col">
        <Skeleton className="h-[21px] w-[60%] rounded-xl mb-3" />
        <Skeleton className="h-[15px] w-[90%] rounded-xl mb-2" />
        <Skeleton className="h-[15px] w-[70%] rounded-xl" />
      </CardContent>

      <CardFooter className="mt-auto">
        <div className="flex items-center flex-wrap gap-2">
          <Skeleton className="h-[20px] w-[90px] rounded-xl" />
          <Skeleton className="h-[20px] w-[70px] rounded-xl" />
          <Skeleton className="h-[20px] w-[60px] rounded-xl" />
          <Skeleton className="h-[20px] w-[100px] rounded-xl" />
          <Skeleton className="h-[20px] w-[80px] rounded-xl" />
          <Skeleton className="h-[20px] w-[60px] rounded-xl" />
          <Skeleton className="h-[20px] w-[90px] rounded-xl" />
          <Skeleton className="h-[20px] w-[70px] rounded-xl" />
          <Skeleton className="h-[20px] w-[60px] rounded-xl" />
        </div>
      </CardFooter>
    </Card>
  );
};

export { ProjectCardSkeleton };

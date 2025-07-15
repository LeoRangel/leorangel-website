import { Skeleton } from "@/components/ui/skeleton";

const PostCardHorizontalSkeleton = () => {
  return (
    <div className="py-6 gap-4 flex flex-row">
      <div className="flex-1 h-auto">
        <Skeleton className="h-[24px] w-[80%] rounded-xl mb-1" />
        <Skeleton className="h-[24px] w-[70%] rounded-xl mb-6" />
        <Skeleton className="h-[14px] w-[60%] rounded-xl mb-1" />
        <Skeleton className="h-[14px] w-[50%] rounded-xl mb-4" />
        <Skeleton className="h-[14px] w-[20%] rounded-xl" />
      </div>

      <div className="ml-auto relative w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-muted overflow-hidden">
        <Skeleton className="h-full w-full" />
      </div>
    </div>
  );
};

export { PostCardHorizontalSkeleton };

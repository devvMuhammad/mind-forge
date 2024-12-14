import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <Skeleton className="w-52 h-10" />
          <Button>Fetch Latest Changes</Button>
        </div>
        <Skeleton className="w-1/2 h-8 mt-4" />
        <Skeleton className="w-1/4 h-8 mt-2" />

        <Skeleton className="w-1/4 h-12 my-4" />
      </div>
      <div className="space-y-4">
        {/* Subject Title */}
        <div className="flex items-center justify-between mt-4 border-b-2 pb-2">
          <Skeleton className="w-1/4 h-10" />
          <Skeleton className="w-1/4 h-10" />
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <Skeleton className=" h-32" />
          <Skeleton className=" h-32" />
          <Skeleton className=" h-32" />
          <Skeleton className=" h-32" />
          <Skeleton className=" h-32" />
          <Skeleton className=" h-32" />
        </div>
      </div>
      <div className="space-y-4">
        {/* Subject Title */}
        <div className="flex items-center justify-between mt-4 border-b-2 pb-2">
          <Skeleton className="w-1/4 h-10" />
          <Skeleton className="w-1/4 h-10" />
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <Skeleton className=" h-32" />
          <Skeleton className=" h-32" />
          <Skeleton className=" h-32" />
        </div>
      </div>
    </>
  );
}

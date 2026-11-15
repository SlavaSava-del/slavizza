import { Skeleton } from "../ui";

export function ProductModalSkeleton() {
  return (
    <div className="grid grid-cols-[55%_45%] p-7 mr-3 h-full overflow-hidden grid-rows-1 items-center z-30">
      <img className="p-15" src={"/stub.webp"} />

      <div className="flex flex-col gap-5 h-full rounded-r-3xl">
        <div className="space-y-2">
          <Skeleton className="rounded-[8px] h-7 w-3/5" />
          <Skeleton className="rounded-[8px] h-5 w-2/3" />
          <Skeleton className="rounded-[8px] h-5 w-5/6" />
        </div>

        <div className="space-y-2">
          {...Array(2)
            .fill(0)
            .map((_) => <Skeleton className="rounded-3xl h-10" />)}
        </div>

        <div className="space-y-3">
          <Skeleton className="rounded-[8px] w-50 h-5" />

          <div className="grid grid-cols-3 gap-7">
            {...Array(3)
              .fill(0)
              .map((_) => <Skeleton className="rounded-2xl h-40 w-full" />)}
          </div>
        </div>
      </div>
    </div>
  );
}

import { Skeleton } from "../ui";

export function FiltersSkeleton() {
  return (
    <div className="flex flex-col gap-5">
      <Skeleton className="rounded-[8px] h-7 w-full" />

      <div>
        <Skeleton className="rounded-[8px] h-5 w-full mb-3" />

        {...Array(2)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="flex gap-2 mb-4">
              <Skeleton className="rounded-[8px] w-6 h-6" />
              <Skeleton className="flex-1 h-6 rounded-[8px]" />
            </div>
          ))}
      </div>

      <div>
        <Skeleton className="rounded-[8px] h-5 w-full mb-3" />

        <div className="flex gap-4 mb-4">
          <Skeleton className="rounded-[8px] w-1/2 h-10" />
          <Skeleton className="rounded-[8px] w-1/2 h-10" />
        </div>
      </div>

      <div>
        <Skeleton className="rounded-[8px] h-5 w-full mb-3" />

        {...Array(6)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="flex gap-2 mb-4">
              <Skeleton className="rounded-[8px] w-6 h-6" />
              <Skeleton className="flex-1 h-6 rounded-[8px]" />
            </div>
          ))}

        <Skeleton className="w-28 h-6 rounded-[8px] mt-1" />
      </div>
    </div>
  );
}

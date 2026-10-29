import { Skeleton } from "../ui";

interface CheckboxFiltersSkeletonProps {
  title: string;
  limit?: number;
  className?: string;
}

export function CheckboxFiltersSkeleton({
  title,
  limit = 1,
  className,
}: CheckboxFiltersSkeletonProps) {
  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>

      {...Array(limit)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="flex gap-2 mb-4">
            <Skeleton className="rounded-[8px] w-6 h-6" />
            <Skeleton className="flex-1 h-6 rounded-[8px]" />
          </div>
        ))}

      <Skeleton className="w-28 h-6 rounded-[8px]" />
    </div>
  );
}

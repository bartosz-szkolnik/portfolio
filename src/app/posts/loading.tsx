import { Skeleton } from '@components/common/skeleton';

export default function LoadingPosts() {
  return (
    <div className="flex h-screen flex-col justify-between py-8">
      <section className="container max-w-3xl">
        <div className="mb-16 flex flex-col gap-4">
          <Skeleton className="h-14 w-[160px]" />
          <Skeleton className="h-16 w-[120px]" />
          <Skeleton className="h-12 w-[352px]" />
        </div>
        <div className="flex flex-col gap-8">
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-20 w-full" />
        </div>
      </section>
    </div>
  );
}

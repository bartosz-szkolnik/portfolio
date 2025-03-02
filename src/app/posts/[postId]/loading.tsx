import { Skeleton } from '@components/common/skeleton';

export default function LoadingPosts() {
  return (
    <div className="flex h-screen flex-col justify-between py-8">
      <section className="container max-w-3xl">
        <div className="mb-16 flex flex-col gap-4">
          <Skeleton className="h-14 w-[160px]" />
          <Skeleton className="h-[384px] w-full" />
          <Skeleton className="h-12 w-[200px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
        <div className="flex flex-col gap-12">
          <Skeleton className="h-20 w-full" />
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-4">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-40 w-full" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

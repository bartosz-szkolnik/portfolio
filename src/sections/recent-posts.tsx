import { getPosts } from '@lib/posts';
import { Card, CardContent } from '@components/common/card';
import Link from 'next/link';
import { Button } from '@components/common/button';
import { formatDate } from '@lib/utils';
import { ChevronRightIcon } from 'lucide-react';

export async function RecentPosts() {
  const posts = await getPosts(4);

  return (
    <>
      <Link href="/posts">
        <h2 className="mb-4 text-xl font-bold">Recent Posts</h2>
      </Link>
      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        {posts.map(({ title, summary, postId, publishedAt }) => (
          <Card key={title}>
            <CardContent className="h-full pb-5 pt-6">
              <div className="flex h-full flex-col">
                <div className="flex-grow">
                  <p className="text-lg font-semibold text-primary">{title}</p>
                  <p className="mb-5 mt-1 line-clamp-3 text-ellipsis text-sm text-muted-foreground">{summary}</p>
                </div>
                <div className="flex items-end justify-between">
                  <p className="mb-2 text-sm text-muted-foreground">{formatDate(publishedAt ?? '')}</p>
                  <Button variant="ghost" asChild>
                    <Link href={`/posts/${postId}`}>
                      Show post <ChevronRightIcon className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}

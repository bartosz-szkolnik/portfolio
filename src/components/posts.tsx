import { PostMetadata } from '@lib/posts';
import { formatDate } from '@lib/utils';
import Link from 'next/link';

type PostsProps = {
  posts: PostMetadata[];
};

export function Posts({ posts }: PostsProps) {
  return (
    <ul className="flex flex-col gap-8">
      {posts.map(post => (
        <li key={post.postId}>
          <Link
            href={`/posts/${post.postId}`}
            className="flex flex-col justify-between gap-x-4 gap-y-1 rounded-xl p-4 hover:bg-neutral-100 dark:hover:bg-neutral-900 sm:flex-row"
          >
            <div className="max-w-lg">
              <p className="text-lg font-semibold">{post.title}</p>
              <p className="mt-1 line-clamp-2 text-sm font-light text-muted-foreground">{post.summary}</p>
            </div>

            {post.publishedAt && (
              <p className="mt-1 whitespace-nowrap text-sm font-light">{formatDate(post.publishedAt)}</p>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}

import { Footer } from '@components/footer';
import { PostsWithSearch } from '@components/posts-with-search';
import { getPosts } from '@lib/posts';
import { ArrowLeftIcon } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Posts',
};

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className="flex h-screen flex-col justify-between py-8">
      <section className="container max-w-3xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 rounded-xl p-4 text-sm font-light text-muted-foreground hover:bg-neutral-100 dark:hover:bg-neutral-900"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          <span>Back to portfolio</span>
        </Link>

        <h1 className="title mb-12">Posts</h1>

        <PostsWithSearch posts={posts} />
      </section>

      <Footer />
    </div>
  );
}

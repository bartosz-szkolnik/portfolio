import { getPostById, getPosts } from '@lib/posts';
import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { formatDate } from '@lib/utils';
import { MDXContent } from '@components/mdx-content';
import { Metadata } from 'next';
import { Footer } from '@components/footer';

type ComponentProps = {
  params: Promise<{
    postId: string;
  }>;
};

export async function generateMetadata({ params }: ComponentProps): Promise<Metadata> {
  const { postId } = await params;
  const post = await getPostById(postId);

  return { title: post?.metadata.title ?? '' };
}

export async function generateStaticParams() {
  const posts = await getPosts();
  const postIds = posts.map(post => ({ postId: post.postId }));

  return postIds;
}

export default async function PostPage({ params }: ComponentProps) {
  const { postId } = await params;
  const post = await getPostById(postId);

  if (!post) {
    notFound();
  }

  const { metadata, content } = post;
  const { title, image, author, publishedAt } = metadata;

  return (
    <section className="flex h-screen flex-col justify-between py-8">
      <div className="container max-w-3xl">
        <div className="flex gap-2">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 rounded-xl p-4 text-sm font-light text-muted-foreground hover:bg-neutral-100 dark:hover:bg-neutral-900"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            <span>Back to portfolio</span>
          </Link>
          <Link
            href="/posts"
            className="mb-8 inline-flex items-center gap-2 rounded-xl p-4 text-sm font-light text-muted-foreground hover:bg-neutral-100 dark:hover:bg-neutral-900"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            <span>Back to posts</span>
          </Link>
        </div>

        {image && (
          <div className="relative mb-6 h-96 w-full overflow-hidden rounded-lg">
            <Image src={image} alt={title ?? ''} className="object-cover" fill />
          </div>
        )}

        <header>
          <h1 className="title">{title}</h1>
          <p className="mt-3 text-xs text-muted-foreground">
            {author} / {formatDate(publishedAt ?? '')}
          </p>
        </header>

        <main className="prose mt-16 dark:prose-invert lg:prose-xl">
          <MDXContent source={content}></MDXContent>
        </main>
      </div>

      <Footer className="pb-8" />
    </section>
  );
}

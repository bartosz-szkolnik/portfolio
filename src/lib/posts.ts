import path from 'node:path';
import fs from 'node:fs/promises';
import matter from 'gray-matter';

export type Post = {
  metadata: PostMetadata;
  content: string;
};

export type PostMetadata = {
  title?: string;
  summary?: string;
  image?: string;
  author?: string;
  publishedAt?: string;
  postId: string;
};

const ROOT_DIRECTORY = path.join(process.cwd(), 'src', 'data', 'posts');

export async function getPostById(postId: string): Promise<Post | null> {
  try {
    const filePath = path.join(ROOT_DIRECTORY, `${postId}.mdx`);
    const fileContents = await fs.readFile(filePath, 'utf-8');

    const { data, content } = matter(fileContents);

    return { metadata: { ...data, postId }, content };
  } catch {
    return null;
  }
}

export async function getPosts(limit?: number): Promise<PostMetadata[]> {
  const fileNames = await fs.readdir(ROOT_DIRECTORY);

  const posts = (await Promise.all(fileNames.map(async fileName => getPostMetadata(fileName)))).sort((a, b) => {
    const isEarlier = new Date(a.publishedAt ?? '') < new Date(b.publishedAt ?? '');
    return isEarlier ? 1 : -1;
  });

  if (limit) {
    return posts.slice(0, limit);
  }

  return posts;
}

export async function getPostMetadata(filepath: string): Promise<PostMetadata> {
  const postId = filepath.replace(/\.mdx$/, '');
  const filePath = path.join(ROOT_DIRECTORY, filepath);
  const fileContent = await fs.readFile(filePath, 'utf-8');

  const { data } = matter(fileContent);
  return { ...data, postId };
}

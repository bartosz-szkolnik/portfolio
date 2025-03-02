'use client';

import { PostMetadata } from '@lib/posts';
import { useState } from 'react';
import { Button } from './common/button';
import { EraserIcon } from 'lucide-react';
import { Posts } from './posts';
import { Input } from './common/input';

type PostsWithSearchProps = {
  posts: PostMetadata[];
};

export function PostsWithSearch({ posts }: PostsWithSearchProps) {
  const [query, setQuery] = useState('');
  const filtered = posts.filter(post => post.title?.toLowerCase().includes(query.toLowerCase()));

  const isFiltered = query.length > 0;
  function resetFilter() {
    setQuery('');
  }

  return (
    <div>
      <div className="mb-12 flex items-center gap-3">
        <Input
          type="text"
          placeholder="Search posts..."
          className="h-9 w-full sm:w-1/2"
          value={query}
          onChange={e => setQuery(e.currentTarget.value)}
        />
        {isFiltered && (
          <Button size="sm" variant="secondary" onClick={resetFilter} className="h-8 px-2 lg:px-3">
            Reset
            <EraserIcon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-3 text-muted-foreground">No posts found with given query.</p>
      ) : (
        <div className="overflow-auto md:max-h-[calc(100vh-460px)]">
          <Posts posts={filtered} />
        </div>
      )}
    </div>
  );
}

import { trpc } from '../../utils/trpc';
import { Fragment } from 'react';
import Post from './post';
import { Button } from '~/components/ui/button';

export default function Posts() {
  const postsQuery = trpc.post.list.useInfiniteQuery(
    {
      limit: 5,
    },
    {
      getNextPageParam(lastPage) {
        return lastPage.nextCursor;
      },
    },
  );
  return (
    <div className="flex flex-col py-8 items-start gap-y-2">
      <div className="flex flex-col"></div>
      <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance mb-4">
        My Notes
        {postsQuery.status === 'pending' && '(loading)'}
      </h1>
      <Button
        onClick={() => postsQuery.fetchNextPage()}
        disabled={!postsQuery.hasNextPage || postsQuery.isFetchingNextPage}
      >
        {postsQuery.isFetchingNextPage
          ? 'Loading more...'
          : postsQuery.hasNextPage
            ? 'Load More'
            : 'Nothing more to load'}
      </Button>

      {postsQuery.data?.pages.map((page, index) => (
        <Fragment key={page.items[0]?.id || index}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {page.items.map((item) => (
              <article key={item.id}>
                <Post id={item.id} title={item.title} text={item.text} />
              </article>
            ))}
          </div>
        </Fragment>
      ))}
    </div>
  );
}

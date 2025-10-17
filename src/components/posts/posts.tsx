import { trpc } from '../../utils/trpc';
import Link from 'next/link';
import { Fragment } from 'react';

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
      <h2 className="text-3xl font-semibold">
        Latest Posts
        {postsQuery.status === 'pending' && '(loading)'}
      </h2>

      <button
        className="bg-gray-900 p-2 rounded-md font-semibold disabled:bg-gray-700 disabled:text-gray-400"
        onClick={() => postsQuery.fetchNextPage()}
        disabled={!postsQuery.hasNextPage || postsQuery.isFetchingNextPage}
      >
        {postsQuery.isFetchingNextPage
          ? 'Loading more...'
          : postsQuery.hasNextPage
            ? 'Load More'
            : 'Nothing more to load'}
      </button>

      {postsQuery.data?.pages.map((page, index) => (
        <Fragment key={page.items[0]?.id || index}>
          {page.items.map((item) => (
            <article key={item.id}>
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <Link className="text-gray-400" href={`/post/${item.id}`}>
                View more
              </Link>
            </article>
          ))}
        </Fragment>
      ))}
    </div>
  );
}

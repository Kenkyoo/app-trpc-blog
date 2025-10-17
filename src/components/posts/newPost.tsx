import { trpc } from '../../utils/trpc';
import type { inferProcedureInput } from '@trpc/server';
import type { AppRouter } from '~/server/routers/_app';

export default function NewPost() {
  const utils = trpc.useUtils();
  const addPost = trpc.post.add.useMutation({
    async onSuccess() {
      // refetches posts after a post is added
      await utils.post.list.invalidate();
    },
  });
  return (
    <form
      className="py-2 w-4/6"
      onSubmit={async (e) => {
        /**
         * In a real app you probably don't want to use this manually
         * Checkout React Hook Form - it works great with tRPC
         * @see https://react-hook-form.com/
         * @see https://kitchen-sink.trpc.io/react-hook-form
         */
        e.preventDefault();
        const $form = e.currentTarget;
        const values = Object.fromEntries(new FormData($form));
        type Input = inferProcedureInput<AppRouter['post']['add']>;
        //    ^?
        const input: Input = {
          title: values.title as string,
          text: values.text as string,
        };
        try {
          await addPost.mutateAsync(input);

          $form.reset();
        } catch (cause) {
          console.error({ cause }, 'Failed to add post');
        }
      }}
    >
      <div className="flex flex-col gap-y-4 font-semibold">
        <input
          className="focus-visible:outline-dashed outline-offset-4 outline-2 outline-gray-700 rounded-xl px-4 py-3 bg-gray-900"
          id="title"
          name="title"
          type="text"
          placeholder="Title"
          disabled={addPost.isPending}
        />
        <textarea
          className="resize-none focus-visible:outline-dashed outline-offset-4 outline-2 outline-gray-700 rounded-xl px-4 py-3 bg-gray-900"
          id="text"
          name="text"
          placeholder="Text"
          disabled={addPost.isPending}
          rows={6}
        />

        <div className="flex justify-center">
          <input
            className="cursor-pointer bg-gray-900 p-2 rounded-md px-16"
            type="submit"
            disabled={addPost.isPending}
          />
          {addPost.error && (
            <p style={{ color: 'red' }}>{addPost.error.message}</p>
          )}
        </div>
      </div>
    </form>
  );
}

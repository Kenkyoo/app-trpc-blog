import { trpc } from '../../utils/trpc';
import type { inferProcedureInput } from '@trpc/server';
import type { AppRouter } from '~/server/routers/_app';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';

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
      <Card>
        <CardHeader>
          <CardTitle>
            <Input
              id="title"
              name="title"
              type="text"
              placeholder="Title"
              disabled={addPost.isPending}
            />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            id="text"
            name="text"
            placeholder="Text"
            disabled={addPost.isPending}
            rows={6}
          />
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full disabled={addPost.isPending}">
            Create
          </Button>
          {addPost.error && (
            <p style={{ color: 'red' }}>{addPost.error.message}</p>
          )}
        </CardFooter>
      </Card>
    </form>
  );
}

import 'server-only';

import { StackServerApp } from '@stackframe/react';

export const stackServerApp = new StackServerApp({
  tokenStore: 'nextjs-cookie',
});

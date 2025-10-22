'use client';

import * as React from 'react';
import NewPost from '~/components/posts/newPost';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from '~/components/ui/sidebar';
import { NavUser } from '~/components/nav-user';
import About from '~/components/about';

export function SidebarLeft({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader className="text-center my-5 px-4">
        <NavUser />
      </SidebarHeader>
      <SidebarContent className="px-2">
        <h4 className="text-center my-2">Create a new note</h4>
        <NewPost />
        <About />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

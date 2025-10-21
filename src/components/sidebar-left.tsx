'use client';

import * as React from 'react';
import NewPost from '~/components/posts/newPost';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from '~/components/ui/sidebar';
import ToggleTheme from "~/components/toggleTheme"

export function SidebarLeft({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <ToggleTheme />
      <SidebarHeader className="text-center mt-10">
        Create a new note
      </SidebarHeader>
      <SidebarContent>
        <NewPost />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

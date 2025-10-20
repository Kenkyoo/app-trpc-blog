// pages/dashboard-layout.tsx
import { SidebarLeft } from '~/components/sidebar-left';
import { SidebarRight } from '~/components/sidebar-right';
import { SidebarProvider, SidebarInset } from '~/components/ui/sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <SidebarLeft />
      <SidebarInset className="flex flex-col flex-1">{children}</SidebarInset>
      <SidebarRight />
    </SidebarProvider>
  );
}

import DashboardLayout from '~/layout/dashboard-layout';
import { Separator } from '~/components/ui/separator';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
} from '~/components/ui/breadcrumb';
import { SidebarTrigger } from '~/components/ui/sidebar';
import Posts from '~/components/posts/posts';
import { Header } from '~/components/header';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <Header />
      <header className="sticky top-0 flex h-14 items-center gap-2 bg-background px-3">
        <SidebarTrigger />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage>
                Project Management & Task Tracking
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4">
        <Posts />
      </div>
    </DashboardLayout>
  );
}

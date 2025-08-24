
'use client';

import { Timeline } from '@/components/timeline';
import { Sidebar, SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { SidebarNav } from '@/components/sidebar-nav';
import { categories } from '@/lib/data';
import { useRouter } from 'next/navigation';
import { PageTransition } from '@/components/page-transition';

export default function TimelinePage() {
  const router = useRouter();

  const handleCategoryClick = (categoryId: string) => {
    if (categoryId === 'All') {
      router.push('/');
    } else {
      router.push(`/?category=${categoryId}`);
    }
  };

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon" className="border-r">
        <SidebarNav categories={categories} onCategoryClick={handleCategoryClick} />
      </Sidebar>
      <SidebarInset>
        <PageTransition>
          <div className="p-4 sm:p-6 lg:p-8">
            <Timeline />
          </div>
        </PageTransition>
      </SidebarInset>
    </SidebarProvider>
  );
}

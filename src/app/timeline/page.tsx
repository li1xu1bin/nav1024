
'use client';

import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
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
          <div className="p-4 sm:p-6 lg:p-8 relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4"
              onClick={() => router.back()}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Timeline />
          </div>
        </PageTransition>
      </SidebarInset>
    </SidebarProvider>
  );
}

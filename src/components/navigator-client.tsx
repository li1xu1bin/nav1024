'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  SidebarProvider,
  Sidebar,
  SidebarInset,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { SidebarNav } from '@/components/sidebar-nav';
import { SearchBar } from '@/components/search-bar';
import { SiteList } from '@/components/site-list';
import type { Website, Category } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';
import Image from 'next/image';
import { PageTransition } from './page-transition';
import cn from 'classnames'; // Use classnames for conditional classes

type NavigatorClientProps = {
  websites: Website[];
  categories: Category[];
};

export function NavigatorClient({
  websites,
  categories,
}: NavigatorClientProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const categoryId = searchParams.get('category');
    if (categoryId) {
      setTimeout(() => {
        const element = document.getElementById(categoryId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300); // Delay to allow for page transition
    }
  }, [searchParams]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryClick = (categoryId: string) => {
    setTimeout(() => {
      if (categoryId === 'All') {
        scrollToTop();
        return;
      }
      const element = document.getElementById(categoryId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300); // Delay scroll to allow flip animation
  };

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon" className="border-r">
        <SidebarNav
          categories={categories}
          onCategoryClick={handleCategoryClick}
        />
      </Sidebar>
      <SidebarInset>
        <PageTransition>
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="relative w-full h-full overflow-hidden">
              {/* Main Content */}
              <div
                className={cn(
                  'transition-transform duration-500 ease-in-out',
                )}
              >
                <main className="flex-1">
                  <header className="flex flex-col items-center justify-center mb-16 relative">
                    <div className="mb-6 flex flex-col items-center gap-2 cursor-pointer">
                      <Image src="/logo.png" alt="Navigator Logo" width={180} height={180} className={cn("rounded-lg")}/>
                      <p className="text-sm text-muted-foreground">收集最新最实用的AI网站和工具</p>
                    </div>
                    <div className="w-full">
                      <SearchBar />
                    </div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2">
                      <SidebarTrigger className="md:hidden" />
                    </div>
                  </header>
                  <SiteList websites={websites} categories={categories} />
                </main>
              </div>
            </div>
          </div>
        </PageTransition>

        {showBackToTop && (
          <Button
            size="icon"
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 rounded-full shadow-lg"
          >
            <ArrowUp className="h-5 w-5" />
            <span className="sr-only">Back to Top</span>
          </Button>
        )}
      </SidebarInset>
    </SidebarProvider>
  );
}

'use client';

import {useState} from 'react';
import {
  SidebarProvider,
  Sidebar,
  SidebarInset,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import {SidebarNav} from '@/components/sidebar-nav';
import {SearchBar} from '@/components/search-bar';
import {SiteList} from '@/components/site-list';
import type {Website, Category} from '@/lib/data';

type NavigatorClientProps = {
  websites: Website[];
  categories: Category[];
};

export function NavigatorClient({
  websites,
  categories,
}: NavigatorClientProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryClick = (categoryId: string) => {
    if (categoryId === 'All') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const filteredWebsites = websites.filter((site) => {
    const searchMatch =
      site.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      site.description.toLowerCase().includes(searchTerm.toLowerCase());
    return searchMatch;
  });

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon" className="border-r">
        <SidebarNav
          categories={categories}
          onCategoryClick={handleCategoryClick}
        />
      </Sidebar>
      <SidebarInset>
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <header className="flex items-center justify-center mb-8 relative">
            <div className="w-full max-w-md">
              <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <SidebarTrigger className="md:hidden" />
            </div>
          </header>
          <SiteList websites={filteredWebsites} categories={categories} />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

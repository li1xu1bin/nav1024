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
import {AiSuggestions} from './ai-suggestions';

type NavigatorClientProps = {
  websites: Website[];
  categories: Category[];
};

export function NavigatorClient({
  websites,
  categories,
}: NavigatorClientProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredWebsites = websites.filter((site) => {
    const categoryMatch =
      activeCategory === 'All' || site.category === activeCategory;
    const searchMatch =
      site.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      site.description.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon" className="border-r">
        <SidebarNav
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </Sidebar>
      <SidebarInset>
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className="flex items-center gap-2 self-end sm:self-center">
              <AiSuggestions />
              <SidebarTrigger className="md:hidden" />
            </div>
          </header>
          <SiteList websites={filteredWebsites} categories={categories} />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

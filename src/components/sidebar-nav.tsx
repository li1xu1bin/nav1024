'use client';

import {
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import type {Category} from '@/lib/data';
import {Home} from 'lucide-react';
import {useState} from 'react';

type SidebarNavProps = {
  categories: Category[];
  onCategoryClick: (categoryId: string) => void;
};

export function SidebarNav({
  categories,
  onCategoryClick,
}: SidebarNavProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const handleClick = (categoryId: string, categoryName: string) => {
    setActiveCategory(categoryName);
    onCategoryClick(categoryId);
  };

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-3 px-3 py-4">
          <div className="p-2 rounded-lg bg-primary text-primary-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-navigation"
            >
              <polygon points="3 11 22 2 13 21 11 13 3 11" />
            </svg>
          </div>
          <h1 className="text-xl font-bold font-headline">Navigator</h1>
        </div>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => handleClick('All', 'All')}
              isActive={activeCategory === 'All'}
              className="w-full justify-start"
              tooltip="All Categories"
            >
              <Home className="h-4 w-4" />
              <span>All</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          {categories.map((category) => (
            <SidebarMenuItem key={category.id}>
              <SidebarMenuButton
                onClick={() => handleClick(category.id, category.name)}
                isActive={activeCategory === category.name}
                className="w-full justify-start"
                tooltip={category.name}
              >
                <span>{category.name}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </>
  );
}

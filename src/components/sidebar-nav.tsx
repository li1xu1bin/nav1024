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
import Image from 'next/image';

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
        <div className="flex items-center justify-center gap-3 px-3 py-4">
          <Image src="/logo.png" alt="Navigator Logo" width={120} height={120} className="rounded-lg" />
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

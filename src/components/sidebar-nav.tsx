'use client';

import {
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import type {Category} from '@/lib/data';
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
        <div 
          className="flex cursor-pointer items-center justify-center gap-3 px-3 py-4"
          onClick={() => handleClick('All', 'All')}
        >
          <Image src="/logo.png" alt="Navigator Logo" width={120} height={120} className="rounded-lg" />
        </div>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
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

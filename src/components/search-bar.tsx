'use client';

import {Input} from '@/components/ui/input';
import {Search} from 'lucide-react';

type SearchBarProps = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

export function SearchBar({searchTerm, setSearchTerm}: SearchBarProps) {
  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search for a website..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full bg-card pl-10"
      />
    </div>
  );
}

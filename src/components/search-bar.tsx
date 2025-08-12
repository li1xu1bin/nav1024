'use client';

import { useState, useRef, FormEvent, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

type SearchEngine = 'google' | 'bing' | 'baidu';

const searchEngines: { id: SearchEngine; name: string; url: string }[] = [
  { id: 'baidu', name: 'Baidu', url: 'https://www.baidu.com/s?wd=' },
  { id: 'google', name: 'Google', url: 'https://www.google.com/search?q=' },
  { id: 'bing', name: 'Bing', url: 'https://www.bing.com/search?q=' },
];

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEngine, setSelectedEngine] = useState<SearchEngine>('google');
  const [arrowStyle, setArrowStyle] = useState({});
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim() === '') return;

    const engine = searchEngines.find((e) => e.id === selectedEngine);
    if (engine) {
      const searchUrl = `${engine.url}${encodeURIComponent(searchTerm)}`;
      window.open(searchUrl, '_blank');
    }
  };
  
  const updateArrowPosition = (engine: SearchEngine) => {
    const index = searchEngines.findIndex(e => e.id === engine);
    const button = buttonsRef.current[index];
    if (button) {
      const buttonRect = button.getBoundingClientRect();
      const containerRect = button.parentElement!.getBoundingClientRect();
      const left = buttonRect.left - containerRect.left + buttonRect.width / 2;
      setArrowStyle({
        left: `${left}px`,
        transform: 'translateX(-50%)',
      });
    }
  };
  
  useEffect(() => {
    // We need to wait for the buttons to be rendered before we can get their position
    setTimeout(() => updateArrowPosition('google'), 100);
  }, []);

  const handleEngineChange = (engine: SearchEngine) => {
    setSelectedEngine(engine);
    updateArrowPosition(engine);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSearch} className="relative flex w-full items-center">
        <Input
          type="search"
          placeholder="Search the web..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-card h-12 pr-12 text-base"
        />
        <Button type="submit" size="icon" className="absolute right-1.5 top-1/2 -translate-y-1/2 h-9 w-9">
          <Search className="h-5 w-5" />
          <span className="sr-only">Search</span>
        </Button>
      </form>
      <div className="relative mt-4 flex justify-center items-center gap-8" ref={(el) => {
        if (el) {
            // Get all button elements that are direct children of the container
            buttonsRef.current = Array.from(el.children).filter(child => child.tagName === 'BUTTON') as HTMLButtonElement[];
        }
      }}>
        <div 
          className="absolute -top-2 w-0 h-0 border-x-8 border-x-transparent border-b-8 border-b-primary transition-all duration-300 ease-in-out rotate-180"
          style={arrowStyle}
        />
        {searchEngines.map(({ id, name }) => (
          <button
            key={id}
            onClick={() => handleEngineChange(id)}
            className={cn(
              "text-sm font-medium transition-colors",
              selectedEngine === id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
            )}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
}

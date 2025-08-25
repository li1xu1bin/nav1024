
'use client';

import React, { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

interface ScrapedData {
  text: string;
  href: string;
  imageUrl?: string;
}

export function Timeline() {
  const [data, setData] = useState<ScrapedData[]>([]);
  const [loading, setLoading] = useState(true);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/scrape');
        const result = await response.json();
        // console.log('API Response with Debug Info:', result);
        if (response.ok) {
          setData(result);
        } else {
          console.error('Failed to fetch data:', result.error);
          setData([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="p-6 sm:p-10 h-full w-full bg-white dark:bg-gray-900 rounded-lg">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">最新动态</h2>
        <button type="button" onClick={() => window.history.back()} className="bg-[#54A57C] text-white hover:bg-[#458B6C] font-medium py-2 px-4 rounded">
          返回
        </button>
      </div>
      <div className="relative border-l-2 border-gray-200 dark:border-gray-700">
        {loading ? (
          Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="mb-10 ml-6 flex items-center gap-4">
              <Skeleton className="h-[120px] w-[160px] rounded-md" />
              <div className="flex-1">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </div>
          ))
        ) : (
          data.map((event, index) => (
            <div key={index} className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z" />
                  <path d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <div className="flex items-start gap-4">
                {event.imageUrl && (
                  <Image
                    src={event.imageUrl}
                    alt={event.text}
                    width={isMobile ? 120 : 160}
                    height={isMobile ? 90 : 120}
                    className="rounded-md object-cover"
                  />
                )}
                <a href={event.href} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-gray-900 dark:text-white hover:underline hover:text-[#54A57C]">
                  {event.text}
                </a>
              </div>
            </div>
          ))
        )}
      </div>

      {showScrollToTop && (
        <Button
          size="icon"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 rounded-full shadow-lg"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}

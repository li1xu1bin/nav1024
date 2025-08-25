"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface NewsItem {
  text: string;
  href: string;
}

export function NewsTicker() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("/api/scrape");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: NewsItem[] = await response.json();
        setNews(data);
      } catch (error) {
        console.error("Failed to fetch news:", error);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    if (news.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % news.length);
      }, 3000); // 3 seconds

      return () => clearInterval(interval);
    }
  }, [news.length]);

  if (news.length === 0) {
    return null; // Or a loading spinner
  }

  return (
    <div className="relative w-full overflow-hidden h-[60px] my-2 flex items-center rounded-lg bg-[#c4f1dacf] mb-8">
      <div className="flex-shrink-0 text-lg text-gray-600 dark:text-gray-400 font-bold px-3">
        最新动态
      </div>
      <div className="flex-grow overflow-hidden h-full flex items-center">
        <a
          key={currentIndex}
          href={news[currentIndex].href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-gray-600 dark:text-gray-400 truncate px-3 w-full text-center hover:text-[#54A57C] "
        >
          {news[currentIndex].text}
        </a>
      </div>
      <Link href="/timeline" className="flex-shrink-0 text-lg text-gray-600 dark:text-gray-400 px-3 hover:text-[#54A57C]">
        →
      </Link>
    </div>
  );
}
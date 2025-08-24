import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

interface ScrapedData {
  text: string;
  href: string;
  imageUrl?: string;
}

async function scrapeAIBot(): Promise<ScrapedData[]> {
  try {
    const response = await fetch('https://ai-bot.cn/ai-research/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
    });

    if (!response.ok) {
      console.error(`Failed to fetch ai-bot.cn page with status: ${response.status}`);
      return [];
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    const results: ScrapedData[] = [];
    $('.cat_list .list-item').each((i, el) => {
      const element = $(el);
      const titleElement = element.find('.list-body a');
      const imageElement = element.find('a.media-content');
      
      const text = titleElement.text();
      const href = titleElement.attr('href');
      let imageUrl = imageElement.attr('data-src');

      if (imageUrl && imageUrl.startsWith('/')) {
        imageUrl = `https://ai-bot.cn${imageUrl}`;
      }

      if (text && href) {
        results.push({
          text,
          href,
          imageUrl,
        });
      }
    });
    return results;
  } catch (error) {
    console.error('Error scraping ai-bot.cn:', error);
    return [];
  }
}

async function scrapeIThome(): Promise<ScrapedData[]> {
  try {
    const response = await fetch('https://next.ithome.com/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
    });

    if (!response.ok) {
      console.error(`Failed to fetch ithome page with status: ${response.status}`);
      return [];
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    const results: ScrapedData[] = [];
    $('#list li').each((i, el) => {
      const element = $(el);
      const imageElement = element.find('a img');
      const titleElement = element.find('h2 a');
      
      const text = titleElement.text();
      const href = titleElement.attr('href');
      const imageUrl = imageElement.attr('data-original');

      if (text && href) {
        results.push({
          text,
          href,
          imageUrl,
        });
      }
    });
    return results;
  } catch (error) {
    console.error('Error scraping ithome:', error);
    return [];
  }
}

export async function GET() {
  try {
    const [aiBotData, itHomeData] = await Promise.all([
      scrapeAIBot(),
      scrapeIThome(),
    ]);

    const combinedData = [...aiBotData, ...itHomeData];

    return NextResponse.json(combinedData);
  } catch (error) {
    console.error('Scraping error:', error);
    return NextResponse.json(
      { error: 'An error occurred during scraping' },
      { status: 500 }
    );
  }
}

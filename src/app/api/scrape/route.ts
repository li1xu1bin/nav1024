import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

export async function GET() {
  try {
    const response = await fetch('https://ai-bot.cn/ai-research/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch the page' },
        { status: response.status }
      );
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    const data = $('.cat_list .list-item').map((i, el) => {
      const element = $(el);
      const titleElement = element.find('.list-body a');
      // The user wants to debug this selector
      const imageElement = element.find('a.media-content');
      let imageUrl = imageElement.attr('data-src');

      if (imageUrl && imageUrl.startsWith('/')) {
        imageUrl = `https://ai-bot.cn${imageUrl}`;
      }


      return {
        text: titleElement.text(),
        href: titleElement.attr('href'),
        imageUrl: imageUrl,
      };
    }).get();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Scraping error:', error);
    return NextResponse.json(
      { error: 'An error occurred during scraping' },
      { status: 500 }
    );
  }
}

import { NextResponse } from 'next/server';
import fetch from 'node-fetch';
import { parseStringPromise } from 'xml2js';

interface NewsSource {
  name: string;
  url: string;
  color: string;
  language: string;
}

interface NewsItem {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  source: string;
}

const NEWS_SOURCES: NewsSource[] = [
  // English News Sources
  {
    name: 'Times of India',
    url: 'https://timesofindia.indiatimes.com/rssfeedstopstories.cms',
    color: 'red',
    language: 'en'
  },
  {
    name: 'The Hindu',
    url: 'https://www.thehindu.com/news/feeder/default.rss',
    color: 'blue',
    language: 'en'
  },
  {
    name: 'NDTV',
    url: 'https://feeds.feedburner.com/ndtvnews-top-stories',
    color: 'purple',
    language: 'en'
  },
  {
    name: 'Economic Times',
    url: 'https://economictimes.indiatimes.com/rssfeedsdefault.cms',
    color: 'green',
    language: 'en'
  },
  // Hindi News Sources
  {
    name: 'Dainik Bhaskar',
    url: 'https://www.bhaskar.com/rss-v1--feed-news.xml',
    color: 'orange',
    language: 'hi'
  },
  {
    name: 'Amar Ujala',
    url: 'https://www.amarujala.com/rss/breaking-news.xml',
    color: 'yellow',
    language: 'hi'
  },
  {
    name: 'Navbharat Times',
    url: 'https://navbharattimes.indiatimes.com/rssfeedsdefault.cms',
    color: 'pink',
    language: 'hi'
  },
  // News Agencies
  {
    name: 'PTI',
    url: 'https://www.ptinews.com/feed/',
    color: 'cyan',
    language: 'en'
  },
  {
    name: 'ANI',
    url: 'https://aninews.in/rss/feed.xml',
    color: 'teal',
    language: 'en'
  },
  {
    name: 'IANS',
    url: 'https://ians.in/rss/feed.xml',
    color: 'purple',
    language: 'en'
  }
];

// Update SOURCE_COLORS in page.tsx to match these new sources
const SOURCE_COLORS = {
  'Times of India': 'red',
  'The Hindu': 'blue',
  'NDTV': 'purple',
  'Economic Times': 'green',
  'Dainik Bhaskar': 'orange',
  'Amar Ujala': 'yellow',
  'Navbharat Times': 'pink',
  'PTI': 'cyan',
  'ANI': 'teal',
  'IANS': 'purple'
};

// Update mock data to include Hindi and agency news
const MOCK_NEWS: NewsItem[] = [
  {
    title: 'India Reports Strong Economic Growth in Q1',
    description: 'The Indian economy showed resilience with 7.2% growth in the first quarter despite global challenges.',
    link: 'https://example.com/business/india-economy',
    pubDate: new Date().toISOString(),
    source: 'Times of India'
  },
  {
    title: 'नई शिक्षा नीति पर सरकार का बड़ा फैसला',
    description: 'केंद्र सरकार ने नई शिक्षा नीति के तहत पाठ्यक्रम में बड़े बदलाव की घोषणा की है।',
    link: 'https://example.com/education/new-policy',
    pubDate: new Date().toISOString(),
    source: 'Dainik Bhaskar'
  },
  {
    title: 'New Tech Hub Inaugurated in Bengaluru',
    description: 'A state-of-the-art technology center opened in Bengaluru, expected to create 10,000 jobs.',
    link: 'https://example.com/tech/bengaluru-hub',
    pubDate: new Date().toISOString(),
    source: 'The Hindu'
  },
  {
    title: 'सरकार ने नई रिन्यूएबल एनर्जी नीति की घोषणा की',
    description: 'कैबिनेट ने सौर और पवन ऊर्जा उत्पादन को बढ़ावा देने के लिए व्यापक नीति को मंजूरी दी।',
    link: 'https://example.com/policy/renewable-energy',
    pubDate: new Date().toISOString(),
    source: 'Amar Ujala'
  },
  {
    title: 'Stock Market Reaches All-Time High',
    description: 'Indian stock indices surged to record levels powered by tech and banking stocks.',
    link: 'https://example.com/markets/record-high',
    pubDate: new Date().toISOString(),
    source: 'Economic Times'
  },
  {
    title: 'भारत ने नए रक्षा सौदे पर हस्ताक्षर किए',
    description: 'भारत ने आधुनिक रक्षा उपकरणों की खरीद के लिए नए समझौते पर हस्ताक्षर किए।',
    link: 'https://example.com/defense/new-deals',
    pubDate: new Date().toISOString(),
    source: 'Navbharat Times'
  },
  {
    title: 'PTI: Major Policy Reforms Expected in Budget',
    description: 'Government sources indicate significant economic reforms in the upcoming budget session.',
    link: 'https://example.com/budget/reforms',
    pubDate: new Date().toISOString(),
    source: 'PTI'
  },
  {
    title: 'ANI: India-US Strategic Partnership Strengthens',
    description: 'Bilateral ties between India and the United States reach new heights with latest agreements.',
    link: 'https://example.com/diplomacy/india-us',
    pubDate: new Date().toISOString(),
    source: 'ANI'
  },
  {
    title: 'IANS: New Space Mission Announced',
    description: 'ISRO announces plans for a new lunar mission in collaboration with international partners.',
    link: 'https://example.com/space/new-mission',
    pubDate: new Date().toISOString(),
    source: 'IANS'
  }
];

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const language = searchParams.get('language') || 'en';

    const newsPromises = NEWS_SOURCES.map(async (source) => {
      try {
        const response = await fetch(source.url, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
          }
        });
        
        if (!response.ok) {
          console.error(`Failed to fetch from ${source.name}: ${response.statusText}`);
          return [];
        }

        const xml = await response.text();
        const result = await parseStringPromise(xml);
        
        if (!result.rss?.channel?.[0]?.item) {
          console.error(`No items found in ${source.name} feed`);
          return [];
        }

        return result.rss.channel[0].item.map((item: any) => ({
          title: item.title[0],
          description: item.description?.[0] || '',
          link: item.link[0],
          pubDate: item.pubDate?.[0] || new Date().toISOString(),
          source: source.name
        }));
      } catch (error) {
        console.error(`Error parsing data from ${source.name}:`, error);
        return [];
      }
    });

    const allNews = await Promise.all(newsPromises);
    const flattenedNews = allNews.flat();

    // Sort by date and return the latest 20 items
    const sortedNews = flattenedNews
      .sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())
      .slice(0, 20);

    return NextResponse.json(sortedNews);
  } catch (error) {
    console.error('Error in news API:', error);
    return NextResponse.json(
      { error: 'Failed to fetch news', items: MOCK_NEWS },
      { status: 500 }
    );
  }
} 
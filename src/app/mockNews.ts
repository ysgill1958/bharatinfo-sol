// Mock news data for fallback
export const MOCK_NEWS: NewsItem[] = [
  {
    title: 'India Reports Strong Economic Growth in Q1',
    description: 'The Indian economy showed resilience with 7.2% growth in the first quarter despite global challenges.',
    link: 'https://example.com/business/india-economy',
    pubDate: new Date().toISOString(),
    source: 'Times of India',
    sourceColor: 'blue',
    language: 'en'
  },
  {
    title: 'New Tech Hub Inaugurated in Bengaluru',
    description: 'A state-of-the-art technology center opened in Bengaluru, expected to create 10,000 jobs.',
    link: 'https://example.com/tech/bengaluru-hub',
    pubDate: new Date().toISOString(),
    source: 'The Hindu',
    sourceColor: 'green',
    language: 'en'
  },
  {
    title: 'Stock Market Reaches All-Time High',
    description: 'Indian stock indices surged to record levels powered by tech and banking stocks.',
    link: 'https://example.com/markets/record-high',
    pubDate: new Date().toISOString(),
    source: 'Economic Times',
    sourceColor: 'orange',
    language: 'en'
  },
  {
    title: 'Major Policy Reforms Expected in Budget',
    description: 'Government sources indicate significant economic reforms in the upcoming budget session.',
    link: 'https://example.com/budget/reforms',
    pubDate: new Date().toISOString(),
    source: 'PTI',
    sourceColor: 'teal',
    language: 'en'
  },
  {
    title: 'India-US Strategic Partnership Strengthens',
    description: 'Bilateral ties between India and the United States reach new heights with latest agreements.',
    link: 'https://example.com/diplomacy/india-us',
    pubDate: new Date().toISOString(),
    source: 'ANI',
    sourceColor: 'purple',
    language: 'en'
  },
  {
    title: 'भारत की अर्थव्यवस्था में मजबूत वृद्धि',
    description: 'वैश्विक चुनौतियों के बावजूद भारतीय अर्थव्यवस्था ने पहली तिमाही में 7.2% की वृद्धि दर्ज की।',
    link: 'https://example.com/business/india-economy-hi',
    pubDate: new Date().toISOString(),
    source: 'दैनिक भास्कर',
    sourceColor: 'blue',
    language: 'hi'
  },
  {
    title: 'बेंगलुरु में नए टेक हब का उद्घाटन',
    description: 'बेंगलुरु में अत्याधुनिक प्रौद्योगिकी केंद्र खोला गया, जिससे 10,000 नौकरियां पैदा होने की उम्मीद है।',
    link: 'https://example.com/tech/bengaluru-hub-hi',
    pubDate: new Date().toISOString(),
    source: 'हिन्दू',
    sourceColor: 'green',
    language: 'hi'
  },
  {
    title: 'शेयर बाजार सर्वकालिक उच्च स्तर पर',
    description: 'भारतीय शेयर सूचकांक टेक और बैंकिंग स्टॉक्स से संचालित होकर रिकॉर्ड स्तर पर पहुंचे।',
    link: 'https://example.com/markets/record-high-hi',
    pubDate: new Date().toISOString(),
    source: 'इकोनॉमिक टाइम्स हिंदी',
    sourceColor: 'orange',
    language: 'hi'
  },
  {
    title: 'बजट में प्रमुख नीतिगत सुधारों की उम्मीद',
    description: 'सरकारी सूत्रों के अनुसार आगामी बजट सत्र में महत्वपूर्ण आर्थिक सुधारों की संभावना है।',
    link: 'https://example.com/budget/reforms-hi',
    pubDate: new Date().toISOString(),
    source: 'पीटीआई',
    sourceColor: 'teal',
    language: 'hi'
  },
  {
    title: 'भारत-अमेरिका रणनीतिक साझेदारी मजबूत',
    description: 'भारत और संयुक्त राज्य अमेरिका के बीच द्विपक्षीय संबंध नवीनतम समझौतों के साथ नई ऊंचाइयों पर पहुंचे।',
    link: 'https://example.com/diplomacy/india-us-hi',
    pubDate: new Date().toISOString(),
    source: 'एएनआई',
    sourceColor: 'purple',
    language: 'hi'
  }
];

export type NewsItem = {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  source: string;
  sourceColor?: string;
  language?: string;
  content?: string;
  image?: string;
}; 
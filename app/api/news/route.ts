import { NextResponse } from 'next/server';
import axios from 'axios';
import { parseStringPromise } from 'xml2js';

export async function GET() {
  try {
    const newsApiKey = process.env.NEWS_API_KEY;
    const guardianApiKey = process.env.GUARDIAN_API_KEY;
    const currentsApiKey = process.env.CURRENTS_API_KEY;

    // Fetch dari NewsAPI
    const newsApiPromise = fetch(`https://newsapi.org/v2/top-headlines?country=id&pageSize=10&apiKey=${newsApiKey}`)
      .then((res) => res.json())
      .then((data) =>
        (data.articles ?? [])
          .map((item: any, i: number) => ({
            id: `newsapi-${i}`,
            title: item.title || 'Tanpa Judul',
            imageUrl: item.urlToImage?.trim() ?? '',
            time: new Date(item.publishedAt).toLocaleString('id-ID'),
            url: item.url,
            source: 'NewsAPI',
          }))
          .filter((item: any) => item.imageUrl.startsWith('http'))
      );

    // Fetch dari The Guardian
    const guardianPromise = fetch(`https://content.guardianapis.com/search?show-fields=thumbnail&api-key=${guardianApiKey}`)
      .then((res) => res.json())
      .then((data) =>
        (data.response?.results ?? [])
          .map((item: any, i: number) => ({
            id: `guardian-${i}`,
            title: item.webTitle || 'Tanpa Judul',
            imageUrl: item.fields?.thumbnail?.trim() ?? '',
            time: new Date(item.webPublicationDate).toLocaleString('id-ID'),
            url: item.webUrl,
            source: 'The Guardian',
          }))
          .filter((item: any) => item.imageUrl.startsWith('http'))
      );

    // Fetch dari Currents
    const currentsPromise = fetch(`https://api.currentsapi.services/v1/latest-news?apiKey=${currentsApiKey}`)
      .then((res) => res.json())
      .then((data) =>
        (data.news ?? [])
          .map((item: any, i: number) => ({
            id: `currents-${i}`,
            title: item.title || 'Tanpa Judul',
            imageUrl: item.image?.trim() ?? '',
            time: new Date(item.published).toLocaleString('id-ID'),
            url: item.url,
            source: 'Currents',
          }))
          .filter((item: any) => item.imageUrl.startsWith('http'))
      );

    // Fetch dari BBC RSS
    const fetchBbc = async () => {
      try {
        const res = await axios.get('https://feeds.bbci.co.uk/news/rss.xml');
        const xml = res.data;
        const data = await parseStringPromise(xml);
        const items = data.rss?.channel?.[0]?.item ?? [];

        return items
          .map((item: any, i: number) => ({
            id: `bbc-${i}`,
            title: item.title?.[0] || 'Tanpa Judul',
            imageUrl: extractImage(item),
            time: new Date(item.pubDate?.[0]).toLocaleString('id-ID'),
            url: item.link?.[0],
            source: 'BBC',
          }))
          .filter((item: any) => item.imageUrl.startsWith('http'));
      } catch (err) {
        console.error('Error fetch BBC RSS:', err);
        return [];
      }
    };

    const extractImage = (item: any): string => {
      const mediaThumb = item['media:thumbnail']?.[0]?.$?.url;
      const mediaContent = item['media:content']?.[0]?.$?.url;
      const enclosure = item.enclosure?.[0]?.$?.url;
      const url = mediaThumb || mediaContent || enclosure;
      return url?.trim()?.startsWith('http') ? url : '';
    };

    const [newsApiData, guardianData, currentsData, bbcData] = await Promise.all([
      newsApiPromise,
      guardianPromise,
      currentsPromise,
      fetchBbc(),
    ]);

    const merged = [...newsApiData, ...guardianData, ...currentsData, ...bbcData];

    return NextResponse.json(merged);
  } catch (error) {
    console.error('[API /news] ERROR:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

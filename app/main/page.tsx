// app/main/page.tsx

import axios from "axios";
import { useEffect, useState } from "react";

const NewsPage = () => {
  const [newsData, setNewsData] = useState<any[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Ambil berita dari 3 portal berbeda (gunakan API nyata atau mock)
        const portal1 = await axios.get("/api/news/portal1");
        const portal2 = await axios.get("/api/news/portal2");
        const portal3 = await axios.get("/api/news/portal3");
        setNewsData([...portal1.data, ...portal2.data, ...portal3.data]);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <h1>Berita Utama</h1>
      <ul>
        {newsData.map((news, index) => (
          <li key={index}>
            <a href={`/news/${news.id}`}>
              <h2>{news.title}</h2>
              <img src={news.imageUrl} alt={news.title} />
              <p>{news.time}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsPage;

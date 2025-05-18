'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

type NewsItem = {
  id: string;
  title: string;
  imageUrl: string;
  time: string;
  url: string;
  source: string;
};

export default function NewsList() {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get('/api/news');
        setNews(res.data);
      } catch (err) {
        console.error('Gagal mengambil berita:', err);
      }
    };

    fetchNews();
  }, []);

  return (
    <div style={styles.wrapper}>
      <h2 style={styles.heading}>Berita Utama</h2>
      <div style={styles.gridContainer}>
        {news.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="grid-item"
            style={styles.gridItem}
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              style={styles.image}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = 'https://via.placeholder.com/400x200?text=No+Image';
              }}
            />
            <div style={styles.cardBody}>
              <h3 style={styles.title}>{item.title}</h3>
              <p style={styles.meta}>
                {item.time} — <strong>{item.source}</strong>
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    maxWidth: '1200px',
    margin: '40px auto',
    padding: '0 20px',
  },
  heading: {
    fontSize: '28px',
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: '30px',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    alignItems: 'start',
  },
  gridItem: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    overflow: 'hidden',
    textDecoration: 'none',
    color: '#000',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  image: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    display: 'block',
  },
  cardBody: {
    padding: '15px',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '16px',
    fontWeight: 600,
    marginBottom: '10px',
    lineHeight: 1.4,
  },
  meta: {
    fontSize: '13px',
    color: '#666',
  },
};

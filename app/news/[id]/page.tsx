import { notFound } from 'next/navigation';

const mockNews = [
  {
    id: '1',
    title: 'Berita A: Ekonomi Tumbuh',
    imageUrl: 'https://via.placeholder.com/400x200',
    time: '2025-05-12 08:00',
    content: 'Ekonomi nasional menunjukkan pertumbuhan...',
  },
  {
    id: '2',
    title: 'Berita B: Teknologi AI',
    imageUrl: 'https://via.placeholder.com/400x200',
    time: '2025-05-12 09:00',
    content: 'Kecerdasan buatan kini mendominasi...',
  },
  {
    id: '3',
    title: 'Berita C: Cuaca Ekstrem',
    imageUrl: 'https://via.placeholder.com/400x200',
    time: '2025-05-12 10:00',
    content: 'Beberapa wilayah dilanda badai hebat...',
  },
];

export default function Detail({ params }: { params: { id: string } }) {
  const berita = mockNews.find((b) => b.id === params.id);
  if (!berita) notFound();

  return (
    <div style={{ padding: 24 }}>
      <h1>{berita.title}</h1>
      <img src={berita.imageUrl} alt={berita.title} />
      <p>{berita.time}</p>
      <p>{berita.content}</p>
    </div>
  );
}

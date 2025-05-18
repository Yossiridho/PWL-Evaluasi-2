import './globals.css';
import { Providers } from './providers';

export const metadata = {
  title: 'Portal Berita',
  description: 'Berita utama dari berbagai sumber dengan login OAuth2',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

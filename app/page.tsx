import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import NewsList from './components/NewsList';
import Navbar from './components/Navbar';

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login');
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom right, #e0eafc, #cfdef3)',
      }}
    >
      <Navbar />
      <NewsList />
    </main>

  );
}

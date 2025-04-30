import { useParams } from 'react-router-dom';
import Header from '../components/Header';

export default function UserPage() {
  const { userId } = useParams();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16 px-4 max-w-screen-xl mx-auto">
        <h1>User ID: {userId}</h1>
      </main>
    </div>
  );
} 
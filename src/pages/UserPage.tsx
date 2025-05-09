import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function UserPage() {
  const { userId } = useParams();

  return (
    <div className="bg-white">
      <Header />
      <main className="pt-16 px-4 max-w-screen-xl mx-auto min-h-screen">
        <h1>User ID: {userId}</h1>
      </main>
      <Footer />
    </div>
  );
} 
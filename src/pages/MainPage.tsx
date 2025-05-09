import Footer from '../components/Footer';
import Header from '../components/Header';

export default function MainPage() {
  return (
    <div className="bg-white">
      <Header />
      <main className="pt-16 px-4 max-w-screen-xl mx-auto min-h-screen">
        <h1>Hello, World!</h1>
      </main>
      <Footer />
    </div>
  );
}
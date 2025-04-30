import Header from '../components/Header';

export default function MainPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16 px-4 max-w-screen-xl mx-auto">
        <h1>Hello, World!</h1>
      </main>
    </div>
  );
}
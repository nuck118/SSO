import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <header className="text-center py-10 bg-gray-100">
        <h1 className="text-4xl font-bold">Welcome to the 2025 Library</h1>
        <p className="text-lg mt-2">Explore books, journals, and digital content.</p>
      </header>
    </div>
  );
}
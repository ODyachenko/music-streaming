import Header from '@/components/Header/Header';
import Navbar from '@/components/Navbar/Navbar';

export default function Home() {
  return (
    <main className="main">
      <div className="container">
        <Navbar />
        <Header />
      </div>
    </main>
  );
}

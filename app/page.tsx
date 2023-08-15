import Header from '@/components/Header/Header';
import Navbar from '@/components/Navbar/Navbar';
import TopCharts from '@/components/TopCharts/TopCharts';

export default function Home() {
  return (
    <main className="main">
      <div className="container">
        <Navbar />
        <Header />
        <TopCharts />
      </div>
    </main>
  );
}

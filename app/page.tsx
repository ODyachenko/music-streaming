import Header from '@/components/Header/Header';
import Navbar from '@/components/Navbar/Navbar';
import Player from '@/components/Player/Player';
import Releases from '@/components/Releases/Releases';
import TopCharts from '@/components/TopCharts/TopCharts';

export default function Home() {
  return (
    <main className="main">
      <div className="container">
        <Navbar />
        <Header />
        <TopCharts />
        <Releases />
        <Player />
      </div>
    </main>
  );
}

import Navbar from '@/components/Navbar/Navbar';
import Header from '@/components/Header/Header';
import TopCharts from '@/components/TopCharts/TopCharts';
import Releases from '@/components/Releases/Releases';
import Player from '@/components/Player/Player';

export default function Home() {
  return (
    <main className="main">
      <div className="container">
        <Navbar />
        <div className="main__inner">
          <Header />
          <TopCharts />
        </div>
        <Releases />
        <Player />
      </div>
    </main>
  );
}

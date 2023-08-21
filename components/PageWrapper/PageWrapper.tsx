import Navbar from '../Navbar/Navbar';
import Player from '../Player/Player';

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="main">
      <div className="container">
        <Navbar />
        {children}
        <Player />
      </div>
    </main>
  );
}

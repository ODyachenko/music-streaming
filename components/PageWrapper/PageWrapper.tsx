'use client';

import { useAppSelector } from '@/hooks/hooks';
import Navbar from '../Navbar/Navbar';
import Player from '../Player/Player';
import type { RootState, AppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isShow } = useAppSelector((state: RootState) => state.player);

  return (
    <main className="main">
      <div className="container">
        <Navbar />
        {children}
        {isShow && <Player />}
      </div>
    </main>
  );
}

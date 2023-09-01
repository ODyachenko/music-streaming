'use client';
import { FC, ReactNode } from 'react';
import type { RootState } from '../../redux/store';
import { Navbar } from '../Navbar/Navbar';
import { Player } from '../Player/Player';
import { useAppSelector } from '@/hooks/hooks';

type PageWrapperProps = {
  children: ReactNode;
};

export const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
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
};

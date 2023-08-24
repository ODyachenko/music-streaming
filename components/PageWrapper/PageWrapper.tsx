'use client';

import { FC, ReactNode } from 'react';
import { useAppSelector } from '@/hooks/hooks';
import { Navbar } from '../Navbar/Navbar';
import { Player } from '../Player/Player';
import type { RootState, AppDispatch } from '../../redux/store';

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

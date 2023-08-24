import { FC } from 'react';
import { Hero } from './Hero';
import './style.scss';

export const Header: FC = () => {
  return (
    <header className="header">
      <Hero />
    </header>
  );
};

import React from 'react';
import './style.scss';
import Hero from './Hero';

export default function Header() {
  return (
    <header className="header">
      <div className="header__hero">
        <Hero />
      </div>
    </header>
  );
}

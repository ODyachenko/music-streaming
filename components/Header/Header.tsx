import Image from '@/node_modules/next/image';
import React from 'react';
import hero from '@/public/header_hero.png';

export default function Header() {
  return (
    <header className="header">
      <div className="header__hero">
        <Image src={hero} priority alt="hero" />
      </div>
    </header>
  );
}

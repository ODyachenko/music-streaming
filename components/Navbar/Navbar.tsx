'use client';

import Image from '@/node_modules/next/image';
import { useState } from 'react';
import logo from '../../public/logo.svg';
import NavList from './NavList';
import './style.scss';

export default function Navbar() {
  const [showMenu, setShowMenu]: React.ComponentState = useState(false);

  return (
    <nav className="nav">
      <Image src={logo} width={34} height={34} priority alt="Logo" />
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="nav__burger"
      ></button>
      <NavList showMenu={showMenu} />
    </nav>
  );
}

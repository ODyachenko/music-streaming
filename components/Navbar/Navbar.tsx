'use client';

import Image from '@/node_modules/next/image';
import { useEffect, useState } from 'react';
import logo from '../../public/logo.svg';
import NavList from './NavList';
import './style.scss';

export default function Navbar() {
  const [showMenu, setShowMenu]: React.ComponentState = useState(false);

  useEffect(() => {
    const main: Element | null = document.querySelector('.main');

    if (showMenu) {
      main && main.classList.add('active');
      return;
    }
    main && main.classList.remove('active');
  }, [showMenu]);

  function onClickHandler() {
    setShowMenu(!showMenu);
  }

  return (
    <nav className="nav">
      <Image src={logo} width={34} height={34} priority alt="Logo" />
      <button
        onClick={onClickHandler}
        className={`nav__burger ${showMenu ? 'active' : ''}`}
      >
        <span className="nav__burger-item"></span>
      </button>
      <NavList showMenu={showMenu} setShowMenu={setShowMenu} />
      <span className="nav__overlay"></span>
    </nav>
  );
}

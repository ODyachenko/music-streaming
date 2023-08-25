'use client';
import { FC, useEffect, useState } from 'react';
import Image from '@/node_modules/next/image';
import { NavList } from './NavList';
import logo from '../../public/logo.svg';
import './style.scss';
import Link from '@/node_modules/next/link';

export const Navbar: FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const main: Element | null = document.querySelector('.main');

    if (showMenu) {
      main?.classList.add('active');
      return;
    }
    main?.classList.remove('active');
  }, [showMenu]);

  function onClickHandler() {
    setShowMenu(!showMenu);
  }

  return (
    <nav className="nav">
      <Link href="/">
        <Image
          className="nav__logo"
          src={logo}
          width={34}
          height={34}
          priority
          alt="Logo"
        />
      </Link>
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
};

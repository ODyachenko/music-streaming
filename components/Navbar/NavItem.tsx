import React, { FC } from 'react';
import Link from '@/node_modules/next/link';
import { usePathname } from 'next/navigation';
import { INavLinks } from '@/@types';

export const NavItem: FC<INavLinks> = ({ icon, value, path }) => {
  const pathname = usePathname();

  return (
    <li className={`nav__list-item ${pathname === path ? 'active' : ''}`}>
      <Link href={path} aria-label={value}>
        {icon} <span>{value}</span>
      </Link>
    </li>
  );
};

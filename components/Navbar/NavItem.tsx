import INavLinks from '@/@types';
import Link from '@/node_modules/next/link';
import React from 'react';

export default function NavItem({ icon, value, path }: INavLinks) {
  return (
    <li className="nav__list-item">
      <Link href={path}>
        {icon} <span>{value}</span>
      </Link>
    </li>
  );
}

import { usePathname } from 'next/navigation';
import INavLinks from '@/@types';
import Link from '@/node_modules/next/link';
import React, { useState } from 'react';

export default function NavItem({ icon, value, path }: INavLinks) {
  const pathname = usePathname();

  return (
    <li className={`nav__list-item ${pathname === path ? 'active' : ''}`}>
      <Link href={path}>
        {icon} <span>{value}</span>
      </Link>
    </li>
  );
}

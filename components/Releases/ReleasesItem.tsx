import React, { FC } from 'react';
import Image from '@/node_modules/next/image';
import { IReleasesList } from '@/@types';

export default function ReleasesItem({ img, title }: IReleasesList) {
  return (
    <li className="releases__list-item">
      <Image className="releases__list-cover" src={img} alt={title} />
      <h3 className="releases__list-title">{title}</h3>
    </li>
  );
}

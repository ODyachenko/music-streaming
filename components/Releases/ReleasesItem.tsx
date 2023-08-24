import { FC } from 'react';
import Image from '@/node_modules/next/image';
import { IReleasesList } from '@/@types';

export const ReleasesItem: FC<IReleasesList> = ({ img, title }) => {
  return (
    <li className="releases__list-item">
      <Image className="releases__list-cover" src={img} alt={title} />
      <h3 className="releases__list-title">{title}</h3>
    </li>
  );
};

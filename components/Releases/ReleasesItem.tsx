import { FC } from 'react';
import Image from '@/node_modules/next/image';
import Link from '@/node_modules/next/link';
import { IReleasesList } from '@/@types';

export const ReleasesItem: FC<IReleasesList> = ({ id, img, title, artist }) => {
  return (
    <li className="releases__list-item">
      <Link href={`/album/${id}`}>
        <Image
          className="releases__list-cover"
          src={img}
          alt={title}
          width={300}
          height={300}
        />
        <h2 className="releases__list-title">{artist}</h2>
        <h3 className="releases__list-artist">{title}</h3>
      </Link>
    </li>
  );
};

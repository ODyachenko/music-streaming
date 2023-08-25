import { FC } from 'react';
import Image from '@/node_modules/next/image';
import Link from '@/node_modules/next/link';

type CollectionListProps = {
  albumId: string;
  albumCover: string;
  name: string;
  artist: string;
};

export const CollectionLIstItem: FC<CollectionListProps> = ({
  albumId,
  albumCover,
  name,
  artist,
}) => {
  return (
    <li className="collection__list-item">
      <Link href={`/album/${albumId}`}>
        <Image
          className="collection__list-img"
          src={albumCover}
          alt={name}
          width={300}
          height={300}
        />
        <div className="collection__list-info">
          <h2 className="collection__list-name">{name}</h2>
          <span className="collection__list-artist">{artist}</span>
        </div>
      </Link>
    </li>
  );
};

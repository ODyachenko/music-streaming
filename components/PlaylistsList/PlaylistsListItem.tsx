import Image from '@/node_modules/next/image';
import Link from '@/node_modules/next/link';
import React, { FC } from 'react';

type PlaylistsListItemProps = {
  id: string;
  img: string;
  name: string;
};

export const PlaylistsListItem: FC<PlaylistsListItemProps> = ({
  id,
  img,
  name,
}) => {
  return (
    <li className="playlists__list-track">
      <Link href={`/playlist/${id}`}>
        <Image
          className="playlists__list-img"
          src={img}
          alt={name}
          width={230}
          height={230}
        />
        <h2 className="playlists__list-name">{name}</h2>
      </Link>
    </li>
  );
};

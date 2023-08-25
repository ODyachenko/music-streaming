import { FC } from 'react';
import Image from '@/node_modules/next/image';
import Link from '@/node_modules/next/link';
import { getConvertTime } from '@/utils/getConvertTime';
import { ChartsItemType } from '@/@types';

export const ChartsItem: FC<ChartsItemType> = ({
  id,
  img,
  title,
  artist,
  tracks,
  duration,
}) => {
  return (
    <li className="charts__list-item">
      <Link href={`/album/${id}`}>
        <Image
          className="charts__list--cover"
          src={img}
          alt={title}
          width={108}
          height={99}
        />
        <div className="charts__list--info">
          <h3 className="charts__list--title">{title}</h3>
          <span className="charts__list--artist">{artist}</span>
          <span className="charts__list--duration">
            {tracks} songs - {getConvertTime(duration, 'album')}
          </span>
        </div>
      </Link>
    </li>
  );
};

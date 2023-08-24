import { FC } from 'react';
import Image from '@/node_modules/next/image';
import { collectionListType } from '@/@types';

export const CollectionLIstItem: FC<collectionListType> = ({
  img,
  name,
  artist,
}) => {
  return (
    <li className="collection__list-item">
      <Image className="collection__list-img" src={img} alt={name} />
      <div className="collection__list-info">
        <h2 className="collection__list-name">{name}</h2>
        <span className="collection__list-artist">{artist}</span>
      </div>
    </li>
  );
};

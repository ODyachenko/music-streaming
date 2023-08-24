import { FC } from 'react';
import { CollectionLIstItem } from './CollectionLIstItem';
import albumCover from '@/public/collection_cover.png';
import { collectionListType } from '@/@types';

const collectionList: collectionListType[] = [
  {
    id: 1,
    img: albumCover,
    name: 'Limits',
    artist: 'John Watts',
  },
  {
    id: 2,
    img: albumCover,
    name: 'Limits',
    artist: 'John Watts',
  },
  {
    id: 3,
    img: albumCover,
    name: 'Limits',
    artist: 'John Watts',
  },
  {
    id: 4,
    img: albumCover,
    name: 'Limits',
    artist: 'John Watts',
  },
];

export const CollectionLIst: FC = () => {
  return (
    <ul className="collection__list">
      {collectionList.map((item) => (
        <CollectionLIstItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

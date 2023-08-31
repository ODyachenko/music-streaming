import { FC } from 'react';
import { useGetCollectionQuery } from '@/redux/api/collection.api';
import { CollectionLIstItem } from './CollectionLIstItem';
import { IAddCollectionAlbum } from '@/@types';
import { CollectionSkeleton } from './CollectionSkeleton';

type CollectionLIstProps = {
  type: string;
};

export const CollectionLIst: FC<CollectionLIstProps> = ({ type }) => {
  const { data, isLoading, error }: any = useGetCollectionQuery(type);

  return (
    <ul className="collection__list">
      {data
        ? data.map((item: IAddCollectionAlbum) => (
            <CollectionLIstItem key={item.albumId} {...item} />
          ))
        : isLoading
        ? [...new Array(4)].map((_, index) => (
            <li className="collection__list-item" key={index}>
              <CollectionSkeleton />
            </li>
          ))
        : console.error(error)}
    </ul>
  );
};

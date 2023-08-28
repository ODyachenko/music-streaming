import { FC } from 'react';
import { useGetCollectionQuery } from '@/redux/api/collection.api';
import { CollectionLIstItem } from './CollectionLIstItem';
import { IAddCollectionAlbum } from '@/@types';

type CollectionLIstProps = {
  type: string;
};

export const CollectionLIst: FC<CollectionLIstProps> = ({ type }) => {
  const { data, isLoading, error } = useGetCollectionQuery(type);

  return (
    <ul className="collection__list">
      {data?.map((item: IAddCollectionAlbum) => (
        <CollectionLIstItem key={item.albumId} {...item} />
      ))}
    </ul>
  );
};

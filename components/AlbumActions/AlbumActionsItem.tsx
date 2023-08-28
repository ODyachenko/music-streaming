import { FC } from 'react';
import {
  useAddToCollectionMutation,
  useAddToLikedMutation,
  useDeleteFromCollectionMutation,
  useDeleteFromLikedMutation,
  useGetCollectionQuery,
} from '@/redux/api/collection.api';
import { IAddCollectionAlbum } from '@/@types';

type AlbumActionsItemProps = {
  albumId: string;
  img: string;
  albumCover: string;
  name: string;
  artist: string;
  value: string;
  action: string;
};

export const AlbumActionsItem: FC<AlbumActionsItemProps> = ({
  albumId,
  img,
  albumCover,
  name,
  artist,
  value,
  action,
}) => {
  const getLiked = useGetCollectionQuery('liked');
  const getCollection = useGetCollectionQuery('collection');
  const [addToCollection] = useAddToCollectionMutation();
  const [removeCollection] = useDeleteFromCollectionMutation();
  const [addToLiked] = useAddToLikedMutation();
  const [removeLiked] = useDeleteFromLikedMutation();

  const likedAlbum = getLiked.data?.find(
    (item: IAddCollectionAlbum) => item.albumId === albumId
  );
  const collectionAlbum = getCollection.data?.find(
    (item: IAddCollectionAlbum) => item.albumId === albumId
  );

  function handleClick(action: string) {
    switch (action) {
      case 'PlayAll':
        break;
      case 'AddToColletion':
        collectionAlbum
          ? removeCollection(collectionAlbum.id)
          : addToCollection(
              { albumId, albumCover, name, artist },
              'collection'
            );
        break;
      case 'Like':
        likedAlbum
          ? removeLiked(likedAlbum.id)
          : addToLiked({ albumId, albumCover, name, artist }, 'liked');
        break;
    }
  }

  return (
    <li className={`album__actions-item`} onClick={() => handleClick(action)}>
      {img}
      {value}
    </li>
  );
};

import { FC, useState } from 'react';
import {
  useAddToCollectionMutation,
  useAddToLikedMutation,
  useDeleteFromCollectionMutation,
  useDeleteFromLikedMutation,
  useGetCollectionQuery,
} from '@/redux/api/collection.api';
import { IAddCollectionAlbum } from '@/@types';
import { useAppDispatch } from '@/hooks/hooks';
import { setIsShow, setPlayingTrack } from '@/redux/slices/playerSlice';

type AlbumActionsItemProps = {
  albumId: string;
  img: string;
  albumCover: string;
  name: string;
  artist: string;
  value: string;
  action: string;
  playlist: any;
};

export const AlbumActionsItem: FC<AlbumActionsItemProps> = ({
  albumId,
  img,
  albumCover,
  name,
  artist,
  value,
  action,
  playlist,
}) => {
  const getLiked = useGetCollectionQuery('liked');
  const getCollection = useGetCollectionQuery('collection');
  const [addToCollection] = useAddToCollectionMutation();
  const [removeCollection] = useDeleteFromCollectionMutation();
  const [addToLiked] = useAddToLikedMutation();
  const [removeLiked] = useDeleteFromLikedMutation();
  const dispatch = useAppDispatch();

  const likedAlbum = getLiked.data?.find(
    (item: IAddCollectionAlbum) => item.albumId === albumId
  );
  const collectionAlbum = getCollection.data?.find(
    (item: IAddCollectionAlbum) => item.albumId === albumId
  );

  function handleClick(action: string) {
    switch (action) {
      case 'PlayAll':
        dispatch(setIsShow(true));
        dispatch(
          setPlayingTrack({
            id: playlist[0].id,
            name: playlist[0].name,
            artist: playlist[0].artists[0].name,
            url: playlist[0].preview_url,
            img: albumCover,
            playlist: playlist,
            track_number: 0,
          })
        );
        break;
      case 'AddToColletion':
        if (collectionAlbum) {
          removeCollection(collectionAlbum.id);
          // setIsActive(false);
          break;
        }
        addToCollection({ albumId, albumCover, name, artist }, 'collection');
        break;
      case 'Like':
        if (likedAlbum) {
          removeLiked(likedAlbum.id);
          // setIsActive(false);
          break;
        }
        addToLiked({ albumId, albumCover, name, artist }, 'liked');
        break;
    }
  }

  return (
    <li
      className={`album__actions-item ${!!likedAlbum ? 'active' : ''}`}
      onClick={() => handleClick(action)}
    >
      {img}
      {value}
    </li>
  );
};

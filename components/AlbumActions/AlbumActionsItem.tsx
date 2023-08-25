import { FC } from 'react';
import {
  useAddToCollectionMutation,
  useAddToLikedMutation,
} from '@/redux/api/collection.api';

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
  const [addToCollection] = useAddToCollectionMutation();
  const [addToLiked] = useAddToLikedMutation();

  function handleClick(action: string) {
    switch (action) {
      case 'PlayAll':
        break;
      case 'AddToColletion':
        addToCollection({ albumId, albumCover, name, artist });
        break;
      case 'Like':
        addToLiked({ albumId, albumCover, name, artist }, 'liked');
        break;
    }
  }

  return (
    <li className="album__actions-item" onClick={() => handleClick(action)}>
      {img}
      {value}
    </li>
  );
};

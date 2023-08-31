import { FC } from 'react';
import {
  useAddToCollectionMutation,
  useAddToLikedMutation,
  useDeleteFromCollectionMutation,
  useDeleteFromLikedMutation,
  useGetCollectionQuery,
} from '@/redux/api/collection.api';
import { setIsShow, setPlayingTrack } from '@/redux/slices/playerSlice';
import { useAppDispatch } from '@/hooks/hooks';
import { IAddCollectionAlbum } from '@/@types';

type AlbumActionsItemProps = {
  albumId: string;
  albumCover: string;
  name: string;
  artist: string;
  playlist: any;
};

export const AlbumActions: FC<AlbumActionsItemProps> = ({
  albumId,
  albumCover,
  name,
  artist,
  playlist,
}) => {
  const getLiked: any = useGetCollectionQuery('liked');
  const getCollection: any = useGetCollectionQuery('collection');
  const [addToCollection] = useAddToCollectionMutation();
  const [removeCollection] = useDeleteFromCollectionMutation();
  const [addToLiked] = useAddToLikedMutation();
  const [removeLiked] = useDeleteFromLikedMutation();
  const dispatch = useAppDispatch();

  const likedAlbum: IAddCollectionAlbum = getLiked.data?.find(
    (item: IAddCollectionAlbum) => item.albumId === albumId
  );
  const collectionAlbum: IAddCollectionAlbum = getCollection.data?.find(
    (item: IAddCollectionAlbum) => item.albumId === albumId
  );

  function handleClick(action: string) {
    switch (action) {
      case 'playAll':
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
      case 'addToColletion':
        if (collectionAlbum) {
          removeCollection(collectionAlbum.id);
          break;
        }
        addToCollection({ albumId, albumCover, name, artist });
        break;
      case 'like':
        if (likedAlbum) {
          removeLiked(likedAlbum.id);
          break;
        }
        addToLiked({ albumId, albumCover, name, artist });
        break;
    }
  }

  return (
    <ul className="album__actions">
      <li
        className="album__actions-item"
        onClick={() => handleClick('playAll')}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M8.00004 1.33337C11.6744 1.33337 14.6667 4.32421 14.6667 8.0039C14.6667 11.6759 11.6744 14.6667 8.00004 14.6667C4.32565 14.6667 1.33337 11.6759 1.33337 8.0039C1.33337 4.32421 4.32565 1.33337 8.00004 1.33337ZM7.24071 5.35331C7.09914 5.35331 6.964 5.38547 6.8353 5.44979C6.67443 5.53984 6.54573 5.68134 6.47494 5.84857C6.4299 5.96434 6.35911 6.31167 6.35911 6.3181C6.28833 6.69758 6.24972 7.31504 6.24972 7.99682C6.24972 8.64709 6.28833 9.23818 6.34624 9.62409C6.35268 9.63053 6.42346 10.0615 6.50068 10.2094C6.64225 10.4795 6.91896 10.6468 7.21497 10.6468H7.24071C7.43376 10.6403 7.83917 10.4731 7.83917 10.4667C8.52128 10.1837 9.86619 9.3025 10.4067 8.7172L10.4453 8.67861C10.5161 8.60786 10.6062 8.49851 10.6255 8.47278C10.7285 8.33772 10.78 8.17049 10.78 8.0039C10.78 7.81673 10.722 7.64307 10.6127 7.50157C10.5869 7.47584 10.4904 7.3665 10.4003 7.27645C9.87263 6.71044 8.49554 5.78425 7.77482 5.50125C7.66542 5.45687 7.38871 5.35974 7.24071 5.35331Z"
            fill="#FACD66"
          />
        </svg>
        Play all
      </li>
      <li
        className={`album__actions-item ${!!collectionAlbum ? 'active' : ''}`}
        onClick={() => handleClick('addToColletion')}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M12.8067 10.0067C12.08 9.96002 11.3333 10.2267 10.78 10.78C9.74 11.82 9.74 13.5067 10.78 14.5534C11.1333 14.9067 11.5667 15.14 12.0267 15.2534C12.28 15.32 12.5467 15.34 12.8133 15.3267C13.4467 15.3 14.0667 15.0467 14.5533 14.56C15.24 13.8734 15.4733 12.9067 15.2533 12.0334C15.1467 11.5734 14.9067 11.14 14.5533 10.7867C14.0733 10.3 13.4467 10.04 12.8067 10.0067ZM14.16 12.6534C14.16 12.7934 14.1067 12.9134 14.0133 13.0067C13.92 13.1 13.8 13.1534 13.66 13.1534H13.1667V13.6734C13.1667 13.8134 13.1133 13.9334 13.02 14.0267C12.9267 14.12 12.8067 14.1734 12.6667 14.1734C12.3933 14.1734 12.1667 13.9467 12.1667 13.6734V13.1534H11.6667C11.3933 13.1534 11.1667 12.9267 11.1667 12.6534C11.1667 12.38 11.3933 12.1534 11.6667 12.1534H12.1667V11.68C12.1667 11.4067 12.3933 11.18 12.6667 11.18C12.94 11.18 13.1667 11.4067 13.1667 11.68V12.1534H13.66C13.94 12.1534 14.16 12.38 14.16 12.6534Z"
            fill="#FACD66"
          />
          <path
            d="M8.15337 8.04675C7.88003 8.04675 7.66003 8.26675 7.66003 8.54009C7.66003 8.81342 7.88003 9.03342 8.15337 9.03342C8.4267 9.03342 8.6467 8.81342 8.6467 8.54009C8.6467 8.26675 8.4267 8.04675 8.15337 8.04675Z"
            fill="#FACD66"
          />
          <path
            d="M4.50664 8.70667C4.23331 8.70667 4.01331 8.92666 4.01331 9.2C4.01331 9.47333 4.23331 9.69333 4.50664 9.69333C4.77997 9.69333 4.99997 9.47333 4.99997 9.2C4.99997 8.92666 4.77997 8.70667 4.50664 8.70667Z"
            fill="#FACD66"
          />
          <path
            d="M10.7934 1.33337H5.20671C5.02004 1.33337 4.84004 1.34004 4.66671 1.36671C2.56671 1.56004 1.33337 2.96671 1.33337 5.20671V10.7934C1.33337 13.0334 2.56671 14.44 4.66671 14.6334C4.84004 14.66 5.02004 14.6667 5.20671 14.6667H9.00004C9.26004 14.6667 9.42671 14.3734 9.32671 14.1334C9.13337 13.6734 9.00004 13.14 9.00004 12.6667C9.00004 10.6467 10.6467 9.00004 12.6667 9.00004C13.1734 9.00004 13.6667 9.10004 14.12 9.30004C14.3667 9.40671 14.6667 9.24004 14.6667 8.97337V5.20671C14.6667 2.78004 13.22 1.33337 10.7934 1.33337ZM9.65337 5.36671V8.54004C9.65337 8.54671 9.64671 8.55337 9.64671 8.56671C9.63337 9.38004 8.97337 10.04 8.15337 10.04C7.32671 10.04 6.66004 9.36671 6.66004 8.54671C6.66004 7.72004 7.33337 7.05337 8.15337 7.05337C8.32671 7.05337 8.49337 7.08671 8.65337 7.14671V6.02004L6.00671 6.74004V9.20671C6.00671 9.21337 6.00004 9.22004 6.00004 9.22671C5.98671 10.04 5.32671 10.6934 4.50671 10.6934C3.68004 10.6934 3.01337 10.02 3.01337 9.20004C3.01337 8.38004 3.68671 7.70671 4.50671 7.70671C4.68004 7.70671 4.84671 7.74004 5.00004 7.80004V6.36004V5.19337C5.00004 4.57337 5.38671 4.07337 5.98004 3.91337L7.96671 3.36671C8.58671 3.20004 8.96671 3.36671 9.18004 3.52671C9.48671 3.76004 9.64004 4.14004 9.64004 4.64671V5.36671H9.65337Z"
            fill="#FACD66"
          />
        </svg>
        {!!collectionAlbum ? (
          <span> Added</span>
        ) : (
          <span> Add to collection</span>
        )}
      </li>
      <li
        className={`album__actions-item ${!!likedAlbum ? 'active' : ''}`}
        onClick={() => handleClick('like')}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M5.51993 1.66697C5.93993 1.67975 6.3466 1.75308 6.7406 1.88708H6.77993C6.8066 1.89975 6.8266 1.91375 6.83993 1.92641C6.98726 1.97375 7.1266 2.02708 7.25993 2.10041L7.51326 2.21375C7.61326 2.26708 7.73326 2.36641 7.79993 2.40708C7.8666 2.44641 7.93993 2.48708 7.99993 2.53308C8.7406 1.96708 9.63993 1.66041 10.5666 1.66697C10.9873 1.66697 11.4073 1.72641 11.8066 1.86041C14.2673 2.66041 15.1539 5.36041 14.4133 7.72041C13.9933 8.92641 13.3066 10.0271 12.4073 10.9264C11.1199 12.1731 9.70726 13.2797 8.1866 14.2331L8.01993 14.3337L7.8466 14.2264C6.3206 13.2797 4.89993 12.1731 3.6006 10.9197C2.70726 10.0204 2.01993 8.92641 1.59326 7.72041C0.83993 5.36041 1.7266 2.66041 4.21393 1.84641C4.40726 1.77975 4.6066 1.73308 4.8066 1.70708H4.8866C5.07393 1.67975 5.25993 1.66697 5.4466 1.66697H5.51993ZM11.4599 3.77375C11.1866 3.67975 10.8866 3.82708 10.7866 4.10708C10.6933 4.38708 10.8399 4.69375 11.1199 4.79308C11.5473 4.95308 11.8333 5.37375 11.8333 5.83975V5.86041C11.8206 6.01308 11.8666 6.16041 11.9599 6.27375C12.0533 6.38708 12.1933 6.45308 12.3399 6.46708C12.6133 6.45975 12.8466 6.24041 12.8666 5.95975V5.88041C12.8866 4.94641 12.3206 4.10041 11.4599 3.77375Z"
            stroke="#E5524A"
          />
        </svg>
        Like
      </li>
    </ul>
  );
};

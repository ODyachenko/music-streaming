import { FC } from 'react';
import Image from '@/node_modules/next/image';
import { AlbumActions } from '../AlbumActions/AlbumActions';
import { getAlbumDuration } from '@/utils/getAlbumDuration';
import { getConvertTime } from '@/utils/getConvertTime';

export const AlbumHead: FC = (data: any) => {
  return (
    <div className="album__inner">
      <Image
        className="album__cover"
        src={data.albums[0].images[1].url}
        alt="album cover"
        priority
        width={256}
        height={256}
      />
      <div className="album__info">
        <h1 className="album__title">{data.albums[0].name}</h1>
        <p className="album__description">{data.albums[0].artists[0].name}</p>
        <span className="album__amount">
          {data.albums[0].total_tracks} songs ~{' '}
          {getConvertTime(getAlbumDuration(data.albums[0]), 'album')}
        </span>
        <AlbumActions
          albumId={data.albums[0].id}
          albumCover={data.albums[0].images[1].url}
          name={data.albums[0].name}
          artist={data.albums[0].artists[0].name}
          playlist={data.albums[0].tracks.items}
        />
      </div>
    </div>
  );
};

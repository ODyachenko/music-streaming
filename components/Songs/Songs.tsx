import { FC } from 'react';
import { Song } from './Song';
import './style.scss';

type SongsProps = {
  tracks: any;
  albumCover: string;
};

export const Songs: FC<SongsProps> = ({ tracks, albumCover }) => {
  return (
    <ul className="album__songs">
      {tracks.map((track: any, index: number) => {
        return (
          <Song
            key={track.id}
            albumCover={albumCover}
            track={track}
            index={index}
            playlist={tracks}
          />
        );
      })}
    </ul>
  );
};

import { FC } from 'react';
import { Song } from './Song';
import './style.scss';

export const Songs: FC = ({ tracks, albumCover }: any) => {
  return (
    <ul className="album__songs">
      {tracks.map((track: any) => {
        return (
          <Song
            key={track.id}
            albumCover={albumCover}
            track={track}
            playlist={tracks}
          />
        );
      })}
    </ul>
  );
};

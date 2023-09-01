import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { setIsShow, setPlayingTrack } from '@/redux/slices/playerSlice';
import { getConvertTime } from '@/utils/getConvertTime';
import { RootState } from '@/redux/store';
import Image from '@/node_modules/next/image';

type SongProps = {
  track: any;
  index: number;
  albumCover: string;
  playlist: [];
};

export const Song: FC<SongProps> = ({ track, index, albumCover, playlist }) => {
  const dispatch = useAppDispatch();
  const { playingTrack } = useAppSelector((state: RootState) => state.player);

  function onClickHandler() {
    dispatch(setIsShow(true));
    dispatch(
      setPlayingTrack({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        url: track.preview_url,
        img: albumCover,
        playlist: playlist,
        track_number: index,
      })
    );
  }

  return (
    <li
      onClick={onClickHandler}
      className={`album__songs-item song ${
        track.id === playingTrack.id ? 'active' : ''
      }`}
    >
      <span className="song__number">{index + 1}</span>
      <span className="song__wave">
        <span className="song__wave-bar"></span>
        <span className="song__wave-bar"></span>
        <span className="song__wave-bar"></span>
        <span className="song__wave-bar"></span>
      </span>
      <div className="song__info">
        <h2 className="song__name">{track.name}</h2>
        <span className="song__artist">{track.artists[0].name}</span>
      </div>
      <div className="song__details">
        <span className="song__details--duration">
          {getConvertTime(track.duration_ms, 'track')}
        </span>
      </div>
    </li>
  );
};

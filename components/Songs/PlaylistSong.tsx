import { FC } from 'react';
import Image from '@/node_modules/next/image';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { setIsShow, setPlayingTrack } from '@/redux/slices/playerSlice';
import { getConvertTime } from '@/utils/getConvertTime';
import { RootState } from '@/redux/store';

type PlaylistSongProps = {
  track: any;
  playlist: [];
  index: number;
};

export const PlaylistSong: FC<PlaylistSongProps> = ({
  track,
  playlist,
  index,
}) => {
  const { playingTrack } = useAppSelector((state: RootState) => state.player);
  const dispatch = useAppDispatch();

  function onClickHandler() {
    dispatch(setIsShow(true));
    dispatch(
      setPlayingTrack({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        url: track.preview_url,
        img: track.album.images[0].url,
        playlist: playlist,
        track_number: index,
      })
    );
  }

  return (
    <li
      onClick={onClickHandler}
      className={`playlist__songs-item song ${
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
      <Image
        className="song__img"
        src={track.album.images[0].url}
        alt={track.name}
        width={64}
        height={64}
      />
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

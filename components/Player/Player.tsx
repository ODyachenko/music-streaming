import { FC, useEffect } from 'react';
import { RootState } from '@/redux/store';
import Image from '@/node_modules/next/image';
import AudioPlayer from 'react-h5-audio-player';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import {
  decrementPlayingTrack,
  incrementPlayingTrack,
  setPlayingTrack,
} from '@/redux/slices/playerSlice';
import { PlaylistType } from '@/@types';
import './style.scss';

export const Player: FC = () => {
  const { playingTrack } = useAppSelector((state: RootState) => state.player);
  const dispatch = useAppDispatch();

  const playlist = playingTrack.playlist?.map((track: any) => {
    return {
      id: track.id,
      name: track.name,
      url: track.preview_url,
      img: track.album?.images[2].url,
      artist: track.artists[0].name,
    };
  });

  useEffect(() => {
    dispatch(
      setPlayingTrack({
        ...playingTrack,
        id: playlist[playingTrack.track_number].id,
        name: playlist[playingTrack.track_number].name,
        url: playlist[playingTrack.track_number].url,
        // img: playlist[playingTrack.track_number]?.img,
        artist: playlist[playingTrack.track_number].artist,
      })
    );
  }, [playingTrack.track_number]);

  return (
    <div className="player">
      <div className="player__artist artist">
        <Image
          className="artist__img"
          src={playingTrack.img}
          alt={playlist[playingTrack.track_number].name}
          width={250}
          height={250}
        />
        <div>
          <h2 className="artist__song">{playingTrack.name}</h2>
          <h3 className="artist__name">{playingTrack.artist}</h3>
        </div>
      </div>
      <AudioPlayer
        // autoPlay={true}
        src={playingTrack.url}
        showSkipControls
        showJumpControls={false}
        onClickNext={() => dispatch(incrementPlayingTrack())}
        onClickPrevious={() => dispatch(decrementPlayingTrack())}
        onEnded={() => dispatch(incrementPlayingTrack())}
      />
    </div>
  );
};

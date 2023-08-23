import { useState } from 'react';
import { RootState } from '@/redux/store';
import Image from '@/node_modules/next/image';
import AudioPlayer from 'react-h5-audio-player';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import './style.scss';
import { setPlayingTrack } from '@/redux/slices/playerSlice';

export default function Player() {
  const { playingTrack } = useAppSelector((state: RootState) => state.player);
  const playlist = playingTrack.playlist.map((track: any) => {
    return {
      id: track.id,
      name: track.name,
      url: track.preview_url,
    };
  });
  const [currentTrack, setCurrentTrack]: React.ComponentState = useState(
    playingTrack.track_number - 1
  );

  const handleClickNext = () => {
    setCurrentTrack((currentTrack: number) =>
      currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
    );
  };
  const handleClickPrev = () => {
    setCurrentTrack((currentTrack: number) =>
      currentTrack > 0 ? currentTrack - 1 : 0
    );
  };

  return (
    <div className="player">
      <div className="player__artist artist">
        <Image
          className="artist__img"
          src={playingTrack.img}
          alt={playlist[currentTrack].name}
          width={250}
          height={250}
        />
        <div>
          <h2 className="artist__song">{playlist[currentTrack].name}</h2>
          <h3 className="artist__name">{playingTrack.artist}</h3>
        </div>
      </div>
      <AudioPlayer
        autoPlay
        src={playlist[currentTrack].url}
        showSkipControls
        showJumpControls={false}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrev}
      />
    </div>
  );
}

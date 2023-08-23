import Song from './Song';
import './style.scss';

export default function Songs({ tracks, albumCover }: any) {
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
}

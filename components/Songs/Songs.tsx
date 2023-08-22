import Song from './Song';

export default function Songs({ tracks }: any) {
  return (
    <ul className="album__songs">
      {tracks.map((track: any) => {
        return <Song key={track.id} track={track} />;
      })}
    </ul>
  );
}

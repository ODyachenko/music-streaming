import { Isongs } from '@/@types';
import React from 'react';
import Song from './Song';

import songCover from '@/public/song_cover.png';

const songs: Isongs[] = [
  {
    id: 1,
    img: songCover,
    name: 'Let me love you ~ Krisx',
    artist: 'Single',
    duration: '4:17',
  },
  {
    id: 2,
    img: songCover,
    name: 'Let me love you ~ Krisx',
    artist: 'Single',
    duration: '4:17',
  },
  {
    id: 3,
    img: songCover,
    name: 'Let me love you ~ Krisx',
    artist: 'Single',
    duration: '4:17',
  },
  {
    id: 4,
    img: songCover,
    name: 'Let me love you ~ Krisx',
    artist: 'Single',
    duration: '4:17',
  },
];

export default function Songs() {
  return (
    <ul className="album__songs">
      {songs.map((song) => {
        return <Song key={song.id} {...song} />;
      })}
    </ul>
  );
}

'use client';
import { useGetPlaylistsTracksQuery } from '@/redux/api/music.api';
import { FC } from 'react';
import { PlaylistSong } from './PlaylistSong';
import './style.scss';

type PlaylistSongsProps = {
  id: string;
};

export const PlaylistSongs: FC<PlaylistSongsProps> = ({ id }) => {
  const { data, isLoading, error } = useGetPlaylistsTracksQuery(id);
  const playlist = data?.items.map((item: any) => item.track);

  return (
    <ul className="playlist__songs">
      {data &&
        data.items.map((item: any, index: number) => (
          <PlaylistSong
            key={item.track.id}
            {...item}
            playlist={playlist}
            index={index}
          />
        ))}
    </ul>
  );
};

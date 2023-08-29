'use client';

import { useGetPlaylistsQuery } from '@/redux/api/music.api';
import React, { FC } from 'react';
import { PlaylistsListItem } from './PlaylistsListItem';
import './style.scss';

export const PlaylistsList: FC = () => {
  const getPlaylists = useGetPlaylistsQuery('37i9dQZF1E4tLXl1ytNjGw');

  return (
    <ul className="playlists__list">
      {getPlaylists.data && (
        <PlaylistsListItem
          id="37i9dQZF1E4tLXl1ytNjGw"
          img={getPlaylists.data.images[0].url}
          name={getPlaylists.data.name}
        />
      )}
    </ul>
  );
};

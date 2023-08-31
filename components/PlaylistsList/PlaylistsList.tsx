'use client';

import { useGetPlaylistsQuery } from '@/redux/api/music.api';
import React, { FC } from 'react';
import { PlaylistSkeleton } from './PlaylistSkeleton';
import { PlaylistsListItem } from './PlaylistsListItem';
import './style.scss';

export const PlaylistsList: FC = () => {
  const { data, isLoading, error }: any = useGetPlaylistsQuery(
    '37i9dQZF1E4tLXl1ytNjGw'
  );

  return (
    <ul className="playlists__list">
      {data ? (
        <PlaylistsListItem
          id="37i9dQZF1E4tLXl1ytNjGw"
          img={data.images[0].url}
          name={data.name}
        />
      ) : isLoading ? (
        <li className="playlists__list-track">
          <PlaylistSkeleton />
        </li>
      ) : (
        <div>error</div>
      )}
    </ul>
  );
};

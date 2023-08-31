import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

export const musicApi = createApi({
  reducerPath: 'musicApi',
  tagTypes: ['Music'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://spotify23.p.rapidapi.com/',
    headers: {
      'X-RapidAPI-Key': String(process.env.NEXT_PUBLIC_API_KEY),
      'X-RapidAPI-Host': String(process.env.NEXT_PUBLIC_API_HOST),
    },
  }),
  endpoints: (builder: any) => ({
    getMusicByAlbums: builder.query({
      query: (id: string) => `albums/?ids=${id}`,
    }),
    getPlaylists: builder.query({
      query: (id: string) => `playlist/?id=${id}`,
      // extractRehydrationInfo(action: any, { reducerPath }: any) {
      //   if (action.type === HYDRATE) {
      //     return action.payload[reducerPath];
      //   }
      // },
    }),
    getPlaylistsTracks: builder.query({
      query: (id: string) => `playlist_tracks/?id=${id}`,
    }),
  }),
});

export const {
  useGetMusicByAlbumsQuery,
  useGetPlaylistsQuery,
  useGetPlaylistsTracksQuery,
} = musicApi;

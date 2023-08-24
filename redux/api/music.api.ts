import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const musicApi = createApi({
  reducerPath: 'musicApi',
  tagTypes: ['Music'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://spotify23.p.rapidapi.com/',
    headers: {
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
      'X-RapidAPI-Host': process.env.NEXT_PUBLIC_API_HOST,
    },
  }),
  endpoints: (builder: any) => ({
    getMusicByAlbums: builder.query({
      query: (id: string) => `albums/?ids=${id}`,
    }),
    getAlbumsByReleases: builder.query({
      query: (id: string) => `genre_view/?ids=${id}`,
    }),
  }),
});

export const { useGetMusicByAlbumsQuery, useGetAlbumsByReleasesQuery } =
  musicApi;

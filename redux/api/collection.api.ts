import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface IAddCollectionAlbum {
  albumId: string;
  albumCover: string;
  name: string;
  artist: string;
}

export const collectionApi = createApi({
  reducerPath: 'collectionApi',
  tagTypes: ['Collection'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://64e8621899cf45b15fdf7a11.mockapi.io/',
  }),
  endpoints: (builder: any) => ({
    getCollection: builder.query({
      query: (type: string) => `/${type}`,
    }),
    addToCollection: builder.mutation({
      query: (body: IAddCollectionAlbum) => ({
        url: `/collection`,
        method: 'POST',
        body,
      }),
    }),
    addToLiked: builder.mutation({
      query: (body: IAddCollectionAlbum) => ({
        url: `/liked`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useGetCollectionQuery,
  useAddToCollectionMutation,
  useAddToLikedMutation,
} = collectionApi;

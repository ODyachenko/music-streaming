import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IAddCollectionAlbum } from '@/@types';

export const collectionApi = createApi({
  reducerPath: 'collectionApi',
  tagTypes: ['collection', 'liked'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://64e8621899cf45b15fdf7a11.mockapi.io/',
  }),
  endpoints: (builder: any) => ({
    getCollection: builder.query({
      query: (type: string) => `/${type}`,
      providesTags: ['collection', 'liked'],
    }),
    addToCollection: builder.mutation({
      query: (body: IAddCollectionAlbum) => ({
        url: `/collection`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['collection'],
    }),
    deleteFromCollection: builder.mutation({
      query: (id: string) => ({
        url: `/collection/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['collection'],
    }),
    addToLiked: builder.mutation({
      query: (body: IAddCollectionAlbum) => ({
        url: `/liked`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['liked'],
    }),
    deleteFromLiked: builder.mutation({
      query: (id: string) => ({
        url: `/liked/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['liked'],
    }),
  }),
});

export const {
  useGetCollectionQuery,
  useAddToCollectionMutation,
  useAddToLikedMutation,
  useDeleteFromLikedMutation,
  useDeleteFromCollectionMutation,
} = collectionApi;

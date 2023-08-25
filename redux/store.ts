import { configureStore } from '@reduxjs/toolkit';
import { collectionApi } from './api/collection.api';
import { musicApi } from './api/music.api';
import playerSlice from './slices/playerSlice';

export const store = configureStore({
  reducer: {
    player: playerSlice,
    [musicApi.reducerPath]: musicApi.reducer,
    [collectionApi.reducerPath]: collectionApi.reducer,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware()
      .concat(musicApi.middleware)
      .concat(collectionApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

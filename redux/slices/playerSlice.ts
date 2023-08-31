import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { PlayingTrackType } from '@/@types';

interface PlayerState {
  isShow: boolean;
  playingTrack: PlayingTrackType | any;
}

// Define the initial state using that type
const initialState: PlayerState = {
  isShow: false,
  playingTrack: {},
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setIsShow: (state: PlayerState, action: PayloadAction<boolean>) => {
      state.isShow = action.payload;
    },
    setPlayingTrack: (
      state: PlayerState,
      action: PayloadAction<PlayingTrackType>
    ) => {
      state.playingTrack = action.payload;
    },
    incrementPlayingTrack: (state: PlayerState) => {
      state.playingTrack.track_number =
        state.playingTrack.track_number < state.playingTrack.playlist.length - 1
          ? (state.playingTrack.track_number += 1)
          : 0;
    },
    decrementPlayingTrack: (state: PlayerState) => {
      state.playingTrack.track_number =
        state.playingTrack.track_number > 0
          ? (state.playingTrack.track_number -= 1)
          : 0;
    },
  },
});

export const {
  setIsShow,
  setPlayingTrack,
  incrementPlayingTrack,
  decrementPlayingTrack,
} = playerSlice.actions;
export default playerSlice.reducer;

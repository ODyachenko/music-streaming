import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state
interface PlayerState {
  isShow: boolean;
  playingTrack: object;
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
    setPlayingTrack: (state: PlayerState, action: PayloadAction) => {
      state.playingTrack = action.payload;
    },
  },
});

export const { setIsShow, setPlayingTrack } = playerSlice.actions;
export default playerSlice.reducer;

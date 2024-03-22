import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { shazamTrackApi } from './services/shazamTrack';

export const store = configureStore({
  reducer: {
    [shazamTrackApi.reducerPath]: shazamTrackApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamTrackApi.middleware),
});

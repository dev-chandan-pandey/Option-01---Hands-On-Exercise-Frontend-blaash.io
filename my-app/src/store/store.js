// import { configureStore } from '@reduxjs/toolkit';
// import playlistReducer from './playlistSlice';
// import videoReducer from './videoSlice'; // Assuming you have a videoSlice

// export const store = configureStore({
//   reducer: {
//     playlists: playlistReducer,
//     videos: videoReducer,
//   },
// });
// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import playlistReducer from './playlistSlice';
import videoReducer from './videoSlice';

export const store = configureStore({
  reducer: {
    playlists: playlistReducer,
    videos: videoReducer,
  },
});

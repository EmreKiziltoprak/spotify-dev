import { configureStore } from "@reduxjs/toolkit";
import playlistReducer from "./features/PlaylistSlice";
import { userSlice } from "./features/UserSlice";

export const store = configureStore({
 reducer: {
    playlist: playlistReducer,
    userSlice: userSlice.reducer
  }, } )




import { createSlice } from "@reduxjs/toolkit";

//THIS STATE WILL BE USED IN CONTEXT API
export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
  id: null,
  //   "BQAk_swGauWyo6MeExLzVFvp81JP6Hf4eCu5x-V4NrRAyqU7UKhJ9-XHpBShdJ0uPdi7XMadxuvlmg0lLkHot4-VedXWC7lQcSW_jBRSDgidLx7dob01TPzb4DBkN_xx7re0Aj2V4IFoJ7mxbLtqwGHHzk86n4lLsz2G8IBsjm01GYwZh10dGXUIl-uE5tgqhF2ybTVZpbYzi6nP",
};


export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {

      setToken: (state, action) =>  {
          state.token = action.token
        
      },

      userReducer : (state, action) => {
  switch (action.type) {

    
    case "SET_TOKEN":
      {
            console.log(action.type);

        return {
        ...state,
        token: action.token,
      };}

    case "SET_ID":
      return {
        ...state,
        id: action.id,
      };

    case "SET_PLAYLIST":
      return {
        ...state,
        playlist: action.playlist,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
      
  } } }
});

// Action creators are generated for each case reducer function
export const { userReducer } = userSlice.actions;

export default userSlice.reducer;


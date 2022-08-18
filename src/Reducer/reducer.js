//THIS STATE WILL BE USED IN CONTEXT API 
export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null
  // token:
  //   "BQAk_swGauWyo6MeExLzVFvp81JP6Hf4eCu5x-V4NrRAyqU7UKhJ9-XHpBShdJ0uPdi7XMadxuvlmg0lLkHot4-VedXWC7lQcSW_jBRSDgidLx7dob01TPzb4DBkN_xx7re0Aj2V4IFoJ7mxbLtqwGHHzk86n4lLsz2G8IBsjm01GYwZh10dGXUIl-uE5tgqhF2ybTVZpbYzi6nP",
};
//THIS REDUCER IS USED IN CONTEXT API AND RETURNS THE STATE
export const reducer = (state, action ) => {

    switch (action.type) {

      case "SET_TOKEN": 
      return {
        ...state,
        token: action.token
      }
      
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };

      default:
        return state;
    }
}
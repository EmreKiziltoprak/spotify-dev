import React,{ useEffect, useState } from "react";
import AppContext, { MainContext } from "./context/TokenContext";
import Login from "./Login/Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApifrom from "spotify-web-api-js";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";
import { useDataLayerValue } from "./context/DataLayer";
import Player from "./Player/Player";
import { Provider } from "react-redux";
import { store } from "./store/Store";
const spotify = new SpotifyWebApifrom();



function App() {

  const [success, setSuccess] = useState(false)

  const user = useSelector((state) => state.userSlice);
  
  const dispatch = useDispatch();


  useEffect(() => {

    const hash = getTokenFromUrl()
    window.location.hash = ""
    const _token = hash.access_token
    console.log(_token)
    
    spotify.setAccessToken(_token)

     _token && dispatch(userReducer(
        type: "SET_TOKEN",
        token: _token
      ));

    spotify.getMe().then((response) => {

      console.log("ID",response.id);
      
      dispatch({
        type: "SET_USER",
        user: response

      })

      dispatch({
       type: "SET_ID",
       id: response.id,
       });

    })


  },[])

  const data = {
    setSuccess,
    success
  }

  return (
    <>
      {user.token ? <Player spotify={spotify} /> : <Login />}
      {user.token && console.log("CONTEXT", user.token)}
    </>
  );
}

export default App;

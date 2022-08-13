import React,{ useEffect, useState } from "react";
import AppContext, { MainContext } from "./context/TokenContext";
import Login from "./Login/Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApifrom from "spotify-web-api-js";
import { useDataLayerValue } from "./context/DataLayer";
import Player from "./Player/Player";
const spotify = new SpotifyWebApifrom();


function App() {

  const [success, setSuccess] = useState(false)
  //const [token, setToken] = useState("");

  const [{user, token}, dispatch]  = useDataLayerValue() 

  useEffect(() => {

    const hash = getTokenFromUrl()
    window.location.hash = ""
    const _token = hash.access_token
    console.log(_token)
    
    spotify.setAccessToken(_token)

     _token && dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

    spotify.getMe().then((response) => {

      console.log(response)
      
      dispatch({
        type: "SET_USER",
        user: response

      })


    })


  },[])

  const data = {
    setSuccess,
    success
  }
  return (
    <MainContext.Provider value={data}>
      {token? <Player spotify={spotify}/> : <Login />}
      {console.log("CONTEXT", user)}
      {console.log("CONTEXT", token)}
    </MainContext.Provider>
  );
}

export default App;

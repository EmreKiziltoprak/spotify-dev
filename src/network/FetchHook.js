import { useEffect, useRef, useReducer } from "react";
import { api } from "./Url";


  



export const useFetch  = (url, token = null) => {

    var options = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}` 
      },
    };

    const cache = useRef({})

    const initialState = {
        status: "idle",
        error: null,
        data: []
    }

    const [state, dispatch] = useReducer((state, action) => {

        switch(action.type){

            case "FETCHING":  return {...initialState, status: "FETCHING"};

            case "FETCHED": return {...initialState, status: "FETCHED", data: action.payload};

            case "FETCH_ERROR": return {...initialState, status: "FETCH_ERROR", data: action.payload};

        }
    }, initialState)

    useEffect(()=> {

      let cancelRequest = false;
      if(!url || !url.trim()) return;

      const fetchData = async () => {

            dispatch({type: "FETCHING"})

            
            if(cache.current[url]){

                const data = cache.current[url]
                dispatch({type: "FETCHED", payload: data})

            }

            else {
                try{

                    const response = await fetch(api + url, options)
                    const data = await response.json()
                    cache.current[url] = data
                    if(cancelRequest) return 
                    dispatch({type: "FETCHED", payload: data})

                }
                catch(e){
                    if(cancelRequest) return
                    dispatch({type: "FETCHED_ERROR", payload: e.message})
                }
            }
            
      }

      fetchData()

      return function cleanup(){
        cancelRequest = true
      }


    },[url])

    return state

}
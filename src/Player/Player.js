import React from 'react'
import Body from './Parts/Body/Body'
import Footer from './Parts/Footer/Footer'
import Sidebar from './Parts/Sidebar/Sidebar'
import  classes from "./Player.module.scss"
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";

export default function Player(props) {



  const dispatch = useDispatch()

  const { spotify } = props

  return (
    <div className={classes.player}>

      <div className={classes.player__body}>
        <Sidebar spotify={spotify}/>
        <Body spotify={spotify}/>
      </div>

      <Footer/>

    </div>
  )
}


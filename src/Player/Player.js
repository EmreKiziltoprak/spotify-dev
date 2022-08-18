import React from 'react'
import Body from './Parts/Body/Body'
import Footer from './Parts/Footer/Footer'
import Sidebar from './Parts/Sidebar/Sidebar'
import  "./Player.scss"

export default function Player(props) {

  const { spotify } = props

  return (
    <div className='player'>

      <div className='player__body'>
        <Sidebar/>
        <Body spotify={spotify}/>
      </div>

      <Footer/>

    </div>
  )
}


//sidebar
//body
//footer
import React from 'react'
import Header from '../Header/Header'
import "./Body.scss"

export default function Body({spotify}) {
  return (
    <div className='col-md-10 col-1 col-9 body'>
      <Header spotify={spotify}/>
    </div>
  )
}

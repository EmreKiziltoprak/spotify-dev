import React from 'react'
import Header from '../Header/Header'
import "./Body.scss"

export default function Body({spotify}) {
  return (
    <div className="col-md-10 col-1 col-9 body">
      <Header spotify={spotify} />

      <div className="body__info">

        <img src={spotify.discover_weekly?.images[0].url} alt="" />

        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>DISCOVER WEEKLY</h2>
          <p>description</p>
        </div>
      </div>
    </div>
  );
}

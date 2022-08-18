import './Header.scss';

import React from 'react'; //default export

import SearchIcon from '@mui/icons-material/Search'; // default export
import { Avatar } from '@mui/material'; // normal export
import {useDataLayerValue} from "../../../context/DataLayer" //normal export

export default function Header () {

  const [{user}, dispatch ] = useDataLayerValue()
    return (
      <div className="header">

        <div className="header__left">
          <SearchIcon />
          <input  type="text" className="search" placeholder="Search" />
        </div>
        <div className="header__right">
          <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
          <p>{user?.display_name}</p>
        </div>
         
      </div>
    );
};

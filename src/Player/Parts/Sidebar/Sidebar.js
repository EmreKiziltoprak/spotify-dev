import React from 'react'
import "./Sidebar.scss"
import SidebarOption from './SidebarOption/SidebarOption';
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import Search from '@mui/icons-material/Search';
export default function Sidebar() {
  return (
    <div className="sidebar col-md-2 col-2 ps-2 pe-2 pt-3">
      {/* image container */}
      <div className="w-75 sidebar__logo">
        <img
          className="img-fluid"
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
          alt="spotify"
        />
      </div>

      <nav>
        <SidebarOption option="home" title="Ana Sayfa" Icon={HomeIcon} />
        <SidebarOption option="search" title="Arama" Icon={Search} />
        <SidebarOption
          option="archive"
          title="Kitaplığın"
          Icon={LibraryMusicIcon}
        />
      </nav>

      <h5 className=" ps-2 pt-1">Çalma Listeleri</h5>
      <hr />
      {/* PLAYLISTS */}
    </div>
  );
}

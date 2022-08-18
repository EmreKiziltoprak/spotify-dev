import React from 'react'
import "./SidebarOption.scss"
export default function SidebarOption({title, option, Icon}) {
  return (
    <div className="sidebar-option">

      <div className="sidebar-option1">

        <Icon />
      </div>

      <div className="sidebar-option2">
        <h6>{title}</h6>
      </div>
    </div>
  );
}

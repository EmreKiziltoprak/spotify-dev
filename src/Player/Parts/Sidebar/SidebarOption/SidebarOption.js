import React, { useEffect, useReducer } from 'react'
import PropTypes from "prop-types";
import "./SidebarOption.scss"
import styled from 'styled-components';

const SidebarOptionDiv = styled.div`
font-size: 0.7rem;
`

export default function SidebarOption(props) {

  const {item, option, title, Icon} = props

  return (
    
    <SidebarOptionDiv className="sidebar-option">

      <div className="sidebar-option1">

{        Icon && <Icon />
}
      </div>

      <div className="sidebar-option2">
        {item && <p>{item.name}</p>}
        {title && <h6>{title}</h6>}
      </div>
    </SidebarOptionDiv>
  );
}

SidebarOption.propTypes = {
  item: PropTypes.object,
  option: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.element,
};
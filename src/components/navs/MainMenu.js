import React from 'react'

export default function MainMenu({handleNavAnchorOnMouseEnterAction,handleNavAnchorOnMouseExitAction, item }) {
  return (
    <li> <a href="#anchor" className="nav_link a" onMouseEnter={handleNavAnchorOnMouseEnterAction} onMouseLeave={handleNavAnchorOnMouseExitAction}>{item}	</a></li>
  )
}

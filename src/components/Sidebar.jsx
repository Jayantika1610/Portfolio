import React from 'react'
import ToggleButton from "./ToggleButton"
import Links from "./Links"
export const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="bg">
            <Links/>
        </div>
        <ToggleButton/>
    </div>
  )
}

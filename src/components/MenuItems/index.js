import React from 'react'
import './index.css'

const MenuItems = ({ open, drawingRef }) => {
  const menuItems = ['about', 'why me', 'career', 'react', 'contact']
  const onClick = () => {
    console.log(drawingRef)
  }
  return (
    <ul className="MenuItems" data-open={open}>
      {menuItems.map((option, key) => (
        <a href="#" key={key} onClick={onClick}>
          <li>{option}</li>
        </a>
      ))}
    </ul>
  )
}

export default MenuItems

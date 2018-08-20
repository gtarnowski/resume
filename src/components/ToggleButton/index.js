import React from 'react'
import './index.css'

const ToggleButton = ({ open, onOpen, dark }) => {
  return (
    <button className="ToggleButton" data-open={open} onClick={onOpen} data-dark={dark}>
      <span className="bar-top" />
      <span className="bar-mid" />
      <span className="bar-bot" />
    </button>
  )
}

export default ToggleButton

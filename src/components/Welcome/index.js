import React from 'react'
import './index.css'

const Welcome = ({ open, level }) => {
  console.log(level)
  return (
    <div className="Welcome" data-open={open}>
      <h1>
        <strong>Grzegorz</strong>&nbsp;
        <span>Tarnowski</span>
        <small>UI Designer & Front End Developer</small>
      </h1>
    </div>
  )
}

export default Welcome

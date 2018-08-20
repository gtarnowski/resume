import React, { Component } from 'react'
import Logo from '../Logo'
import Menu from '../Menu'
import './index.css'

class NavBar extends Component {
  render () {
    const { onOpen, open, drawingRef } = this.props
    return (
      <nav className="NavBar">
        <div className="wrapper">
          <Logo />
          <Menu drawingRef={drawingRef} onOpen={onOpen} open={open} />
        </div>
      </nav>
    )
  }
}

export default NavBar

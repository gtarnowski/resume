import React, {Component} from 'react'
import MenuItems from '../MenuItems'
import ToggleButton from '../ToggleButton'
import './index.css'

class Menu extends Component {
  render () {
    const { onOpen, open, drawingRef } = this.props
    return (
      <div className="Menu">
        <div className="ToggleMenu">
          <MenuItems drawingRef={drawingRef} open={open} />
        </div>
        <ToggleButton onOpen={onOpen} open={open} />
      </div>
    )
  }
}

export default Menu

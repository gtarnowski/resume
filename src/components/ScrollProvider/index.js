import React, { Component } from 'react'
import throttle from 'lodash/throttle'
import './index.css'

class ScrollProvider extends Component {
  state = {
    level: 0
  }

  componentWillMount () {
    window.addEventListener('mousewheel', throttle((e) => this.onScrollPage(e), 1000), true)
  }

  componentWillUnmount () {
    window.removeEventListener('mousewheel', throttle(this.onScrollPage, 1000), false)
  }

  onScrollPage = ({ deltaY }) => {

    if (deltaY > 0) {
      // scroll down
      if (this.state.level === 4) return
      this.setState({ level: this.state.level + 1 })
    } else {
      // scroll top
      if (this.state.level === 0) return
      this.setState({ level: this.state.level - 1 })
    }
  }

  render() {
    return this.props.children(this.state.level)
  }
}

export default ScrollProvider

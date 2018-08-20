import React, { Component } from 'react'
import throttle from 'lodash/throttle'
import './index.css'

class ScrollProvider extends Component {

  componentWillMount () {
    window.addEventListener('scroll', this.onScrollPage)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.onScrollPage)
  }

  onScrollPage = throttle((e) => {
  }, 300)

  render() {
    return <div>s</div>
  }
}

export default ScrollProvider

import React, { Component } from 'react'
import './index.css'

class Drawing extends Component {
  state = { open: false}

  startDrawing = () => {
    console.log('im drawing')
    this.setState({ open: true })
  }

  render () {
    return (
      <div className="Drawing">
        <div className="dotted-line left" data-open={this.state.open}/>
        <div className="dotted-line right" data-open={this.state.open}/>
        <div className="dotted-line top" data-open={this.state.open}/>
        <div className="dotted-line bottom" data-open={this.state.open}/>
      </div>
    )
  }
}



export default Drawing

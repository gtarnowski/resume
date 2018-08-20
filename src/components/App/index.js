import React, { Component } from 'react'
import NavBar from '../NavBar'
import Welcome from '../Welcome'
import Particles from '../Particles'
import Portrait from '../Portrait'
import Drawing from '../Drawing'
import Error from '../Error'
import ScrollProvider from '../ScrollProvider'

class App extends Component {
  state = { open: false }
  onOpen = () => this.setState({ open: !this.state.open })
  render () {
    const { onOpen, state: { open } } = this
    return (
      <div className="App">
        <ScrollProvider />
        <Error>
          <Drawing />
        </Error>
        <Portrait />
        <Particles />
        <Welcome open={open} />
        <NavBar onOpen={onOpen} open={open} />
      </div>
    )
  }
}

export default App

import React, { Component } from 'react'
import NavBar from '../NavBar'
import Welcome from '../Welcome'
import Particles from '../Particles'
import Portrait from '../Portrait'
import Drawing from '../Drawing'
import Error from '../Error'
import Footer from '../Footer'
import ScrollProvider from '../ScrollProvider'

class App extends Component {
  state = { open: false }
  onOpen = () => this.setState({ open: !this.state.open })
  render () {
    const { onOpen, state: { open } } = this
    return (
      <div className="App">
       <div className="Wrapper">
         <Portrait />
         <ScrollProvider>
           {level => <Welcome open={open} level={level}/>}
         </ScrollProvider>
         <Particles />
         <NavBar onOpen={onOpen} open={open} />
       </div>
        {/*<Footer />*/}
      </div>
    )
  }
}

export default App

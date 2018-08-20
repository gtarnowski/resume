import React, { Component } from 'react'

class Error extends Component {
  state = { error: null, errorInfo: null }

  componentDidCatch (error, errorInfo) {
    console.log('error', error)
    this.setState({ error, errorInfo })
  }

  render () {
    if (this.state.error) {
      return (
        <div>
          <p>Error</p>
        </div>
      )
    }

    return this.props.children
  }

}

export default Error

import React, { PureComponent } from 'react'
import ReactParticles from 'react-particles-js'
import './index.css'

class Particles extends PureComponent {
  render () {
    if (window.innerWidth < 786) {
      return null
    }
    const params = {
      particles: {
        number: {
          value: 100
        },
        color: {
          value: '#333'
        }
      }
    }

    return (
      <div className="Particles">
        <ReactParticles
          params={params}
        />
      </div>
    )
  }
}

export default Particles

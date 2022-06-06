import React, { Component } from 'react'
import Unmount from './Unmount'

export default class User extends Component {
    constructor(){
        super()
        this.state ={
            toggle : true
        }
    }
  render() {
    return (
      <div>
          {
              this.state.toggle ? <Unmount /> : null
          }
          <button onClick={()=>this.setState({toggle:!this.state.toggle})}>Click Me</button>
      </div>
    )
  }
}

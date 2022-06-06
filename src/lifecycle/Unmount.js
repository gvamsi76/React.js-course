import React, { Component } from 'react'

export default class Unmount extends Component {
    componentWillUnmount (){
        alert("user hasbeen deleted")
    }
  render() {
    return (
      <div>
          <ul>
              <li>Name : Vamshi Krishna</li>
              <li>Email : test@gmail.com</li>
              <li>Contact : 7569800000</li>
          </ul>
      </div>
    )
  }
}

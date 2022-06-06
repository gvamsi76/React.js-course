import React, { Component } from 'react'

export default class Mounting extends Component {
    constructor (){
        super ()
        this.state ={
            data : null
        }
        console.log("constructor")
    }
    componentDidMount(){
        this.setState({data :"DATA updated"});
        console.log("componentDIDMount");
    }
  render() {
      console.log("render");
    return (
      <div>
          <h2>Life Cycle Methods: </h2>
      </div>
    )
  }
}

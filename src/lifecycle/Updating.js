import React, { Component } from 'react'

export default class Updating extends Component {
    constructor (){
        super ();
        this.state ={
            active :null,
            wwho :null,
        }
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
        if(this.state.who == null){
            this.setState({who :"Vamshi Krishna"})
        }
    }
  render() {
    return (
      <div>
          <h2>Updating Phase {this.state.who}</h2><br />
          <button onClick={()=> this.setState({active :"yes"})}>Submit</button>
      </div>
    )
  }
}

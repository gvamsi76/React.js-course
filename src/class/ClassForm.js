import React, { Component } from 'react'

export default class ClassForm extends Component {
    constructor (){
        super();
    this.state ={
        user :null,
        password :null,
    }
    }
    onSubmit =()=>{
        console.log(this.state);
    }
  render() {

    return (
      <div>
          <h2>Form </h2>
          <input type="text" placeholder='Enter your Name' onChange={(e)=>this.setState({user: e.target.value})}/><br /><br />
          <input type="password" placeholder='Enter your Password'  onChange={(e)=>this.setState({password :e.target.value})}/><br /><br />
          <button onClick={()=> this.onSubmit()} >Submit</button>
      </div>
    )
  }
}

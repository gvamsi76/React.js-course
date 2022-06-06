import React, { Component } from 'react'

 class ClassEvent extends Component {
     upDate(){
         alert("hello Vamshi Krishna")
     }
  render() {
    return (
      <div>
          <h2>Vamshi Krishna</h2>
          <button onClick={this.upDate.bind()}>Bind </button>
          <button onClick={()=>this.upDate()}>Submit</button>
      </div>
    )
  }
}
export default ClassEvent
import React, { Component } from 'react'

export default class ClassStates extends Component {
    constructor() {
        super();
        this.state = {
            show: true
        }
    }
    render() {
        return (
            <div>

                {this.state.show ? <h1>hide and show</h1> : null}
                <button onClick={()=>{this.setState({show :!this.state.show})}}>Click me </button>

            </div>
        )
    }
}

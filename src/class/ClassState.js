import React, { Component } from 'react'

class ClassState extends Component {
    constructor() {
        super();
        this.state = {
            name: "vamshi",
            email: "gvamshi709@gmail.com",
            password: "********"
        }
    }
     updateState=()=>{
        this.setState({
            name: "krishna",
            email :"gvamshi906@gmail.com"
        })
    }
    render() {
        return (
            <div>
                <h1>
                    my Name {this.state.name} here is my email {this.state.email} along with my password {this.state.password}
                    <br /> <button onClick={()=> this.updateState()}>Submit</button>
                </h1>
            </div>
        )
    }
}
export default ClassState
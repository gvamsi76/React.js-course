import React, { Component } from 'react'

export default class ClassProps extends Component {
  render() {
    return (
      <div>
          {this.props.data} <br />
          {this.props.text.name}
      </div>
    )
  }
}

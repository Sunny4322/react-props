import React, { Component } from 'react'

export default class StateExample extends Component {
    state={
        name:"sunny",
        age:20
    }
  render() {
    return (
      <div>
        StateExample
      <p>Name:{this.state.name} Age:{this.state.age}</p> 
      </div>
    )
  }
}

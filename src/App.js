import React, { Component } from 'react'
import Todos from './components/Todos'

export class App extends Component {
    state = {
      todos: [{
        id: 1,
        title: "Take a walk",
        completed: false
      }, {
        id: 2,
        title: "eat lunch",
        completed: false
      }, {
        id: 3,
        title: "feed the fish",
        completed: false
      }, ]
    }
  render() {
    return (
      <div>
        <Todos todos={ this.state.todos}/>
      </div>
    )
  }
}

export default App

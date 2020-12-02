import React, { Component } from 'react'
import TodoItem from './TodoItem'


export class Todos extends Component {

  render() {
    console.log(this)
    return this.props.todos.map((todo) => ( 
      <TodoItem todo={ todo}/>
    ))
  }
}

export default Todos

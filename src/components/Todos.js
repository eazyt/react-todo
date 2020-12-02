import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';


export class Todos extends Component {



  render() {
    // console.log(this)
    return this.props.todos.map((todo) => ( 
      <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={ this.props.delTodo}/>
    ))
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos

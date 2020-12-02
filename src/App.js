import React, { Component } from 'react'
import Header from './components/layout/Header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import {
  v4 as uuidv4
} from 'uuid';

export class App extends Component {
    state = {
      todos: [{
        id: uuidv4(),
        title: "Take a walk",
        completed: false
      }, {
        id: uuidv4(),
        title: "eat lunch",
        completed: true
      }, {
        id: uuidv4(),
        title: "feed the fish",
        completed: false
      }, ]
    }
  
    markComplete = (id) => {
      this.setState({
        todos: this.state.todos.map(todo => { 
          if (todo.id === id) { 
            todo.completed = !todo.completed
          }
          return todo;
      })})
    }
  
  delTodo = (id) => { 
    console.log("its Working", id)
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  addTodo = (title) => {
    // console.log(title)
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }
  
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={ this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={ this.delTodo}/>
        </div>
      </div>
    )
  }
}

export default App

import React, { Component } from 'react'
import Header from './components/layout/Header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

export class App extends Component {
    state = {
      todos: [{
        id: 1,
        title: "Take a walk",
        completed: false
      }, {
        id: 2,
        title: "eat lunch",
        completed: true
      }, {
        id: 3,
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
  
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={ this.delTodo}/>
        </div>
      </div>
    )
  }
}

export default App

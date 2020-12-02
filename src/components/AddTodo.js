import React, { Component } from 'react';


export class addTodo extends Component {
  state = {
    title: ''
  }

  onChange = (e) => this.setState({[e.target.name]: e.target.value});

  render() {
    return (
      <form style={{ display: 'flex' }} action="">
        <input
          type="text"
          name="title"
          placeholder="Add Todo..."
          style={{ flex: '10', padding: '5px' }}
          value={this.state.title}
          onChange={ this.onChange}
          id="" 
          />
        <input
          type="submit"
          value="submit"
          name=""
          id=""
          className="btn"
          style={{ flex: '1' }} 
          />
      </form>
    )
  }
}

export default addTodo

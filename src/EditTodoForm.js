import React, { Component } from 'react'
import './NewTodoForm.css'

export default class NewTodoForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       text: this.props.text,
       priority: this.props.priority,
       id: this.props.id 
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.editTodo(this.state)
  }
  
  render() {
    return (
      <form className='NewTodoForm'
      onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="text"
          title="Todo text"
          placeholder="Todo"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <input 
          type="number"
          name="priority"
          min="1"
          max="3"
          title="Todo priority"
          placeholder="Priority"
          value={this.state.priority}
          onChange={this.handleChange}
        />
        <button>Edit</button>
      </form>
    )
  }
}

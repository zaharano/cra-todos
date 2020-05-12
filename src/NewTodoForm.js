import React, { Component } from 'react';
import './NewTodoForm.css';

export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      priority: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      text: '',
      priority: '',
    });
  };

  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
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
          title="Todo priority"
          placeholder="Priority"
          value={this.state.priority}
          onChange={this.handleChange}
        />
        <button>Add</button>
      </form>
    );
  }
}

import React, { Component } from 'react';
import './Todo.css';
import './NewTodoForm.css';

export default class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.text,
      priority: this.props.priority,
      id: this.props.id,
      editing: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editTodo(this.state);
    this.setState({
      editing: false,
    });
  };

  startEdit = () => {
    this.setState({
      editing: true,
    });
  };

  render() {
    const compClass = this.props.done ? 'done' : 'notdone';

    const editForm = (
      <form className="Todo-EditTodoForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="text"
          title="Todo text"
          placeholder="Todo"
          value={this.state.text}
          onChange={this.handleChange}
        />
        {/* <label for="priority">Priority:</label>
        <select 
          id="priority" 
          name="priority"
          title="Todo priority"
          value={this.state.priority} 
          onChange={this.handleChange}
        >
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select> */}
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
    );

    const todoBody = (
      <div className="Todo-body">
        <div
          className={`Todo-checkbox ${compClass}`}
          onClick={this.props.toggle}
        />
        <div className={`Todo-text ${compClass}`} onClick={this.props.toggle}>
          {this.props.text}
        </div>
        <div className="Todo-button Todo-edit" onClick={this.startEdit}>
          Edit
        </div>
        <div className="Todo-button Todo-remove" onClick={this.props.remove}>
          Remove
        </div>
      </div>
    );

    return (
      <div className="Todo">{this.state.editing ? editForm : todoBody}</div>
    );
  }
}

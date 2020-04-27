import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import { v4 as uuid } from 'uuid';
import './TodoList.css';


export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  addTodo = (todo) => {
    let newTodo = {
      ...todo,
      done: false,
      id: uuid(),
      created: new Date(),
    };
    this.setState((st) => ({ todos: [...st.todos, newTodo] }));
  };

  editTodo = (editedTodo) => {
    const todos = this.state.todos.map(todo => {
      if (todo.id === editedTodo.id) {
        return { ...todo, text: editedTodo.text, priority: editedTodo.priority }
      }
      return todo;
    });
    this.setState({ todos })
  }

  removeTodo = (id) => {
    this.setState((st) => ({
      todos: st.todos.filter((todo) => todo.id !== id),
    }));
  };

  toggleDone = (id) => {
    this.setState((st) => ({
      todos: st.todos.map((todo) => {
        if (todo.id === id) return { ...todo, done: !todo.done };
        else return todo;
      }),
    }));
  };

  render() {
    const list = this.state.todos.map((todo) => (
      <Todo
        key={todo.id}
        id={todo.id}
        text={todo.text}
        priority={todo.priority}
        done={todo.done}
        created={todo.created}
        editTodo={this.editTodo}
        remove={() => this.removeTodo(todo.id)}
        toggle={() => this.toggleDone(todo.id)}
      />
    ));
    return (
      <div className="TodoList">
        <h1>Todos</h1>
        <NewTodoForm addTodo={this.addTodo} />
        <div className="TodoList-table">
          {list}
        </div>
      </div>
    );
  }
}

import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    fetch('/api/todos')
      .then(res => res.json())
      .then(todos => {
        this.setState({ todos });
      });
  }

  addTodo(newTodo) {
    fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    })
      .then(res => res.json())
      .then(newTodo => {
        this.setState({ todos: [...this.state.todos, newTodo] });
      });
  }

  toggleCompleted(todoId) {
    const index = this.state.todos.findIndex(e => e.todoId === todoId);
    const patch = { isCompleted: !this.state.todos[index].isCompleted };
    fetch(`/api/todos/${todoId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(patch)
    })
      .then(res => res.json())
      .then(newTodo => {
        const todos = [...this.state.todos];
        todos[index] = newTodo;
        this.setState({ todos });
      });

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}

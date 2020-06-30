import React from "react";
import "./Styles/style.css";
import Todos from "./Components/Todos";
import AddTodo from "./Components/AddTodo";

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        completed: false,
        content: "Buy some milk",
      },
      {
        id: 2,
        completed: false,
        content: "Play mario kart",
      },
    ],
  };
  deleteTodo = (id) => {
    let todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });

    this.setState({
      todos: todos,
    });
  };
  addTodo = (content) => {
    let newTodo = {
      id: Math.random(),
      completed: false,
      content: content,
    };
    let newTodosList = [...this.state.todos, newTodo];
    this.setState({
      todos: newTodosList,
    });
  };
  changeStatus = (id) => {
    let newList = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return {
          id: todo.id,
          completed: true,
          content: todo.content,
        };
      } else {
        return todo;
      }
    });

    this.setState({
      todos: newList,
    });
  };
  render() {
    return (
      <div className="App custom-container">
        <svg
          className="logo mx-auto mt-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
        <h1 className="title">Today</h1>
        <Todos
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
          changeStatus={this.changeStatus}
        />
        <div className="add-todo-container">
          <AddTodo addTodo={this.addTodo} />
        </div>
      </div>
    );
  }
}

export default App;

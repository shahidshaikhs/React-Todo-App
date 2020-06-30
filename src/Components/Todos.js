import React from "react";
import placeholderImage from "../Assets/party.png";

const Todos = ({ todos, deleteTodo, changeStatus }) => {
  let todosList = todos.length ? (
    todos.map((todo) => {
      return (
        <div
          className={
            "todo-container mt-5" + (todo.completed ? " bg-color-complete" : "")
          }
          key={todo.id}
          onClick={(e) => {
            e.stopPropagation();
            changeStatus(todo.id);
          }}
        >
          <div
            className={
              "checkbox mr-2" + (todo.completed ? " checkbox-active" : "")
            }
          >
            <svg
              className={todo.completed ? "" : "hidden"}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
            </svg>
          </div>
          <h2 className={todo.completed ? "completed-color" : ""}>
            {todo.content}
          </h2>
          <svg
            onClick={(e) => {
              e.stopPropagation();
              deleteTodo(todo.id);
            }}
            className="delete"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z" />
          </svg>
        </div>
      );
    })
  ) : (
    <div className="placeholder mt-32">
      <img className="mx-auto" src={placeholderImage} alt="Placeholder" />
      <p className="mt-6 text-white text-center">
        Yay! You are done for the day!
      </p>
    </div>
  );
  return <div className="todos">{todosList}</div>;
};

export default Todos;

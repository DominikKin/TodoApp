import React from "react";
import { FaUserEdit, FaTrash } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

function Todo({ todo, removeTodo, toggleComplete, showModal }) {
  return (
    <div
      key={todo.id}
      className={`todo-row ${todo.complete ? "complete" : ""} ${
        todo.colourHighlight
      }`}
    >
      <div className="todo-text">
        {todo.title}
        {todo.input}
      </div>
      <div className="todo-icons">
        <TiTick
          className={todo.complete ? "tick-icon-complete" : "tick-icon"}
          onClick={() => {
            toggleComplete(todo.id);
          }}
        />
        <FaUserEdit className="edit-icon" onClick={() => showModal(todo)} />
        <FaTrash onClick={() => removeTodo(todo.id)} className="delete-icon" />
      </div>
    </div>
  );
}

export default Todo;

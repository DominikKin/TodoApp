import React, { useState } from "react";
import { IoEnter } from "react-icons/io5";
import { v4 as uuidv4 } from "uuid";
function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    input: "",
    completed: false,
    details: "",
    isBeingEdited: false,
    colourHighlight: "noCol",
  });

  function inputChange(e) {
    setTodo({ ...todo, input: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!todo.input) return;
    addTodo({ ...todo, id: uuidv4() });
    setTodo({ ...todo, input: "" });
  }
  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        <input
          value={todo.input}
          onChange={inputChange}
          className="todo-input"
        />
        <button type="submit" className="todo-button">
          <IoEnter />
        </button>
      </form>
    </div>
  );
}

export default TodoForm;

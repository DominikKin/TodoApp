import React from "react";
import Todo from "./Todo";
import Modal from "./Modal";
import { Motion, spring } from "react-motion";

function TodoList({
  allTodos,
  removeTodo,
  toggleComplete,
  showModal,
  hideModal,
  updateTodo,
  changeColour,
  markImportant,
  clearDone,
}) {
  return (
    <div className="todo-container">
      <button className="btn-clear" onClick={clearDone}>
        Clear done items
      </button>
      {allTodos.map((todo) => {
        return (
          <React.Fragment key={todo.id}>
            <Todo
              todo={todo}
              removeTodo={removeTodo}
              toggleComplete={toggleComplete}
              showModal={showModal}
            />
            {todo.isBeingEdited ? (
              <Modal
                hideModal={hideModal}
                todo={todo}
                updateTodo={updateTodo}
                changeColour={changeColour}
                markImportant={markImportant}
              />
            ) : null}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default TodoList;

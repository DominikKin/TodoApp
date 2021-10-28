import React, { useState, useEffect } from "react";
import { IoCloseCircle } from "react-icons/io5";

function Modal({ hideModal, todo, updateTodo, changeColour, markImportant }) {
  const [editedTodo, setEditedTodo] = useState(todo);
  const [isEditingMain, setIsEditingMain] = useState(false);
  const [isEditingDesc, setIsEditingDesc] = useState(false);

  function inputChangeMain(e) {
    setEditedTodo({ ...editedTodo, input: e.target.value });
  }
  function inputChangeDesc(e) {
    setEditedTodo({ ...editedTodo, details: e.target.value });
  }

  function handleMarkAsImportant(todo) {
    markImportant(todo);
  }

  return (
    <div className="modal-background">
      <div className="modal-container">
        <h2 style={{ marginTop: "5rem" }}>Task name:</h2>
        {isEditingMain ? (
          <form
            className="form-main"
            onSubmit={(e) => {
              e.preventDefault();
              updateTodo(editedTodo);
              setIsEditingMain(false);
            }}
          >
            <input
              className="input-main"
              name={editedTodo.input}
              type="text"
              value={editedTodo.input}
              onChange={inputChangeMain}
            />
          </form>
        ) : (
          <h2 className="main-text" onClick={() => setIsEditingMain(true)}>
            {editedTodo.input}
          </h2>
        )}
        <h2 style={{ marginTop: "5rem" }}>Some more information:</h2>
        {isEditingDesc ? (
          <form
            className="form-desc"
            onSubmit={(e) => {
              e.preventDefault();
              updateTodo(editedTodo);
              setIsEditingDesc(false);
            }}
          >
            <input
              className="input-desc"
              name={editedTodo.details}
              type="text"
              value={editedTodo.details}
              onChange={inputChangeDesc}
            />
          </form>
        ) : (
          <h2 className="desc-text" onClick={() => setIsEditingDesc(true)}>
            {editedTodo.details}
          </h2>
        )}

        <button className="close-modal" onClick={() => hideModal(todo)}>
          <IoCloseCircle />
        </button>
        <div className="colour-container">
          <div
            className={`colour-div col1 ${
              todo.colourHighlight === "col1" ? "active" : ""
            }`}
            onClick={() => changeColour(todo.id, "col1")}
          ></div>
          <div
            className={`colour-div col2 ${
              todo.colourHighlight === "col2" ? "active" : ""
            }`}
            onClick={() => changeColour(todo.id, "col2")}
          ></div>
          <div
            className={`colour-div col3 ${
              todo.colourHighlight === "col3" ? "active" : ""
            }`}
            onClick={() => changeColour(todo.id, "col3")}
          ></div>
          <div
            className={`colour-div col4 ${
              todo.colourHighlight === "col4" ? "active" : ""
            }`}
            onClick={() => changeColour(todo.id, "col4")}
          ></div>
        </div>
        <button
          className="btn-important"
          onClick={() => handleMarkAsImportant(todo)}
        >
          Mark as important
        </button>
      </div>
    </div>
  );
}

export default Modal;
// { hideModal, allTodos }

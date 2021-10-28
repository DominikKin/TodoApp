import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

import "./App.css";

const TODO_LOCAL_STORAGE_KEY = "todo-local-storage-key";

function App() {
  const [allTodos, setAllTodos] = useState([]);

  function showModal(todoToEdit) {
    setAllTodos(
      allTodos.map((todo) => {
        if (todo.id === todoToEdit.id) {
          return { ...todo, isBeingEdited: true };
        }
        return todo;
      })
    );
  }

  function hideModal(todoToEdit) {
    setAllTodos(
      allTodos.map((todo) => {
        if (todo.id === todoToEdit.id) {
          return { ...todo, isBeingEdited: false };
        }
        return todo;
      })
    );
  }

  useEffect(() => {
    const todosFromStorage = JSON.parse(
      localStorage.getItem(TODO_LOCAL_STORAGE_KEY)
    );
    if (todosFromStorage) {
      setAllTodos(todosFromStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(TODO_LOCAL_STORAGE_KEY, JSON.stringify(allTodos));
  }, [allTodos]);

  function addTodo(todo) {
    setAllTodos([...allTodos, todo]);
  }

  function removeTodo(id) {
    setAllTodos(allTodos.filter((todo) => todo.id !== id));
  }

  function toggleComplete(id) {
    setAllTodos(
      allTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      })
    );
  }

  function changeColour(id, col) {
    setAllTodos(
      allTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, colourHighlight: col };
        }
        return todo;
      })
    );
  }

  function markImportant(todo) {
    const sortedTodos = [...allTodos];
    sortedTodos.splice(allTodos.indexOf(todo), 1);

    sortedTodos.unshift(todo);

    setAllTodos(sortedTodos);
  }

  function clearDone() {
    setAllTodos(allTodos.filter((todo) => !todo.complete));
  }

  function updateTodo(todoToUpdate) {
    setAllTodos(
      allTodos.map((todo) => {
        if (todo.id === todoToUpdate.id) {
          return todoToUpdate;
        }
        return todo;
      })
    );
  }

  return (
    <div className="todo-app">
      <h1>Todo React App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        allTodos={allTodos}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
        showModal={showModal}
        hideModal={hideModal}
        updateTodo={updateTodo}
        changeColour={changeColour}
        markImportant={markImportant}
        clearDone={clearDone}
      />
    </div>
  );
}

export default App;

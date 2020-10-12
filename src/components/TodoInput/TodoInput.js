import React, { useState } from "react";
import { v1 as uuid } from "uuid";
import { appOperations } from "../../models/app";
import store from "../../store/createStore";
import "./TodoInput.css";

export const TodoInput = () => {
  const [name, setName] = useState("");

  return (
    <div className="todo-input-wrapper">
      <input
        type="text"
        placeholder="Add Todo"
        className="todo-input"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button
        type="button"
        className="todo-button"
        onClick={() => {
          if (name.length >= 1) {
            store.dispatch(
              appOperations.addTodo({
                name: name,
                id: uuid(),
                isCompleted: false,
                isFavorite: false,
              })
            );
            setName("");
          }
        }}
      >
        Add
      </button>
    </div>
  );
};

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { appOperations } from "../../models/app";
import { Icon } from "../../icons/Icon";
import "./TodoItem.css";

export const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(todo.name);
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);
  const [isFavorite, setIsFavorite] = useState(todo.isFavorite);

  return (
    <div className="todo-item">
      <div className="todo-item-navbar">
        <div
          className="todo-item-favorite"
          onClick={() => {
            setIsFavorite(!isFavorite);
            dispatch(appOperations.toggleFavorite(todo, isFavorite));
          }}
        >
          <Icon name="star" fill={isFavorite ? "#FDF20C" : "#eaeaea"} />
        </div>
        <input
          className="todo-item-completed"
          type="checkbox"
          name="subscribe"
          onChange={() => {
            setIsCompleted(!isCompleted);
            dispatch(appOperations.toggleCompleted(todo, isCompleted));
          }}
          checked={isCompleted}
        />
      </div>
      {isEdit ? (
        <input
          type="text"
          className="edit-item"
          placeholder={todo.name}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      ) : (
        <h2
          className={
            todo.isCompleted ? "todo-item-title completed" : "todo-item-title"
          }
        >
          {todo.name}
        </h2>
      )}
      <div className="todo-item-naw">
        <button
          type="button"
          className="todo-item-btn edit-btn"
          onClick={() => {
            dispatch(appOperations.editTodo(todo, name));
            setIsEdit(!isEdit);
          }}
        >
          {isEdit ? "Save" : "Edit"}
        </button>
        <button
          type="button"
          className="todo-item-btn delete-btn"
          onClick={() => dispatch(appOperations.deleteTodo(todo))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

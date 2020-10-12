import React, { useEffect, useState } from "react";
import { TodoItem } from "../TodoItem/TodoItem";
import { useSelector } from "react-redux";
import { route } from "../../scenes/route";
import "./TodoList.css";

export const TodoList = (props) => {

  const state = useSelector((state) => state);
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    if (props.location.pathname === route.favorite) {
      setTodo((todo) => state.app.items.filter((todo) => todo.isFavorite));
    } else if (props.location.pathname === route.completed) {
      setTodo((todo) => state.app.items.filter((todo) => todo.isCompleted));
    } else if (props.location.pathname === route.active) {
      setTodo((todo) => state.app.items.filter((todo) => !todo.isCompleted));
    } else if (props.location.pathname === route.allTodo) {
      setTodo((todo) => state.app.items);
    } else if (props.match.path === route.search) {
      setTodo((todo) =>
        state.app.items.filter((todo) => {
          if (
            todo.name.substr(0, props.match.params.string.length) ===
            props.match.params.string
          ) {
            return todo;
          }
        })
      );
    }
  }, [props.location.pathname, state.app.items, props.match]);

  return (
    <div className="todo-list-wrapper">
      {todo.map((item) => {
        return <TodoItem todo={item} key={item.id} />;
      })}
    </div>
  );
};

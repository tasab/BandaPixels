import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { route } from "../../scenes/route";
import { generatePath, useHistory } from "react-router";
import "./Header.css";

export const Header = () => {
  const history = useHistory();
  const [serachInput, setSearchInput] = useState("");

  return (
    <header className="todo-header">
      <div className="container">
        <h1 className="todo-header-title">Todo List </h1>
        <div className="header-navbar">
          <input
            type="text"
            className="todo-search"
            placeholder="Search Todo"
            value={serachInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <button
            type="button"
            className="todo-search-btn"
            onClick={() => {
              if (serachInput.length >= 1) {
                history.push(
                  generatePath(route.search, { string: serachInput })
                );
                setSearchInput("");
              }
            }}
          >
            Search Todo
          </button>
        </div>
        <div className="todo-header-menu">
          <ul className="todo-menu">
            <li className="todo-menu-item">
              <NavLink
                to={route.allTodo}
                className="menu-item-link"
                activeClassName="selected"
              >
                All Todos
              </NavLink>
            </li>
            <li className="todo-menu-item">
              <NavLink
                to={route.active}
                className="menu-item-link"
                activeClassName="selected"
              >
                Active
              </NavLink>
            </li>
            <li className="todo-menu-item">
              <NavLink
                to={route.favorite}
                className="menu-item-link"
                activeClassName="selected"
              >
                Favorite
              </NavLink>
            </li>
            <li className="todo-menu-item">
              <NavLink
                to={route.completed}
                className="menu-item-link"
                activeClassName="selected"
              >
                Completed
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

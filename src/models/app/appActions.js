export const INITIALIZATION_START = "INITIALIZATION_START";
export const INITIALIZATION_SUCCESS = "INITIALIZATION_SUCCESS";
export const INITIALIZATION_ERROR = "INITIALIZATION_ERROR";

export const ADD_TODO_START = "ADD_TODO_START";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const ADD_TODO_ERROR = "ADD_TODO_ERROR";

export const SET_TODO_START = "SET_TODO_START";
export const SET_TODO_SUCCESS = "SET_TODO_SUCCESS";
export const SET_TODO_ERROR = "SET_TODO_ERROR";

export const DELETE_TODO_START = "DELETE_TODO_START";
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
export const DELETE_TODO_ERROR = "DELETE_TODO_ERROR";

export const EDIT_TODO_START = "EDIT_TODO_START";
export const EDIT_TODO_SUCCESS = "EDIT_TODO_SUCCESS";
export const EDIT_TODO_ERROR = "EDIT_TODO_ERROR";

export const TOGGLE_COMPLETED_TODO_START = "TOGGLE_COMPLETED_TODO_START";
export const TOGGLE_COMPLETED_TODO_SUCCESS = "TOGGLE_COMPLETED_TODO_SUCCESS";
export const TOGGLE_COMPLETED_TODO_ERROR = "TOGGLE_COMPLETED_TODO_ERROR";

export const TOGGLE_FAVORITE_TODO_START = "TOGGLE_FAVORITE_TODO_START";
export const TOGGLE_FAVORITE_TODO_SUCCESS = "TOGGLE_FAVORITE_TODO_SUCCESS";
export const TOGGLE_FAVORITE_TODO_ERROR = "TOGGLE_FAVORITE_TODO_ERROR";

export function togleFavoriteTodoStart() {
  return {
    type: TOGGLE_FAVORITE_TODO_START,
  };
}
export function togleFavoriteTodoSuccess(todo, favorite) {
  return {
    type: TOGGLE_FAVORITE_TODO_SUCCESS,
    payload: { todo, favorite },
  };
}
export function togleFavoriteTodoError(error) {
  return {
    type: TOGGLE_FAVORITE_TODO_ERROR,
    payload: error,
  };
}

export function togleCompletedTodoStart() {
  return {
    type: TOGGLE_COMPLETED_TODO_START,
  };
}
export function togleCompletedTodoSuccess(todo, completed) {
  return {
    type: TOGGLE_COMPLETED_TODO_SUCCESS,
    payload: { todo, completed },
  };
}
export function togleCompletedTodoError(error) {
  return {
    type: TOGGLE_COMPLETED_TODO_ERROR,
    payload: error,
  };
}

export function editTodoStart() {
  return {
    type: EDIT_TODO_START,
  };
}
export function editTodoSuccess(todo, name) {
  return {
    type: EDIT_TODO_SUCCESS,
    payload: { todo, name },
  };
}
export function editTodoError(error) {
  return {
    type: EDIT_TODO_ERROR,
    payload: error,
  };
}

export function deleteTodoStart() {
  return {
    type: DELETE_TODO_START,
  };
}
export function deleteTodoSuccess(todo) {
  return {
    type: DELETE_TODO_SUCCESS,
    payload: todo,
  };
}
export function deleteTodoError(error) {
  return {
    type: DELETE_TODO_ERROR,
    payload: error,
  };
}

export function setTodoStart() {
  return {
    type: SET_TODO_START,
  };
}
export function setTodoSuccess(todo) {
  return {
    type: SET_TODO_SUCCESS,
    payload: todo,
  };
}
export function setTodoError(error) {
  return {
    type: SET_TODO_ERROR,
    payload: error,
  };
}

export function addTodoStart() {
  return {
    type: ADD_TODO_START,
  };
}
export function addTodoSuccess(todo) {
  return {
    type: ADD_TODO_SUCCESS,
    payload: todo,
  };
}
export function addTodoError(error) {
  return {
    type: ADD_TODO_ERROR,
    payload: error,
  };
}
export function initializationStart() {
  return {
    type: INITIALIZATION_START,
  };
}
export function initializationSuccess(todo) {
  return {
    type: INITIALIZATION_SUCCESS,
    payload: todo,
  };
}
export function initializationError(error) {
  return {
    type: INITIALIZATION_ERROR,
    payload: error,
  };
}

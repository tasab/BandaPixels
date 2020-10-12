import * as actions from "./appActions";
import api from "../../api";

export function init() {
  return async function Thunk(dispatch) {
    try {
      dispatch(actions.initializationStart());
      const items = api.init.getItems();
      if (items !== null) {
        dispatch(actions.initializationSuccess(items));
      }
    } catch (err) {
      console.log(err);
      dispatch(actions.initializationError());
    }
  };
}

export function addTodo(todo) {
  return async function Thunk(dispatch) {
    try {
      dispatch(actions.addTodoStart());
      dispatch(actions.addTodoSuccess(todo));
      dispatch(settingTodo());
    } catch (err) {
      console.log(err);
      dispatch(actions.addTodoError(err));
    }
  };
}

export function toggleCompleted(todo, complete) {
  return async function Thunk(dispatch) {
    try {
      dispatch(actions.togleCompletedTodoStart());
      dispatch(actions.togleCompletedTodoSuccess(todo, !complete));
      dispatch(settingTodo());
    } catch (err) {
      console.log(err);
      dispatch(actions.togleCompletedTodoError(err));
    }
  };
}

export function toggleFavorite(todo, favorite) {
  return async function Thunk(dispatch) {
    try {
      dispatch(actions.togleFavoriteTodoStart());
      dispatch(actions.togleFavoriteTodoSuccess(todo, !favorite));
      dispatch(settingTodo());
    } catch (err) {
      console.log(err);
      dispatch(actions.togleFavoriteTodoError(err));
    }
  };
}

export function deleteTodo(todo) {
  return async function Thunk(dispatch) {
    try {
      dispatch(actions.deleteTodoStart());

      dispatch(actions.deleteTodoSuccess(todo));
      dispatch(settingTodo());
    } catch (err) {
      console.log(err);
      dispatch(actions.deleteTodoError(err));
    }
  };
}

export function editTodo(todo, name) {
  return async function Thunk(dispatch) {
    try {
      dispatch(actions.editTodoStart());

      dispatch(actions.editTodoSuccess(todo, name));
      dispatch(settingTodo());
    } catch (err) {
      console.log(err);
      dispatch(actions.editTodoError(err));
    }
  };
}

export function settingTodo() {
  return async function Thunk(dispatch, getState) {
    try {
      dispatch(actions.setTodoStart());
      api.init.setItems(getState().app.items);
      dispatch(actions.setTodoSuccess());
    } catch (err) {
      console.log(err);
      dispatch(actions.setTodoError(err));
    }
  };
}

import * as actions from "./appActions";
import { INITIAL_STATE } from "../../state/initialState";

const addTodoReducer = (state = INITIAL_STATE, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case actions.INITIALIZATION_START:
      return {
        ...state,
        app: {
          ...state.app,
          isLoading: true,
          isError: false,
          error: null,
        },
      };

    case actions.INITIALIZATION_SUCCESS:
      return {
        ...state,
        app: {
          ...state.app,
          isLoading: false,
          isError: false,
          error: null,
          items: state.app.items.concat(action.payload),
        },
      };
    case actions.INITIALIZATION_ERROR:
      return {
        ...state,
        app: {
          ...state.app,
          isLoading: false,
          isError: true,
          error: action.payload,
        },
      };

    case actions.ADD_TODO_START:
      return {
        ...state,
        todo: {
          ...state.todo,
          isLoading: true,
          isError: false,
          error: null,
        },
      };

    case actions.ADD_TODO_SUCCESS:
      return {
        ...state,
        todo: {
          ...state.todo,
          isLoading: false,
          isError: false,
          error: null,
        },
        app: {
          ...state.app,
          items: [action.payload, ...state.app.items],
        },
      };
    case actions.ADD_TODO_ERROR:
      return {
        ...state,
        todo: {
          ...state.todo,
          isLoading: false,
          isError: true,
          error: action.payload,
        },
      };
    case actions.SET_TODO_START:
      return {
        ...state,
        todo: {
          ...state.todo,
          settTodo: {
            ...state.settTodo,
            isLoading: true,
            isError: false,
            error: null,
          },
        },
      };
    case actions.SET_TODO_SUCCESS:
      return {
        ...state,
        todo: {
          ...state.todo,
          settTodo: {
            ...state.settTodo,
            isLoading: false,
            isError: false,
            error: null,
          },
        },
      };
    case actions.SET_TODO_ERROR:
      return {
        ...state,
        todo: {
          ...state.todo,
          settTodo: {
            ...state.settTodo,
            isLoading: false,
            isError: true,
            error: action.payload,
          },
        },
      };
    case actions.DELETE_TODO_START:
      return {
        ...state,
        todo: {
          ...state.todo,
          deleteTodo: {
            ...state.deleteTodo,
            isLoading: true,
            isError: false,
            error: null,
          },
        },
      };
    case actions.DELETE_TODO_SUCCESS:
      return {
        ...state,
        app: {
          ...state.app,
          items: state.app.items.filter(
            (item) => item.id !== action.payload.id
          ),
        },
        todo: {
          ...state.todo,
          deleteTodo: {
            ...state.deleteTodo,
            isLoading: false,
            isError: false,
            error: null,
          },
        },
      };
    case actions.DELETE_TODO_ERROR:
      return {
        ...state,
        todo: {
          ...state.todo,
          deleteTodo: {
            ...state.deleteTodo,
            isLoading: false,
            isError: true,
            error: action.payload,
          },
        },
      };
    case actions.EDIT_TODO_START:
      return {
        ...state,
        todo: {
          ...state.todo,
          editTodo: {
            ...state.editTodo,
            isLoading: true,
            isError: false,
            error: null,
          },
        },
      };
    case actions.EDIT_TODO_SUCCESS:
      return {
        ...state,
        app: {
          ...state.app,
          items: state.app.items.map((item) =>
            item.id === action.payload.todo.id
              ? { ...item, name: action.payload.name }
              : item
          ),
        },
        todo: {
          ...state.todo,
          editTodo: {
            ...state.editTodo,
            isLoading: false,
            isError: false,
            error: null,
          },
        },
      };
    case actions.EDIT_TODO_ERROR:
      return {
        ...state,
        todo: {
          ...state.todo,
          editTodo: {
            ...state.editTodo,
            isLoading: false,
            isError: true,
            error: action.payload,
          },
        },
      };
    case actions.TOGGLE_COMPLETED_TODO_START:
      return {
        ...state,
        todo: {
          ...state.todo,
          toggleComplete: {
            ...state.toggleComplete,
            isLoading: true,
            isError: false,
            error: null,
          },
        },
      };
    case actions.TOGGLE_COMPLETED_TODO_SUCCESS:
      return {
        ...state,
        app: {
          ...state.app,
          items: state.app.items.map((item) =>
            item.id === action.payload.todo.id
              ? { ...item, isCompleted: action.payload.completed }
              : item
          ),
        },
        todo: {
          ...state.todo,
          toggleComplete: {
            ...state.toggleComplete,
            isLoading: false,
            isError: false,
            error: null,
          },
        },
      };
    case actions.TOGGLE_COMPLETED_TODO_ERROR:
      return {
        ...state,
        todo: {
          ...state.todo,
          toggleComplete: {
            ...state.toggleComplete,
            isLoading: false,
            isError: true,
            error: action.payload,
          },
        },
      };
    case actions.TOGGLE_FAVORITE_TODO_START:
      return {
        ...state,
        todo: {
          ...state.todo,
          toggleFavorite: {
            ...state.toggleFavorite,
            isLoading: true,
            isError: false,
            error: null,
          },
        },
      };
    case actions.TOGGLE_FAVORITE_TODO_SUCCESS:
      return {
        ...state,
        app: {
          ...state.app,
          items: state.app.items.map((item) =>
            item.id === action.payload.todo.id
              ? { ...item, isFavorite: action.payload.favorite }
              : item
          ),
        },
        todo: {
          ...state.todo,
          toggleFavorite: {
            ...state.toggleFavorite,
            isLoading: false,
            isError: false,
            error: null,
          },
        },
      };
    case actions.TOGGLE_FAVORITE_TODO_ERROR:
      return {
        ...state,
        todo: {
          ...state.todo,
          toggleFavorite: {
            ...state.toggleFavorite,
            isLoading: false,
            isError: true,
            error: action.payload,
          },
        },
      };
  }
  return state;
};

export default addTodoReducer;

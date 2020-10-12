const TODO_ITEMS = "todo_items";

export const init = {
  getItems() {
    return JSON.parse(window.localStorage.getItem(TODO_ITEMS));
  },
  setItems(todoList) {
    return window.localStorage.setItem(TODO_ITEMS, JSON.stringify(todoList));
  },
};

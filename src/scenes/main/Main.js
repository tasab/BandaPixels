import React from "react";
import { Header } from "../../components/Header/Header";
import { TodoInput } from "../../components/TodoInput/TodoInput";
import { TodoList } from "../../components/TodoList/TodoList";

const Main = (props) => {
  return (
    <div>
      <Header />
      <TodoInput />
      <TodoList {...props} />
    </div>
  );
};

export default Main;

import React from "react";
import Main from "./main/Main";
import { Switch, Route, Redirect } from "react-router-dom";

export const route = {
  main: "/",
  allTodo: "/alltodo",
  completed: "/completed",
  favorite: "/favorite",
  active: "/active",
  search: "/search/:string",
};

const Router = () => {
  return (
    <Switch>
      <Route exact path={route.main} component={Main}>
        <Redirect to={route.allTodo} />
      </Route>
      <Route path={route.allTodo} component={Main} />
      <Route path={route.favorite} component={Main} />
      <Route path={route.completed} component={Main} />
      <Route path={route.active} component={Main} />
      <Route path={route.search} component={Main} />
    </Switch>
  );
};

export default Router;

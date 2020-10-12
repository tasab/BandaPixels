import React, { useEffect } from "react";
import store from "./store/createStore";
import Router from "./scenes/route";
import { appOperations } from "./models/app";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

const App = () => {
  useEffect(() => {
    store.dispatch(appOperations.init());
  }, []);

  return (
    <BrowserRouter>
      <main className="App">
        <Router />
      </main>
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./styles/index.css";
import { configureStore } from "./redux/configureStore";
// import * as serviceWorker from "./config/serviceWorker";
import { Routes } from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// serviceWorker.unregister();

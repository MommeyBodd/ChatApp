import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
// import * as serviceWorker from "./config/serviceWorker";
import { Routes } from "./routes/Routes";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById("root")
);

// serviceWorker.unregister();

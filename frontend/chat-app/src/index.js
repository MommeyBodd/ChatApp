import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./styles/index.css";
import { configureStore } from "./redux/configureStore";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Routes } from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";

const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// serviceWorker.unregister();

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "normalize.css";
import "react-virtualized/styles.css";
import registerServiceWorker from "./registerServiceWorker";

import configureStore from "./configureStore";

import Main from "main/components";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <Main />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
registerServiceWorker();

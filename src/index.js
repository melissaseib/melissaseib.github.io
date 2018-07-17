import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import "sanitize.css/sanitize.css";
import createHistory from "history/createBrowserHistory";
import configureStore from "./configureStore";
import "./index.css";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import { fromJS } from "immutable";
// Create redux store with history
const history = createHistory();
const initialState = {};
const store = configureStore(history, fromJS(initialState));
const MOUNT_NODE = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  MOUNT_NODE
);

registerServiceWorker();

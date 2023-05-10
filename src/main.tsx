import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "store/store";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

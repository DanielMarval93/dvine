import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import {Provider} from "./context/RefContext";

const root = createRoot(document.getElementById("root"));
 
root.render(
  <Provider >
    <App />
  </Provider>
);

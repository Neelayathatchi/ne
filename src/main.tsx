import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/typography.css";
import "./styles/globals.css";
import "./styles/animations.css";
import "./styles/utilities.css";

/* MUST BE LAST — mobile overrides */
import "./styles/mobile-final.css";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
// import * as dotenv from "dotenv";

const appHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--app-height", `${window.innerHeight * 0.01}px`);
};

window.addEventListener("resize", appHeight);

appHeight();

// dotenv.config();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

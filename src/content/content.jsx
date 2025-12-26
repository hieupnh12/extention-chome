import React from "react";
import ReactDOM from "react-dom/client";
import Widget from "./Widget";
import "../css/widget.css";

// tạo div gắn vào trang web
const container = document.createElement("div");
container.id = "edunet-extension-root";
document.body.appendChild(container);

// render React
ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <Widget />
  </React.StrictMode>
);

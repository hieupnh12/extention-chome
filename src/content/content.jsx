import React from "react";
import ReactDOM from "react-dom/client";
import Widget from "./Widget";
import widgetCss from "../css/widget.css?inline";
import checklistCss from "../css/checklist.css?inline";
import buttonCss from "../css/buttonDown.css?inline";

const WIDGET_CSS = `${widgetCss}\n${checklistCss}\n${buttonCss}`;

function mountWidget() {
  if (!document.body) {
    document.addEventListener("DOMContentLoaded", mountWidget, { once: true });
    return;
  }

  if (document.getElementById("edunet-extension-root")) return;

  const host = document.createElement("div");
  host.id = "edunet-extension-root";
  host.style.cssText =
    "all:initial;display:block;position:fixed;z-index:2147483646;top:0;left:0;width:0;height:0;overflow:visible;";

  const shadow = host.attachShadow({ mode: "open" });
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(WIDGET_CSS);
  shadow.adoptedStyleSheets = [sheet];

  const mountPoint = document.createElement("div");
  mountPoint.id = "edunet-widget-root";
  shadow.appendChild(mountPoint);
  document.body.appendChild(host);

  ReactDOM.createRoot(mountPoint).render(
    <React.StrictMode>
      <Widget />
    </React.StrictMode>
  );
}

mountWidget();

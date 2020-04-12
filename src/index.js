import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Covid19Tracking from "./Covid19Tracking";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Covid19Tracking />, document.getElementById("root"));
serviceWorker.unregister();

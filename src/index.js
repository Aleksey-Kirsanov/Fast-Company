import "./index";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import TableUsers from "./component/table/tableUsers";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <TableUsers/>
  </>
);

reportWebVitals();

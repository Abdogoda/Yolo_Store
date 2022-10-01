import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import { HashRouter } from "react-router-dom";
import Layout from "./components/Layout";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { AppProvider } from "./reducer/Context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <HashRouter>
      <Layout />
    </HashRouter>
  </AppProvider>
);

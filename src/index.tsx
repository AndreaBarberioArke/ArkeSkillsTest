import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import MainNavigation from "./components/layout/MainNavigation";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <MainNavigation />
      <App />
    </React.StrictMode>
  </BrowserRouter>
<<<<<<< HEAD
);
=======
);
>>>>>>> feat/table

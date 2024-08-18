import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import BioSci from "./components/BioSci.jsx";
import GenEd from "./components/GenEd.jsx";
import ProfEd from "./components/ProfEd.jsx";
import Results from "./components/Results.jsx";
import Option from "./components/Option.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/biosci",
    element: <BioSci />,
  },
  {
    path: "/gened",
    element: <GenEd />,
  },
  {
    path: "/profed",
    element: <ProfEd />,
  },
  {
    path: "/results",
    element: <Results />,
  },
  {
    path: "/option/:id",
    element: <Option />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import BioSci from "./components/BioSci.jsx";
import GenEd from "./components/GenEd.jsx";
import ProfEd from "./components/ProfEd.jsx";
import Rizal from "./components/Rizal.jsx";
import Option from "./components/Option.jsx";
import Behavior from "./components/Behavior.jsx";
import GenEdSpecial from "./components/GenEdSpecial.jsx";

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
    path: "/rizal",
    element: <Rizal />,
  },
  {
    path: "/behavior",
    element: <Behavior />,
  },
  {
    path: "/option/:id",
    element: <Option />,
  },
  {
    path: "/option/gened/special",
    element: <GenEdSpecial />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import "bootstrap";

import Start from "./Pages/Start.tsx";
import Treatment from "./Pages/Treatment.tsx";
import EmployeSelector from "./Pages/EmployeSelector.tsx";
import Calendar from "./Pages/Calendar.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <Start />
      </App>
    ),
  },
  {
    path: "/treatment",
    element: (
      <App>
        <Treatment />
      </App>
    ),
  },
  {
    path: "/employeSelector",

    element: (
      <App>
        <EmployeSelector />
      </App>
    ),
  },
  {
    path: "/calendar",
    element: (
      <App>
        <Calendar />
      </App>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

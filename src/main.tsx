import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap";
import Navbar from "./Components/navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Start from "./Pages/Start.tsx";
import Treatment from "./Pages/Treatment.tsx";
import EmployeSelector from "./Pages/EmployeSelector.tsx";

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
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

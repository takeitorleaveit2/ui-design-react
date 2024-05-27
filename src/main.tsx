import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import "bootstrap";

import Start from "./Pages/Start.tsx";
import Treatment from "./Pages/Treatment.tsx";
import EmployeeSelector from "./Pages/EmployeeSelector.tsx";
import Calendar from "./Pages/Calendar.tsx";
import Confirmation from "./Pages/Confirmation.tsx";
import MyBookings from "./Pages/MyBookings.tsx";
import Account from "./Pages/Account.tsx";

const router = createHashRouter([
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
        <EmployeeSelector />
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
  {
    path: "/confirmation",
    element: (
      <App>
        <Confirmation />
      </App>
    ),
  },

  {
    path: "/mybookings",
    element: (
      <App>
        <MyBookings />
      </App>
    ),
  },

  {
    path: "/account",
    element: (
      <App>
        <Account />
      </App>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

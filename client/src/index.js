import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import Layout from "./Pages/Layout";
import ErrorPage from "./Pages/ErrorPage";
import EmployeeList from "./Pages/EmployeeList";
import EmployeeCreator from "./Pages/EmployeeCreator";
import EmployeeUpdater from "./Pages/EmployeeUpdater";

import EquipmentList from "./Pages/EquipmentList";
import EquipmentCreator from "./Pages/EquipmentCreator";
import EquipmentUpdater from "./Pages/EquipmentUpdater";
import MissingEmployees from "./Pages/MissingEmployees";

import "./index.css";
import TableTest from "./Pages/TableTest";
import FormTest from "./Pages/FormTest";
import Bonus from "./Pages/Bonuses"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <EmployeeList />,
      },
      {
        path: "/equipments",
        element: <EquipmentList />,
      },
      {
        path: "/create",
        element: <EmployeeCreator />,
      },
      {
        path: "/createEquipment",
        element: <EquipmentCreator />,
      },
      {
        path: "/update/:id",
        element: <EmployeeUpdater />,
      },
      {
        path: "/updateEquipment/:id",
        element: <EquipmentUpdater />,
      },
      {
        path: "/table-test",
        element: <TableTest />,
      },
      {
        path: "/form-test",
        element: <FormTest />,
      },
      {
        path: "/missing",
        element: <MissingEmployees />,
      },
      {
        path: "/bonus/:employeeId",
        element: <Bonus />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();

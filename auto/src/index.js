import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductLayout from "./layouts/ProductLayout";
import FotoCar from "./pages/HomePages";
import DetailsPages from "./pages/DetailsPages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductLayout />,
    children: [
      {
        path: "/",
        element: <FotoCar />,
      },
      {
        path: "/details/:id",
        element: <DetailsPages />,
      },
    ],
  },
  //...
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RestaurantsLayout from "./layouts/RestaurantsLayout";
import RestaurantsMenu from "./pages/RestorantsPage";
import DetailRestaurants from "./pages/DetailRestaurants";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RestaurantsLayout />,
    children: [
      {
        path: "/",
        element: <RestaurantsMenu />,
      },
      {
        path: "/details/:id",
        element: <DetailRestaurants />,
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

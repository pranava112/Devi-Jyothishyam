import AllStotras from "../Stotras/AllStotras";
import ErrorPage from "./ErrorPage";
import HanumanChalisa from "../Stotras/HanumanChalisa";
import Home from "../logs/Home";
import KanakadharaStotram from "../Stotras/KanakadharaStotram";
import Layout from "../logs/Layout";
import Map from "../logs/Map";
import PlanetaryPositions from "../RoutingProvider/PlanetaryPositions";
import React from "react";
import ReactDOM from "react-dom/client";
import UserDashBoard from "../logs/UserDashBoard";
import VishnusahasranamaStotram from "../Stotras/VishnusahasranamaStotram";
import { createBrowserRouter } from "react-router-dom";

export const routing = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home/> },
      { path: "*", element: <ErrorPage /> },
      {path:"/map",element:<Map/>},
      {path:"/DashBoard",element:<UserDashBoard/>},
      {path:"/PlanetaryPositions",element:<PlanetaryPositions/>},
      {path:"/AllStotras",element:<AllStotras/>},
      {path:"/KanakaDharaStotram",element:<KanakadharaStotram/>},
      {path:"/VishnusahasranamaStotram", element:<VishnusahasranamaStotram/>},
      {path:"/HanumanChalisa",element:<HanumanChalisa/>},
    ],
  },
]);

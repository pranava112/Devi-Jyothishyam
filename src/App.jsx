import React from "react";
import { RouterProvider } from "react-router-dom";
import { RoutingSource } from "./RoutingProvider/RoutingSource";

const App = () => {
  return (
  <>
   <RouterProvider router={RoutingSource} />;
  </>
 );
};

export default App;

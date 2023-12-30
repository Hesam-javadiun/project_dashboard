import type { RouteObject } from "react-router-dom";
import Dashboard from "./dashboard";

const dashboardRoute: RouteObject = {
  index: true,
  element: <Dashboard />,
};

export default dashboardRoute;

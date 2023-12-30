import type { RouteObject } from "react-router-dom";
import Tasks from "./tasks";

const tasksRoute: RouteObject = {
  path: 'tasks',
  element: <Tasks />,
};

export default tasksRoute;

import type { RouteObject } from "react-router-dom";
import Projects from "./projects";

const projectsRoute: RouteObject = {
  path: 'projects',
  element: <Projects />,
};

export default projectsRoute;

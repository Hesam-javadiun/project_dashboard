import type { RouteObject } from 'react-router-dom';
import Application from './application';
import tasksRoute from './tasks';
import dashboardRoute from './dashboard';
import projectsRoute from './projects';
const applicationRoute : RouteObject = {
    path: '/application',
    element: <Application/>,
    children: [
        dashboardRoute,
        tasksRoute,
        projectsRoute
    ]
} 

export default applicationRoute
import type { RouteObject } from 'react-router-dom';
import Dummy from '~components/dummy';

const applicationRoute : RouteObject = {
    path: '/application',
    element: <Dummy routeName='application'/>,
} 

export default applicationRoute
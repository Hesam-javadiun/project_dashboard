import type { RouteObject } from 'react-router-dom';
import Dummy from '../../components/dummy/dummy';

const loginRoute : RouteObject = {
    path: '/login',
    element: <Dummy routeName='login'/>,
} 

export default loginRoute

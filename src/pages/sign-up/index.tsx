import type { RouteObject } from 'react-router-dom';
import Dummy from '../../components/dummy/dummy';

const signUpRoute : RouteObject = {
    path: '/signup',
    element: <Dummy routeName='signup'/>,
} 

export default signUpRoute

import type { RouteObject } from 'react-router-dom';
import Dummy from '../../components/dummy/dummy';

const nomatchRoute : RouteObject = {
    path: '*',
    element: <Dummy routeName='nomatch'/>,
} 

export default nomatchRoute
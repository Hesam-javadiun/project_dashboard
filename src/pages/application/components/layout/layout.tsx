import classes from './layout.module.css';
import type { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import useTheme from '~hooks/useTheme';

type LayoutProps = {
  children: ReactNode
}

//css
// * media query
// * fonts 
// * i18-next

//one component layout hich rabti app bar nabayad dashte bashe 
//two color reshon bayad be onvane prop dade beshe 
//    * be sorate prop 
//    * az react router begiram 

function Layout({children} : LayoutProps){
  const {forDarkMode} = useTheme();

  return <div className={`${classes.container}`}>
    <div className={`${classes.navbar}  ${forDarkMode([classes.darkmode])}}`}>{children}</div>
    <div className={`${classes.outlet}`}><Outlet/></div> 
  </div>;
}

export default Layout;
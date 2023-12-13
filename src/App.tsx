import routes from "./pages"
import { RouterProvider } from "react-router-dom"
// import Dummy from "./components/dummy/dummy";

function App() {

  return (
    <RouterProvider router={routes}
    //  fallbackElement={<Dummy routeName="fallback"/>}
     />
  )
}

export default App

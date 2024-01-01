import router from "./pages";
import { RouterProvider } from "react-router-dom";
// import Dummy from "./components/dummy/dummy";
import ThemeProvider from "~components/theme-provider";
function App() {
  return (
    <ThemeProvider>
      <RouterProvider
        router={router}
        //  fallbackElement={<Dummy routeName="fallback"/>}
      />
    </ThemeProvider>
  );
}

export default App;

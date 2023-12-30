import { createBrowserRouter } from "react-router-dom";
import applicationRoute from "./application";
import loginRoute from "./login";
import signUpRoute from "./sign-up";
import nomatchRoute from "./nomatch";

const router = createBrowserRouter([applicationRoute, loginRoute, signUpRoute, nomatchRoute]);

export default router;

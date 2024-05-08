import type { LoaderFunctionArgs } from "react-router-dom";
import { createBrowserRouter, redirect } from "react-router-dom";
import ErrorPage from "../views/error-page";
import Home from "../views/home";
import Signin from "../views/signin";
import Signup from "../views/signup";

const router = createBrowserRouter([
  {
    path: "/",
    loader: protectedLoader,
    element: <Home />,
  },
  {
    path: "/login",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/logout",
    async action() {
      // We signout in a "resource route" that we can hit from a fetcher.Form
      // await fakeAuthProvider.signout();
      // return redirect("/");
    },
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/404",
    element: <ErrorPage />,
  },
]);

function protectedLoader({ request }: LoaderFunctionArgs) {
  const fakeAuthProvider = { isAuthenticated: true };

  if (!fakeAuthProvider.isAuthenticated) {
    let params = new URLSearchParams();
    params.set("from", new URL(request.url).pathname);
    return redirect("/login?" + params.toString());
  }
  return null;
}

export default router;

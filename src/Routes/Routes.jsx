import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import MyWork from "../pages/MyWork/MyWork/MyWork";
import About from "../pages/About/About";
import NotFound from "../pages/NotFound/NotFound";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
            path: "/",
            element: <MyWork />
        },
        {
            path: "/about",
            element: <About />
        }
      ]
    },
    {
        path: "*",
        element: <NotFound />
    }
  ]);
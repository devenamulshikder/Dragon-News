import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/errorPage/ErrorPage";
import About from "../pages/about/About";
import Career from "../pages/career/Career";
import CategoryNews from "../components/leftAside/CategoryNews";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/career",
        Component: Career,
      },
      {
        path: "/categories/:id",
        Component: CategoryNews,
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import { Home } from "./home/Home";
import { DefaultRoot } from "./roots/DefaultRoot";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultRoot />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

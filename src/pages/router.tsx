import { createBrowserRouter } from "react-router-dom";
import { Home } from "./home/Home";
import { DefaultRoot } from "./roots/DefaultRoot";
import { CreatePost } from "./Post/CreatePost";
import { ShowPost } from "./Post/ShowPost";
import { EditPost } from "./Post/EditPost";

export const router = createBrowserRouter([
  {
    path: "/catblog/",
    element: <DefaultRoot />,
    children: [
      {
        path: "/catblog/",
        element: <Home />,
      },
      {
        path: "posts/",
        element: <Home />,
      },
      {
        path: "posts/create",
        element: <CreatePost />,
      },
      {
        path: "posts/1",
        element: <ShowPost />,
      },
      {
        path: "posts/edit/1",
        element: <EditPost />,
      },
    ],
  },
]);

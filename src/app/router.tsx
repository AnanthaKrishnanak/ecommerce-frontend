import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { paths } from "@/config/path";

const routes = createBrowserRouter([
  {
    path: paths.home.path,
    element: <h1>home</h1>,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={routes} />;
};

export default AppRouter;

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { paths } from "@/config/path";
import MainLayout from "@/layout";
import Landing from "@/components/landing";

const routes = createBrowserRouter([
  {
    path: paths.home.path,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={routes} />;
};

export default AppRouter;

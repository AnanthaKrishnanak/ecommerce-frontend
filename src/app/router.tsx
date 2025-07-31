import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { paths } from "@/config/path";
import MainLayout from "@/layout";
import Landing from "@/components/landing";
import Products from "@/features/products/route/products";
import ProductDetails from "@/features/products/components/product-details";

const routes = createBrowserRouter([
  {
    path: paths.home.path,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: paths.products.path,
        element: <Products />,
      },
      {
        path: `${paths.products.path}:productId`,
        element: <ProductDetails />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={routes} />;
};

export default AppRouter;

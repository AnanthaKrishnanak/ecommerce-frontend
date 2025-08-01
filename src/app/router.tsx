import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { paths } from "@/config/path";
import MainLayout from "@/layout";
import Landing from "@/components/landing";
import Products from "@/features/products/route/products";
import ProductDetails from "@/features/products/components/product-details";
import Admin from "@/features/admin/features/products/route";
import ProductList from "@/features/admin/features/products/components/products-list";
import Dashboard from "@/features/admin/features/dashboard/route";
import ProductForm from "@/features/admin/features/products/components/product-form";

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
  {
    path: paths.admin.path,
    element: <Admin />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: paths.admin.products.path,
        element: <ProductList />,
      },
      {
        path: `${paths.admin.products.path}add/`,
        element: <ProductForm />,
      },
    ],
  },
  {
    path: "*",
    element: <Landing />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={routes} />;
};

export default AppRouter;

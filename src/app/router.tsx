import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { paths } from '@/config/paths';

const AppRouter = () => {
  const routes = createBrowserRouter([
    {
      path: paths.home.path,
      element: <div>Home</div>,
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default AppRouter;

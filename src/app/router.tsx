import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { paths } from '@/config/paths';
import { Landing } from '@/components/landing';

const AppRouter = () => {
  const routes = createBrowserRouter([
    {
      path: paths.home.path,
      element: <Landing />,
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default AppRouter;

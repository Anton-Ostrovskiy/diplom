
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider,  createBrowserRouter } from 'react-router-dom';
import Root from './layout';
import { Routes } from './constants/Routes';
import Home from './pages/Home';
import Transactions from './pages/Transactions';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: Routes.Home,
        element: <Home />,
      },
      {
        path: Routes.Transactions,
        element: <Transactions />,
      },
    ],
  },
]);

root.render(
  // <Provider store={store}>
    <RouterProvider router={router} />
  // </Provider>
);

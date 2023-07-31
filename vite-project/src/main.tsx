
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider,  createBrowserRouter } from 'react-router-dom';
import Root from './layout';
import { Routes } from './constants/Routes';
import Home from './pages/Home';
import Transactions from './pages/Transactions';
import { Provider } from 'react-redux';
import { store } from './store';
import CardSettings from './layout/CardSettings';

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
        element: <Transactions withFullWidth={false} />,
      },
      {
        path: Routes.CardSettings,
        element: <CardSettings onCardSettingsSubmit={function (cardNumber: string, balance: number): void {
          throw new Error('Function not implemented.');
        } } />,
      },
    ],
  },
]);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

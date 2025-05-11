import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';
import Wishlist from './Components/WishList/WishList';
import Statistics from './Components/Statistics/Statistics';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { 
        path: '/', 
        element: <Home /> 
      },
      { 
        path: '/dashboard', 
        element: <Dashboard /> 
      },
      { 
        path: '/wishlist', 
        element: <Wishlist /> 
      },
      { 
        path: '/statistics', 
        element: <Statistics /> 
      },

    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

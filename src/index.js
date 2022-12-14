import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App'
import reportWebVitals from './reportWebVitals';
import { HomePage } from './pages/HomePage';
import { RolesPage } from './pages/RolesPage';
import { UserPage } from './pages/UserPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { GoodsPage } from './pages/GoodsPage';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { RedactPage } from './pages/RedactPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/UserPage",
    element: <UserPage />,
  },
  {
    path: "/CategoriesPage",
    element: <CategoriesPage />,
  },
  {
    path: "/GoodsPage",
    element: <GoodsPage />,
  },
  {
    path: "/RolesPage",
    element: <RolesPage />,
  },
  {
    path:"/RedactPage",
    element: <RedactPage />
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

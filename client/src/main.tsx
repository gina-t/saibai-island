import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.tsx';
import HomePage from './pages/HomePage.tsx';
import SaibaiPage from './pages/SaibaiPage.tsx'
import StakeHoldersPage from './pages/StakeHoldersPage.tsx';
import DesignPage from './pages/DesignPage.tsx';
import ImplementationPage from './pages/ImplementationPage.tsx';
import CostsPage from './pages/CostsPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Not Found</div>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/saibai',
        element: <SaibaiPage />,
      },
      {
        path: '/stakeholders',
        element: <StakeHoldersPage />,
      },
      {
        path: '/design',
        element: <DesignPage />, 
      },
      {
        path: '/implementation',
        element: <ImplementationPage />,
      },
      
      { 
        path: '/costs',
        element: <CostsPage />,
      },
    ],
  },
]);

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find the root element');
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
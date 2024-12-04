import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage.jsx'
import App from './App.jsx'
import Card from './pages/Shop.jsx'
import Cart from './pages/Cart.jsx'

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />
    },
    {
      path: '/shop',
      element: <Card />
    },
    {
      path: '/cart',
      element: <Cart />
    }, 
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

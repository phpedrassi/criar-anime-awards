import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AwardContextProvider } from './context/AwardContext.jsx'

// pages
import Categories from './routes/Categories'
import Animes from './routes/Animes'
import Winner from './routes/Winner'
import Votes from './routes/Votes'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Categories />,
      },
      {
        path: "/animes",
        element: <Animes />,
      },
      {
        path: "/winner",
        element: <Winner />,
      },
      {
        path: "/votes/:id",
        element: <Votes />,
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AwardContextProvider>
      <RouterProvider router={router} />
    </AwardContextProvider>
  </React.StrictMode>,
)

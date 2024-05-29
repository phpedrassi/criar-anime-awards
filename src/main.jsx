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
    path: "/criar-anime-awards/",
    element: <App />,
    children: [
      {
        path: "/criar-anime-awards/",
        element: <Categories />,
      },
      {
        path: "/criar-anime-awards/animes",
        element: <Animes />,
      },
      {
        path: "/criar-anime-awards/winner",
        element: <Winner />,
      },
      {
        path: "/criar-anime-awards/votes/:id",
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

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ErrorPage from './pages/ErrorPage.tsx';
import PhotoCarousel from './pages/PhotoCarousel.tsx';
import PhotoSplideSlider from './pages/PhotoSplideSlider.tsx';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { photoLoader } from './loaders/photoLoader.ts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {path:"photocarousel",element:<PhotoSplideSlider></PhotoSplideSlider>, loader:photoLoader},
      {path:"photos",element:<PhotoCarousel></PhotoCarousel>, loader:photoLoader}
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)

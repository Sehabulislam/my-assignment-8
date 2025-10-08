import React from 'react';
import { createBrowserRouter} from "react-router";
import RootLayout from '../Root/RootLayout';
import Home from '../Pages/Home/Home';


export const router = createBrowserRouter([
  {
    path: "/",
    Component : RootLayout,
    children : [
        {
            index : true,
            path:'/',
            loader : () => fetch('/trendingApp.json') ,
            Component : Home ,
        }
    ]
  },
]);

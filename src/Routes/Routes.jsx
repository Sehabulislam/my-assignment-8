import React from 'react';
import { createBrowserRouter} from "react-router";
import RootLayout from '../Root/RootLayout';
import Home from '../Pages/Home/Home';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import AllApps from '../Pages/AllApp/AllApps';
import InstallApps from '../Pages/InstallApps/InstallApps';
import Loading from '../Loading';
import AppDetails from '../Pages/AppDetails/AppDetails';


export const router = createBrowserRouter([
  {
    path: "/",
    Component : RootLayout,
    hydrateFallbackElement : <Loading></Loading> ,
    children : [
        {
            index : true,
            path:'/',
            loader : () => fetch('/trendingApp.json') ,
            Component : Home ,
        },
        {
          path : '/allapps',
          loader :  () => fetch('/allAppsData.json'),
          Component : AllApps,
        },
        {
          path : '/appDetails/:id',
          loader :  () => fetch('/allAppsData.json'),
          Component : AppDetails ,
        },
        {
          path : '/installapps',
          Component : InstallApps,
        },
        {
          path : '*',
          Component : ErrorPage,
        }
    ]
  },
]);

import React from 'react';
import { createBrowserRouter} from "react-router";
import RootLayout from '../Root/RootLayout';
import Home from '../Pages/Home/Home';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import AllApps from '../Pages/AllApp/AllApps';
import InstallApps from '../Pages/InstallApps/InstallApps';
import Loading from '../Loading';
import AppDetails from '../Pages/AppDetails/AppDetails';
import AppNotFound from '../Pages/ErrorPage/AppNotFound';


export const router = createBrowserRouter([
  {
    path: "/",
    Component : RootLayout,
    hydrateFallbackElement : <Loading></Loading> ,
    children : [
        {
            index : true,
            path:'/',
            Component : Home ,
        },
        {
          path : '/allapps',
          Component : AllApps,
        },
        {
          path : '/appDetails/:id',
          Component : AppDetails ,
        },
        {
          path : '/installapps',
          loader :  () => fetch('/allAppsData.json'),
          Component : InstallApps,
        },
        {
          path : '*',
          Component : ErrorPage,
        }
    ]
  },
]);

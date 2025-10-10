import React from 'react';
import { useParams } from 'react-router';
import AppDetail from './AppDetail';
import useApps from '../../Hooks/useApps';
import Loading from '../../Loading';
import ErrorPage from '../ErrorPage/ErrorPage';
import AppNotFound from '../ErrorPage/AppNotFound';

const AppDetails = () => {
    const {id} = useParams();
    const appId = parseInt(id)

    const {allAppsData, loading, error} = useApps();
    if(loading){
        return <Loading></Loading>
    }
    if(error){
        return <ErrorPage></ErrorPage>
    }
    const singleApp = allAppsData.find(app => app.id === appId)

    if(!singleApp){
        return <AppNotFound></AppNotFound>
    }
    return (
        <div className=' bg-gray-50'>
            <div className='w-10/12 mx-auto'>
                <AppDetail singleApp={singleApp}></AppDetail>
            </div>
         </div>
    );
};

export default AppDetails;

import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import AppDetail from './AppDetail';

const AppDetails = () => {
    const {id} = useParams();
    const bookId = parseInt(id)

    const appData = useLoaderData()
    const singleApp = appData.find(app => app.id === bookId)
    // console.log(singleApp);
    return (
        <div className=' bg-gray-50'>
            <div className='w-10/12 mx-auto'>
                <AppDetail singleApp={singleApp}></AppDetail>
            </div>
         </div>
    );
};

export default AppDetails;

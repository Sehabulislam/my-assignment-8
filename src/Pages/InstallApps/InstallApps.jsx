import React, { useEffect, useState } from 'react';
import { BiSolidDownArrow } from 'react-icons/bi';
import { GrInstallOption } from 'react-icons/gr';
import InstallApp from './InstallApp';
import { useLoaderData } from 'react-router';
import { getInstallApps } from '../../Utility/addToLocal';

const InstallApps = () => {
    const [installApp, setInstallApp] = useState([]);
    const allAppsData = useLoaderData();
    useEffect(() => {
        const getInstallApp = getInstallApps();
        const installApp = allAppsData.filter(app => getInstallApp.includes(app.id));
        setInstallApp(installApp);

    },[])
    const [sortType, setSortType] = useState('');
    const handleSort = (type) => {
         setSortType(type);
         if(type === 'Low-High'){
            const sortedApps = [...installApp].sort((a, b) => parseFloat(a.downloads) - parseFloat(b.downloads));
            setInstallApp(sortedApps);
         }
         if(type === 'High-Low'){
            const sortedApps = [...installApp].sort((a, b) => parseFloat(b.downloads) - parseFloat(a.downloads));
            setInstallApp(sortedApps);
         }
    }

    return (
        <div className='p-4'>
            <div className='md:w-11/12 mx-auto'>
            <div className='flex flex-col justify-center items-center'>
                 <h2 className='text-4xl font-bold flex items-center gap-3 mt-5'>Your Installed Apps<GrInstallOption /></h2>
               <p className='text-gray-400 text-center'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className="flex justify-between items-center md:gap-210">
                <h2 className="text-xl font-bold">(<span>{installApp.length}</span>) Apps Found</h2>

                <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn m-1">Sort By : {sortType ? sortType : ""}<BiSolidDownArrow /></div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={() => handleSort('Low-High')}>Low-High</a></li>
                    <li><a onClick={() => handleSort('High-Low')}>High-Low</a></li>
                </ul>
                </div>
            </div>
            <div>
                {
                    installApp.map(app =><InstallApp key={app.id} installApp={installApp} setInstallApp={setInstallApp} app={app}></InstallApp> )
                }
                
            </div>
        </div>
        </div>
    );
};

export default InstallApps;
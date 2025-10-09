import React from 'react';
import { BiSolidDownArrow } from 'react-icons/bi';
import { GrInstallOption } from 'react-icons/gr';
import InstallApp from './InstallApp';

const InstallApps = () => {
    return (
        <div className='p-4'>
            <div className='md:w-11/12 mx-auto'>
            <div className='flex flex-col justify-center items-center'>
                 <h2 className='text-4xl font-bold flex items-center gap-3 mt-5'>Your Installed Apps<GrInstallOption /></h2>
               <p className='text-gray-400 text-center'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className="flex justify-between items-center md:gap-210">
                <h2 className="text-xl font-bold">(<span>1</span>) Apps Found</h2>

                <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn m-1">Sort By Size<BiSolidDownArrow /></div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
                </div>
            </div>
            <div>
                <InstallApp></InstallApp>
            </div>
        </div>
        </div>
    );
};

export default InstallApps;
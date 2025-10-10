import React from 'react';
import { IoIosStarHalf } from 'react-icons/io';
import { MdOutlineFileDownload } from 'react-icons/md';
import { removeFromLocal } from '../../Utility/addToLocal';

const InstallApp = ({app,installApp,setInstallApp}) => {
    const {image,title,downloads,ratingAvg,size,id} = app;

    const handleRemove = (id) => {
        removeFromLocal(id);
        const currentApp = installApp.filter(app => app.id !== id);
        setInstallApp(currentApp);
    }
    return (
            <div className='w-full h-30 bg-gray-100 flex justify-between items-center my-5 px-5 rounded-2xl'>
                <div className='flex items-center gap-4'>
                 <div className='bg-white rounded-xl p-2'>
                    <img src={image} alt="" className='w-20 rounded-xl'/>
                </div>
                <div>
                    <h1 className='text-lg md:text-xl font-bold'>{title}</h1>
                    <div className='flex md:gap-3'>
                        <p className='flex justify-center items-center gap-1 bg-green-50 p-1 text-green-500 rounded-full w-15'><MdOutlineFileDownload />{downloads}</p>
                        <p className='flex justify-center items-center gap-1 bg-orange-50 p-1 text-[#FF8811] rounded-full w-15'><IoIosStarHalf />{ratingAvg}</p>
                        <p className='p-1 text-gray-500 w-18'>{size}</p>
                    </div>
                </div>
             </div>
             <div>
                    <button onClick={() => handleRemove(id)} className='btn bg-green-500 text-white hover:shadow-2xl hover:scale-102'>Uninstall</button>
            </div>
            </div>
    );
};

export default InstallApp;
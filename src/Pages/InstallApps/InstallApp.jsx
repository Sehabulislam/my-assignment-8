import React from 'react';
import { IoIosStarHalf } from 'react-icons/io';
import { MdOutlineFileDownload } from 'react-icons/md';

const InstallApp = () => {
    return (
        <div>
            <div className='w-full h-30 bg-gray-100 flex justify-between items-center my-5 px-5 rounded-2xl'>
                <div className='flex items-center gap-4'>
                 <div className='bg-white rounded-xl p-2'>
                    <img src="https://pbs.twimg.com/profile_images/1921980469052375040/E9jrHsYu_400x400.png" alt="" className='w-20 rounded-xl'/>
                </div>
                <div>
                    <h1 className='text-lg md:text-xl font-bold'>Forest: Focus for Productivity</h1>
                    <div className='flex md:gap-3'>
                        <p className='flex justify-center items-center gap-1 bg-green-50 p-1 text-green-500 rounded-full w-15'><MdOutlineFileDownload />9M</p>
                        <p className='flex justify-center items-center gap-1 bg-orange-50 p-1 text-[#FF8811] rounded-full w-15'><IoIosStarHalf />5</p>
                        <p className='p-1 text-gray-500 w-18'>258 MB</p>
                    </div>
                </div>
             </div>
             <div>
                    <button className='btn bg-green-500 text-white hover:shadow-2xl hover:scale-102'>Uninstall</button>
            </div>
            </div>
        </div>
    );
};

export default InstallApp;
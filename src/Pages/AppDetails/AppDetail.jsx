import React, { useState } from 'react';
import AppRatings from './AppRatings';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import { addToLocal } from '../../Utility/addToLocal';

const AppDetail = ({singleApp}) => {
    const {image,title,companyName,downloads,ratingAvg,reviews,size,ratings,description,id
} = singleApp;
    // console.log(singleApp);

    const handleInstall = (id) => {
        addToLocal(id);
    }

    const navigate = useNavigate()
    const [isInstalled , setIsInstalled] = useState(false) ;
    return (
        <div className='p-2'>
            <div>
                <h2 onClick={() => navigate(-1)} className='btn border h-10 w-10 p-2 rounded-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'><FaArrowLeft className='text-xl'/></h2>
            </div>
            <div className='flex flex-col md:flex-row justify-center md:justify-start items-center gap-8 border-b-2 border-gray-300 py-5'>
                <div className='shadow-sm rounded-lg'>
                    <img src={image} alt="" className='w-40 md:w-60 rounded-2xl p-2'/>
                </div>
                 <div className='space-y-3'>
                        <div className='border-b-2 border-gray-300'>
                        <h2 className='text-2xl md:text-4xl font-bold'>{title}</h2>
                        <p className='mb-5 text-md'>Developed by <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold'>{companyName}</span></p>
                    </div>
                    <div className='flex flex-row items-center gap-10'>
                        <div className='space-y-1'>
                            <img src="/src/assets/icon-downloads.png" alt="" className='w-6'/>
                            <p className='text-sm'>Downloads</p>
                            <h1 className='text-4xl font-bold'>{downloads}</h1>
                        </div>
                        <div className='space-y-1'>
                            <img src="/src/assets/icon-ratings.png" alt="" className='w-6'/>
                            <p className='text-sm'>Average Ratings</p>
                            <h1 className='text-4xl font-bold'>{ratingAvg}</h1>
                        </div>
                        <div className='space-y-1'>
                            <img src="/src/assets/icon-review.png" alt="" className='w-6'/>
                            <p className='text-sm'>Total Reviews</p>
                            <h1 className='text-4xl font-bold'>{reviews}</h1>
                        </div>
                    </div>
                    <div>
                        <button onClick={()=> {handleInstall(id),setIsInstalled(true)}}  disabled={isInstalled ? true : false} className={` btn bg-[#00D390] text-white hover:shadow-2xl hover:scale-103 ${isInstalled ?  "bg-green-500 cursor-not-allowed" : ""} `}>{ isInstalled ? "Installed" : <div>Install Now <span>({size})</span></div> }</button>
                    </div>
                    </div>
                </div>
                <div className='flex justify-center items-center md:my-10 border-b-2 border-gray-300'>
                    <div className='md:mb-5'>
                        <AppRatings ratings={ratings}></AppRatings>
                    </div>
                    </div>
                <div>
                    <h2 className='text-2xl font-bold'>Description</h2>
                    <p className='text-gray-500 tracking-wide py-2 mb-5'>{description}</p>
                </div>
            </div>
    );
};

export default AppDetail;
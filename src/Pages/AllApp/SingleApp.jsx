import React from 'react';
import { FaDownload, FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const SingleApp = ({app}) => {
    const {image,title,ratingAvg,downloads} = app;
    // console.log(app);
    return (
        <Link to={`/appDetails/${app.id}`} className="card shadow-md w-full duration-1000 hover:scale-103 hover:shadow-xl cursor-pointer">
                        <figure className='p-2'>
                            <img
                            src={image}
                            alt="" className='w-20 md:w-50 md:p-3 rounded-2xl'/>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-[14px]">{title}</h2>
                            <div className='flex justify-between items-center'>
                                <h2 className='flex justify-center items-center gap-1 bg-green-50 p-1 text-green-500 rounded-full w-15'><FaDownload/>{downloads}</h2>
                                <h2 className='flex justify-center items-center gap-1 bg-orange-50 p-1 text-orange-500 rounded-full w-15'><FaStarHalfAlt />{ratingAvg}</h2>
                            </div>
                        </div>
                </Link>
    );
};

export default SingleApp;
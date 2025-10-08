import React from 'react';
import { FaArrowTrendUp } from 'react-icons/fa6';
import TrendingApp from './TrendingApp';

const TrendingApps = ({trendingApp}) => {
    // console.log(trendingApp);
    return (
        <div className='flex flex-col justify-center items-center mt-10'>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-4xl font-bold flex items-center gap-3 m-2'>Trending Apps<FaArrowTrendUp /></h2>
                <p className='text-gray-400 m-2'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 w-11/12 mx-auto gap-5'>
                {
                trendingApp.map(app =><TrendingApp key={app.id} app={app}></TrendingApp>)
                }
            </div>
        </div>
    );
};

export default TrendingApps;
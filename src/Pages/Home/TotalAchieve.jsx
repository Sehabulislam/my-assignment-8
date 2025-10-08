import React from 'react';

const TotalAchieve = () => {
    return (
        <div className='flex flex-col justify-center items-center py-10 bg-gradient-to-r from-violet-500 to-purple-500 text-white'>
            <h1 className='text-3xl text-center font-bold'>Trusted by Millions, Built for You</h1>
            <div className='flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 mt-4'>
                <div className='space-y-4 text-center text-sm'>
                    <p>Total Downloads</p>
                    <h1 className='text-5xl font-bold'>29.6M</h1>
                    <p>21% more than last month</p>
                </div>
                <div className='space-y-4 text-center text-sm'>
                    <p>Total Downloads</p>
                    <h1 className='text-5xl font-bold'>29.6M</h1>
                    <p>21% more than last month</p>
                </div>
                <div className='space-y-4 text-center text-sm'>
                    <p>Total Downloads</p>
                    <h1 className='text-5xl font-bold'>29.6M</h1>
                    <p>21% more than last month</p>
                </div>
            </div>
        </div>
    );
};

export default TotalAchieve;
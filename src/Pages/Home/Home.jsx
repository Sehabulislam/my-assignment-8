import React from 'react';
import TotalAchieve from './TotalAchieve';

const Home = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center bg-gray-50 space-y-5'>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-5xl md:text-6xl font-bold text-center md:max-w-130 m-3'>We Build <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h2>
                <p className='max-w-210 text-center text-gray-400'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>
            <div className='flex items-center gap-2 '>
                <button className='btn flex'><img src="/src/assets/appstore (2).png" className='w-5' />Google Play</button>
                <button className='btn flex'><img src="/src/assets/appstore (1).png" className='w-5' />App Store</button>
            </div>
            <div className=' md:w-230'>
                <img src="/src/assets/hero.png" alt="" />
            </div>
        </div>
        <TotalAchieve></TotalAchieve>
        </div>
    );
};

export default Home;
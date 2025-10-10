import React from 'react';
import TotalAchieve from './TotalAchieve';
import TrendingApps from './TrendingApps';
import { Link} from 'react-router';
import Loading from '../../Loading';
import ErrorPage from '../ErrorPage/ErrorPage';
import useApps from '../../Hooks/useApps';

const Home = () => {
    const {allAppsData, loading, error} = useApps();
    if(loading){
        return <Loading></Loading>
    }
    if(error){
        return <ErrorPage></ErrorPage>
    }

    const topSixApps = allAppsData.slice(17,25);
    return (
        <div>
            <div className='flex flex-col justify-center items-center bg-gray-50 space-y-5'>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-5xl md:text-6xl font-bold text-center md:max-w-130 m-3'>We Build <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h2>
                <p className='max-w-210 text-center text-gray-400'>At <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold'>HERO.IO</span> , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>
            <div className='flex items-center gap-2 '>
                <Link to='https://play.google.com/store/apps' className='btn flex'><img src="/src/assets/appstore (2).png" className='w-5' />Google Play</Link>
                <Link to='https://www.apple.com/app-store/' className='btn flex'><img src="/src/assets/appstore (1).png" className='w-5' />App Store</Link>
            </div>
            <div className=' md:w-230'>
                <img src="/src/assets/hero.png" alt="" />
            </div>
        </div>
        <TotalAchieve></TotalAchieve>
        <TrendingApps topSixApps={topSixApps}></TrendingApps>
        <div className='text-center py-10 md:py-20'>
            <Link to='/allapps' className='btn md:px-15 md:py-7 text-lg bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white transition duration-300 ease-in-out hover:scale-110'>Show All</Link>
        </div>
        </div>
    );
};

export default Home;
import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='min-h-[calc(100vh-300px)] flex flex-col justify-center items-center space-y-6 py-5'>
            <img src="/src/assets/error-404.png" alt="" className='w-100'/>
            <h2 className='text-4xl md:text-5xl font-bold text-center'>Oops, page not found!</h2>
            <p className='text-gray-500'>The page you are looking for is not available.</p>
            <Link to='/' className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white hover:shadow-2xl hover:scale-102'>Go Back!</Link>
        </div>
    );
};

export default ErrorPage;  
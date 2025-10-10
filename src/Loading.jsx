import React from 'react';
import Logo from './assets/logo.png'
import { GridLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='flex justify-center items-center my-50'>
            <GridLoader/>
        </div>
    );
};

export default Loading;
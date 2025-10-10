import React from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const AppRatings = ({ratings}) => {
  return (
   <div className='w-100 md:w-full mx-auto flex justify-start'>
        <BarChart width={1300} height={300} data={ratings} layout="vertical" lay>
            <XAxis type='number'></XAxis>
            <YAxis type='category' dataKey="name"></YAxis>
            <Bar dataKey="count" fill="#FF8811"/>
            <Tooltip/>
        </BarChart>
   </div>
  );
};

export default AppRatings;
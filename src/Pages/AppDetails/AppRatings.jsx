import React from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const AppRatings = ({ratings}) => {
  return (
   <div>
        <BarChart width={1300} height={300} data={ratings} layout="vertical">
            <XAxis type='number'></XAxis>
            <YAxis type='category' dataKey="name"></YAxis>
            <Bar dataKey="count" fill="#FF8811"/>
            <Tooltip/>
        </BarChart>
   </div>
  );
};

export default AppRatings;
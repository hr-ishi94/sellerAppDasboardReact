import React from 'react';
import {
  Radar, RadarChart, PolarGrid, Legend,
  PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';


const SalesByRegionChart = ({region}) => {
  
  
  

  return (
  <div >
    <h2 className="text-md text-black font-bold mb-3 ml-2 dark:text-white">Sales by Region</h2>
    <RadarChart
        outerRadius="70%"
        width={380} // Adjust the width
        height={250} // Adjust the height
        data={region}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="region"   style={{ fontSize: '11px' }} />
        <PolarRadiusAxis angle={30} domain={[0, 3000]} tickCount={3}  fill=''/>
        <Radar
          name="Sales"
          dataKey="sales"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
  </div>
  ); 
};

export default SalesByRegionChart;

import React from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer
} from 'recharts';

const SalesByRegionChart = ({ region }) => {

  return (
    <div className="w-full">
      <h2 className="text-md text-black font-bold  ml-2 dark:text-white">
        Sales by Region
      </h2>
      <div className="sm:mx-3 w-full">

        {/* Responsive Container wrapping the RadarChart */}
        <ResponsiveContainer width="100%" height={230}>  {/* Dynamic width and height */}
          <RadarChart data={region} outerRadius="90%" >
            <PolarGrid />
            <PolarAngleAxis dataKey="region" style={{ fontSize: '11px' }} />
            <PolarRadiusAxis angle={30} domain={[0, 3000]} tickCount={3} />
            <Radar
              name="Sales"
              dataKey="sales"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>

      </div>
    </div>
  );
};

export default SalesByRegionChart;

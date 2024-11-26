import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import { Line,XAxis,YAxis,Tooltip ,LineChart, CartesianGrid, Legend, ResponsiveContainer} from 'recharts';



const SalesOverviewChart = ({overview}) => {
  

  const data = (overview && overview.trends) || [];

  return( 
  <div >
    <div className='flex justify-between mx-2 overflow-auto'>

    <h2 className="text-md font-bold  text-black dark:text-white ">Sales Overview</h2>
      <div className='flex mt-2'>
        <div className='flex flex-col items-center mx-3 dark:text-white'>
          <p className='flex text-sm text-ind dark:text-gray-600 font-semibold'><div className='bg-blue-500 w-2 h-2 rounded-full m-2'></div> Total  Revenue
          </p> 
          <h6>
          $ {overview && overview.totalRevenue}
          </h6>
        </div>
      <div className='flex flex-col items-center mx-3 dark:text-white'>

        <p className='flex text-sm dark:text-gray-600 font-semibold'><div className='bg-orange-500 w-2 h-2 rounded-full m-2'></div>Total Target</p>
        <h6>

        $ {overview && overview.totalTarget}
        </h6>

        </div>
      </div>
    </div>
    <ResponsiveContainer  width="100%" height={230}>
    <LineChart data={data} className="mt-2">
  {/* Use rectangles for alternating vertical background colors */}
  {data.map((_, index) => (
    <rect
      key={index -1}
      x={index * (915 / data.length) + 6}  // Dynamically calculate width based on the number of data points
      y="4"
      width={(910/ data.length)} // Each section takes an equal part of the chart's width
      height="190" // Full height of the chart
      fill={index % 2 === 0 ? "#696FFB" : "#ffffff"} // Alternate between two colors
      fillOpacity={0.12} // Match opacity for subtle shading
    />
  ))}

  {/* Add gridlines */}
  <CartesianGrid strokeDasharray="3 3" />

  {/* Add axes */}
  <XAxis dataKey="month" />
  <YAxis
    orientation="right"
    type="number"
    domain={[0, 'dataMax + 500']} // Domain starts at 0 and extends slightly beyond the maximum data value
    allowDataOverflow={true} // Allows rendering beyond the domain range
    ticks={[10000, 20000]} // Only two ticks on the axis
  />

  {/* Add tooltip */}
  <Tooltip />

  {/* Add line series */}
  <Line type="monotone" dataKey="revenue" stroke="blue" />
  <Line type="monotone" dataKey="target" stroke="orange" />
</LineChart>
</ResponsiveContainer>
  </div>
  ); // Placeholder for chart
};

export default SalesOverviewChart;

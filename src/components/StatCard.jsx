import React from 'react';

const StatCard = ({ title, isPositive ,items, dollar, perc}) => {
  
  return (
    <div className="bg-white dark:bg-indigo-950 p-4 mx-1 mt-3 rounded-lg shadow">
      <h3 className="text-md text-black dark:text-white font-bold ">{title}</h3>
      <p className="text-4xl text-black dark:text-white font-bold ">{dollar && '$' } {items && items.value} {perc && "%"}</p>
      <p className='m-2 text-base text-gray-600 mt-4 dark:text-gray-300'>
      {isPositive ?
          
          <span class="bg-green-200 text-green-950 dark:text-green-50 dark:bg-green-400 text-sm font-medium me-2 px-2.5 py-0.5 rounded "> ↑ {items && items.percentageChange}%</span>
          :
          <span class="bg-red-200 text-red-950 dark:text-red-50 dark:bg-red-400 text-sm font-medium me-2 px-2.5 py-0.5 rounded "> ↓ {items && items.percentageChange}%</span>
          
          }
      Compared to last month
      </p>
    </div>
  );
};

export default StatCard;

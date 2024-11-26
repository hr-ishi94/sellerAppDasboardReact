import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';

const RegisteredUsers = ({registeredUsers}) => {
  // Data for users
  

  // Data for the Pie chart, including both Premium and Basic users
  const data = [
    { name: 'Premium Users', value: registeredUsers && registeredUsers.premium },
    { name: 'Basic Users', value: registeredUsers && registeredUsers.basic },
  ];

  // Define the colors for each section of the pie chart
  const COLORS = ['#696FFB', '#999df7'];

  return (
    <div>
      <h3 className="text-md font-semibold text-black mt-4 ml-6 dark:text-white ">
        Registered Users
      </h3>


    <div className="flex flex-col items-center rounded-lg">
      {/* Title */}

      {/* PieChart */}
      <div className="relative w-full flex justify-center">
        <PieChart width={300} height={220} >
          {/* First Pie for Premium Users */}
          <Pie 
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={105}
            fill="#8884d8"
            paddingAngle={5}
            startAngle={200}
            endAngle={-20}
            label
            >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>

        {/* Central Total Users Display */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <Icon icon="octicon:people-24"  className='w-9 h-9 ml-5 bg-indigo-200 text-indigo-500 p-1.5 rounded-full' />
          <div className="text-3xl font-bold text-gray-800 dark:text-white">
            {registeredUsers && registeredUsers.total.toLocaleString()}
          </div>
          <div className="text-sm text-gray-500">Total users</div>
        </div>
      </div>

      {/* Breakdown Legend */}
      <div className="flex justify-between items-center w-full px-4 pb-2">
        <div className="text-center flex">
          <div className="text-xl font-semibold text-indigo-500 flex">
          <Icon icon="tabler:minus-vertical" width="3rem" height="3 rem" />
          </div>
          <div>
            <h2 className='text-black text-sm mr-16 dark:text-white'>

            {registeredUsers && registeredUsers.premium.toLocaleString()}
            </h2>
          <div className="text-base text-gray-500  font-medium">Premium Users</div>
          </div>
        </div>
        <div className="text-center flex">
          <div>
          <h2 className='text-black text-sm ml-16 dark:text-white'>

            {registeredUsers && registeredUsers.basic.toLocaleString()}
          </h2>
          <div className="text-base text-gray-500 font-medium">Basic Users</div>

          </div>
          <div className="text-xl font-semibold text-indigo-500 opacity-70 ">
          <Icon icon="tabler:minus-vertical" width="3rem" height="3 rem" />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default RegisteredUsers;

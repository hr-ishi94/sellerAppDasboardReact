import React, { useState } from 'react';
import stripe from '../assets/icons/stripe.png'
import zapier from '../assets/icons/zapier.png'
import shopify from '../assets/icons/shopify.png'

const IntegrationTable = ({integrations}) => {
  
  // State for selected rows
  const [selectedRows, setSelectedRows] = useState([]);

  // Handle individual row selection
  const handleRowSelect = (index) => {
    setSelectedRows((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index) // Deselect if already selected
        : [...prev, index] // Add to selection
    );
  };

  // Handle select/deselect all rows
  const handleSelectAll = (isChecked) => {
    if (isChecked) {
      setSelectedRows(integrations && integrations.map((_, index) => index)); // Select all rows
    } else {
      setSelectedRows([]); // Deselect all
    }
  };

  const isAllSelected = integrations && (selectedRows.length === integrations.length);

  return (
    <div className='px-2'>
      <h2 className="text-md text-black font-bold dark:text-white">List of Integrations</h2>
    
      <table className="w-full ">
        <thead className="bg-indigo-50 text-left  dark:bg-gray-400/20 dark:text-gray-200">
          <tr>
            <th 
              className='p-2'>
              <input
                type="checkbox"
                checked={isAllSelected}
                onChange={(e) => handleSelectAll(e.target.checked)}
              />
            </th>
            <th className="p-2">Application</th>
            <th className="p-2">Type</th>
            <th className="p-2 px-4">Rate</th>
            <th className="p-2">Profit</th>
          </tr>
        </thead>
        <tbody className='text-gray-700 dark:text-gray-200'>
          {integrations && integrations.map((item, index) => (
            <tr key={index} className="text-left border-b">
              <td className="p-2">
                <input
                  type="checkbox"
                  checked={selectedRows.includes(index)}
                  onChange={() => handleRowSelect(index)}
                />
              </td>
              <td className="p-2 flex items-center gap-2">
                <div className="w-8 h-8 p-0.5 border">

                <img src={item.logo} alt={item.app}  />
                </div>
                {item.application}</td>
              <td className="p-2 ">{item.type}</td>
              <td className="p-2 px-4 flex justify-between">
                <div className="relative w-full h-2  bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-indigo-500 rounded-full"
                    style={{ width: `${item.rate}%` }}
                  ></div>
                </div>
                <span className="ml-4 ">{item.rate}%</span>
              </td>

              <td className="p-2">$ {item.profit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IntegrationTable;

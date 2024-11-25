import React, { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';

const Topbar = () => {
  const [selected,setSelected] = useState("")
  return (
    

    <div className="flex items-center justify-between bg-white shadow ">
      <h1 className="text-lg font-bold text-black ml-6">Dashboard</h1>
      <div className="flex items-center ">
        {/* Country Selector */}
        <select className="border m-2 p-2 mr-5 w-36 rounded-full bg-gray-200">
          <option value="USA" ><h1>USA</h1></option>
          <option value="Canada">Canada</option>
          <option value="Germany">Germany</option>
          <option value="India">India</option>
        </select>
        {/* Profile Icon */}
        <div className="w-24 h-20 shadow-lg border-2 px-8 py-3 "><i className="fa-solid fa-face-smile text-orange-400 text-3xl"></i>
        </div>
      </div>
    </div>
    
  );
};

export default Topbar;

import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";

const Dropdown = ({ countries, selectedCountry, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (country) => {
    onChange(country);
    setIsOpen(false);
  };

  return (
    <div className="relative w-48 mx-3">
      {/* Selected Country */}
      <button
        className="w-full flex items-center justify-between px-2 py-1  bg-gray-200 dark:bg-gray-900 dark:text-gray-300 rounded-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          {selectedCountry && (
            <>
              <img
                src={selectedCountry.flagUrl}
                alt={selectedCountry.country}
                className="w-6 h-6 mr-2 rounded-full"
              />
              <span>{selectedCountry.country}</span>
            </>
          )}
        </div>
        <span>{isOpen ? <Icon icon="ri:arrow-drop-up-line" width="2rem" height="2rem" />: <Icon icon="ri:arrow-drop-down-line" width="2rem" height="2rem" />}</span>
      </button>

      {/* Dropdown Options */}
      {isOpen && (
        <ul className="absolute z-10 w-full bg-gray-200 dark:bg-gray-900 rounded shadow-lg max-h-60 overflow-y-auto mt-1">
          {countries.map((country) => (
            <li
              key={country.country}
              className="flex items-center p-2 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700"
              onClick={() => handleSelect(country)}
            >
              <img
                src={country.flagUrl}
                alt={country.country}
                className="w-6 h-6 mr-2 rounded-full"
              />
              <span>{country.country}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

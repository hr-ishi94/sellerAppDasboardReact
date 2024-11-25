import React, { useEffect } from 'react'
import Dashboard from './pages/Dashboard'
import Sidebar from './components/Sidebar'
import { useDispatch, useSelector } from 'react-redux';
import { initializeDashboardData } from './data/countries';
import { setSelectedCountry } from './redux/countrySlice';


const App = () => {
  const dispatch = useDispatch();
  const { countries, selectedCountry, loading, error } = useSelector(
    (state) => state.Country
  );

  // Initialize dashboard data
  useEffect(() => {
    dispatch(initializeDashboardData());
  }, [dispatch]);

  // Set selected country from localStorage if not already set
  useEffect(() => {
    if (!selectedCountry) {
      const savedCountry = localStorage.getItem("country");
      if (savedCountry) {
        dispatch(setSelectedCountry(savedCountry));
      } else {
        // Default to USA if no country is selected or stored
        dispatch(setSelectedCountry("USA"));
      }
    }
  }, [dispatch, selectedCountry]);

  // Handle country change
  const handleCountryChange = (event) => {
    const selected = event.target.value;
    localStorage.setItem("country", selected); // Save to localStorage
    dispatch(setSelectedCountry(selected)); // Update Redux store
  };

  // Find the full country details based on the selectedCountry value
  const chosen_country = countries && countries.find(
    (country) => country.country === selectedCountry
  );

  console.log(selectedCountry, "Selected Country");
  console.log(chosen_country && chosen_country.country, "Chosen Country");

  return (
    <div className="flex h-auto font-roboto">
  {/* Sidebar */}
  <Sidebar className="w-64 m-0 p-0" />

  {/* Main Content */}
  <div className="flex-1 flex flex-col bg-gray-100 dark:bg-indigo-950/80 p-0 m-0">
    {/* Topbar */}
    <div className="flex items-center justify-between bg-white shadow-lg overflow-hidden dark:bg-indigo-950">
      <h1 className="text-lg font-bold text-black ml-9 dark:text-white ">Dashboard</h1>
      <div className="flex items-center">
        {/* Country Selector */}
        <select
          className=" m-1 p-2 px-3 mr-5 w-48 rounded-full bg-gray-200 dark:bg-gray-900 dark:text-gray-300"
          value={selectedCountry || ""}
          onChange={handleCountryChange}
        >
          {countries.map((country) => (
            <option value={country.country} key={country.country}>
              {country.country}
            </option>
          ))}
        </select>
        {/* Profile Icon */}
        <div className="w-28 h-18 border-l-2 dark:border-indigo-200 px-8 py-3 m-0">

          <i className="fa-solid fa-face-smile text-orange-400 text-3xl"></i>
        </div>
      </div>
    </div>

    <br />
    <br />
    <Dashboard chosen_country={chosen_country} />
  </div>
</div>

  )
}

export default App
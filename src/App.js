import React, { useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { initializeDashboardData } from "./data/countries";
import { setLoading, setSelectedCountry } from "./redux/countrySlice";
import Dropdown from "./components/Dropdown";
import './App.css'

const App = () => {
  const dispatch = useDispatch();
  const { countries, selectedCountry,loading } = useSelector((state) => state.Country);
  

  useEffect(() => {
    dispatch(initializeDashboardData());
  }, [dispatch]);

  
  useEffect(() => {
    if (!selectedCountry) {
      const savedCountry = localStorage.getItem("country");
      if (savedCountry) {

        dispatch(setSelectedCountry(savedCountry));
      } else {
        dispatch(setSelectedCountry("USA"));
      }
    }
  }, [dispatch, selectedCountry]);

  const chosen_country =
    countries && countries.find((country) => country.country === selectedCountry);

  return (
    <div className="flex h-auto font-roboto">
      <Sidebar className="w-64 m-0 p-0 overflow-x-hidden bg-white dark:bg-indigo-950" />
      <div className="flex-1 flex flex-col bg-gray-100 dark:bg-indigo-950/80 p-0 m-0">
        <div className="flex items-center justify-between bg-white shadow-lg dark:bg-indigo-950">
          <h1 className="text-lg font-bold text-black ml-9 dark:text-white">
            Dashboard
          </h1>
          <div className="flex items-center">
            <Dropdown
              countries={countries}
              selectedCountry={countries.find(
                (c) => c.country === selectedCountry
              )}
              onChange={(country) => {
                localStorage.setItem("country", country.country);
                dispatch(setSelectedCountry(country.country));
                dispatch(setLoading(true))
              }}
            />
            <hr />
            <div className="w-28 h-18 border-l-2  dark:border-indigo-800/60 px-8 py-3 m-0">
              <i className="fa-solid fa-face-smile text-orange-400 text-3xl"></i>
            </div>
          </div>
        </div>
        <br />
        <Dashboard chosen_country={chosen_country} loading={loading} />
      </div>
    </div>
  );
};

export default App;

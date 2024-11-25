import { useContext, createContext, useState } from "react";
import sellerApp from "../assets/icons/sellerApp.png";
import sellerAppText from "../assets/icons/sellerAppText.svg";
import SellerAppLightLogo from '../assets/icons/SellerAppLightLogo.svg'
import SellerAppLightText from '../assets/icons/SellerAppLightText.svg'
import nightMode from "../assets/icons/nightMode.png";
import dayMode from "../assets/icons/dayMode.png";
import { Icon } from "@iconify/react/dist/iconify.js";

const SidebarContext = createContext();

export default function Slidebar({ children }) {
  const [dark, setDark] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const darkModeHandler = () => {
    const newDarkState = !dark;
    setDark(newDarkState);
    document.body.classList.toggle("dark", newDarkState);
  };

  return (
    <aside className={`transition-all ${expanded ? "w-64" : "w-16"} bg-white border-none dark:bg-indigo-950`}>
      <nav className="h-full flex flex-col border-r shadow-sm">
        <div className="mt-4 ml- flex justify-between items-center">
          {expanded ? (
            <img src={dark?SellerAppLightText:sellerAppText} className="transition-all ml-6 mr-1" alt="Seller App Text Logo" />
          ) : (
            <img src={dark?SellerAppLightLogo:sellerApp} className="transition-all" alt="Seller App Logo" />
          )}
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-0.5 mr-3 rounded-md bg-gray-50 border-gray-600 hover:bg-gray-100 border-2 dark:bg-indigo-950 text-indigo-200"
            aria-label="Toggle Sidebar"
          >
            {expanded ? (
              <Icon icon="cuida:arrow-left-outline" className="w-3 h-3 text-black dark:text-indigo-200" />
            ) : (
              <Icon icon="cuida:arrow-right-outline" className="w-3 h-3 text-black dark:text-indigo-200" />
            )}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1">{children}</ul>
        </SidebarContext.Provider>

        <div className="flex flex-col items-center mb-2">
          <div className="flex items-center ">
            {expanded && <p className="mr-3 font-bold text-gray-700 dark:text-indigo-200">Dark</p>}
            <button
              onClick={darkModeHandler}
              className="transition cursor-pointer rounded-full hover:bg-gray-500"
              aria-label="Toggle Dark Mode"
            >
              <img
                src={dark ? nightMode : dayMode}
                alt={dark ? "Night Mode Icon" : "Day Mode Icon"}
                className="w-11 h-6"
              />
            </button>
            {expanded && <p className="ml-3 font-bold text-gray-700 dark:text-indigo-200">Light</p>}
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SlidebarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      className={`relative flex items-center my-2 mx-4 p-1
        font-medium rounded-md cursor-pointer transition-colors group
        ${
          active
            ? "bg-indigo-200/60 text-indigo-500 dark:bg-indigo-900 dark:text-indigo-400"
            : "hover:bg-indigo-50/50 text-gray-600 dark:hover:bg-gray-600 dark:text-indigo-100"
        }`}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-full ml-3 font-bold" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`}
        />
      )}
      {!expanded && (
        <div
          className="absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible group-hover:visible"
        >
          {text}
        </div>
      )}
    </li>
  );
}

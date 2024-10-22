import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { loggedOut } from '../utils/auth/getUserInfo';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const themeChanger = () => {
    console.log("Theme toggled");
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  const handleLogout = () => {
    loggedOut();
    navigate("/login");
  };

  // Effect to handle clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-between items-center mb-8 bg-white p-4 shadow-md bg-lightNavbar dark:bg-darkNavbar text-lightNavbarText dark:text-darkNavbarText">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Real Estate Properties</h1>
      <div className="relative" ref={dropdownRef}>
        <FaUserCircle
          size={36}
          className="text-gray-700 hover:text-gray-900 cursor-pointer"
          onClick={handleDropdownToggle}
        />
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
            <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Profile</Link>
            <p onClick={handleLogout} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Logout</p>
            <p onClick={themeChanger} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Toggle Theme</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

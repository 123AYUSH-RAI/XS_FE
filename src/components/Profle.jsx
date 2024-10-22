import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
const Profile = () => {
  const user = JSON.parse(localStorage.getItem("profile"))
  console.log(user)
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-sm w-full bg-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-center">
        <FaUserCircle 
          size={36} 
          className="text-gray-700 hover:text-gray-900 cursor-pointer" 
        />
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">{user["email"]}</h1>
          <p className="text-gray-600 mb-2">{user.city}</p>
          <p className="text-gray-600 mb-2">{user.email}</p>
          <p className="text-gray-600">{user.contact}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;

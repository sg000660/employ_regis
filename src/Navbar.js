import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img
          href="Images/Ascentech.png" // Replace this with your company logo
          alt="Company Logo"
          className="w-10 h-10 mr-3"
        />
        <h1 className="text-white text-xl font-semibold items-center">ASCENTech Company</h1>
      </div>
    </nav>
  );
};

export default NavBar;

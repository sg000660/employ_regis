import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-white-600 p-4 flex justify-between items-center">
      <div className="flex items-center">
        {/* Make sure the path to the logo image is correct */}
        <img
          src="https://ascentechindia.com/wp-content/uploads/2017/09/ascentech_logo_high_quality1-2.png" // Assuming the image is in the 'public/Images' folder
          alt="Company Logo"
          className="w-10 h-10 mr-3"
        />
        <h1 className="text-blue-800 text-xl font-semibold">ASCENTech Company</h1>
      </div>
    </nav>
  );
};

export default NavBar;

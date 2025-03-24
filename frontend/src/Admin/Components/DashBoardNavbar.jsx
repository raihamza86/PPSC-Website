import React from "react";

const DashboardNavbar = () => {
  const userAvatar =
    "https://omah.dexignzone.com/php/demo/assets/images/profile/17.jpg";

  return (
    <nav className="bg-green-700 shadow-md px-6 py-4 flex justify-between items-center">
      
      <div className="flex items-center space-x-3">
        <h1 className="text-2xl font-bold ml-30">
          LOGO.<span className="text-yellow-400"></span>
        </h1>
      </div>

    
      <div className="flex items-center space-x-3">
        <div className="text-right">
          <div className="text-sm font-medium">Henry Jr.</div>
          <small className="text-black-500 text-xs">Admin</small>
        </div>
        <img
          src={userAvatar}
          alt="Admin Avatar"
          className="w-12 h-12 object-cover rounded-md"
        />
      </div>
    </nav>
  );
};

export default DashboardNavbar;

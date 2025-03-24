import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Home, 
  BookOpen, 
  BarChart3, 
  Users, 
  LayoutDashboard, 
  Menu 
} from "lucide-react";

const Sidebar = () => {
  const [active, setActive] = useState("Admin Dashboard");
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Past papers", icon: <Home size={24} className="text-green-500" />, link: "/admin/pastpapers" },
    { name: "Upload Paper", icon: <BookOpen size={24} className="text-green-500" />, link: "/admin/uploadpaper" },
    { name: "Upload Mcq", icon: <BookOpen size={24} className="text-green-500" />, link: "/admin/mcqform" },
    { name: "Paperslist", icon: <BarChart3 size={24} className="text-green-500" />, link: "/admin/paperlist" },
    { name: "StudentData", icon: <Users size={24} className="text-green-500" />, link: "/admin/studentdata" },
    { name: "Admin Dashboard", icon: <LayoutDashboard size={24} className="text-green-500" />, link: "/admin/admindashboard" },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        className="md:hidden fixed top-4 left-4 text-white p-2 rounded-md z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={28} className="text-green-500" />
      </button>

      {/* Fixed Sidebar with Margin from Top */}
      <div
        className={`fixed top-[90px] left-0 h-[calc(100vh-90px)] w-64 bg-white shadow-lg p-4 z-40 transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        
        <button 
          className="md:hidden absolute top-4 right-4 text-gray-600"
          onClick={() => setIsOpen(false)}
        >
          ✖
        </button>

        <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">Admin Panel</h2>

        <ul className="space-y-3">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.link}
                className={`flex items-center space-x-4 p-3 rounded-md text-gray-700 text-lg hover:bg-gray-100 transition ${
                  active === item.name ? "bg-gray-200 font-semibold" : ""
                }`}
                onClick={() => setActive(item.name)}
              >
                {item.icon}
                <span className="text-base">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;

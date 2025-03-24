import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUserShield, FaChevronRight, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const closeDropdown = (event) => {
      if (!event.target.closest(".dropdown")) {
        setDropdownOpen(null);
      }
    };
    document.addEventListener("click", closeDropdown);
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const dropdowns = [
    {
      title: "Study Resources",
      links: [
        { name: "PDF Notes", path: "/get-notes" },
        { name: "Ppsc Past Papers", path: "/past-paper-access" },
        { name: "Fpsc Past Papers", path: "/categorized-past-papers" },
      ],
    },
    {
      title: "Test & Preparation",
      links: [
        { name: "Start GK", path: "/start-gk" },
        { name: "Current Affairs Prep", path: "/current-affair-preps" },
        { name: "English", path: "/english-potential" },
        { name: "Math", path: "/math-potential" },
        { name: "Geography", path: "/geography" },
        { name: "Computer Study", path: "/computer-study" },
        { name: "Islamic Study", path: "/islamic-study" },
      ],
    },
    {
      title: "Other Features",
      links: [
        { name: "SetTest", path: "/set-test" },
        { name: "SubmitMCQs", path: "/submit-mcq" },
        { name: "ComingSoon", path: "/coming-soon" },
        { name: "Page Not Found", path: "/page-not-found" },
      ],
    },
  ];

  return (
    <nav className="bg-green-700 text-white w-full px-6 py-3">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold ml-6 font-merriweather cursor-pointer">
          LOGO
        </div>
        <button
          className="block lg:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <div className="hidden lg:flex items-center space-x-6 text-[16px] font-opensans">
          {["Home", "About Us", "Contact Us"].map((name, index) => {
            const path = name.toLowerCase().replace(" ", "-");
            return (
              <Link
                key={index}
                to={`/${path === "home" ? "" : path}`}
                className={`hover:text-yellow-300 ${
                  location.pathname === `/${path === "home" ? "" : path}`
                    ? "text-yellow-300"
                    : "text-white"
                }`}
              >
                {name}
              </Link>
            );
          })}
          {dropdowns.map((dropdown, index) => {
            const isActive = dropdown.links.some((link) => location.pathname === link.path);

            return (
              <div key={index} className="relative dropdown">
                <button
                  className={`flex items-center ${
                    isActive || dropdownOpen === index ? "text-yellow-300" : "hover:text-yellow-300"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown(index);
                  }}
                >
                  {dropdown.title}
                  <span className="ml-1 transition-transform">
                    {dropdownOpen === index ? <FaChevronDown /> : <FaChevronRight />}
                  </span>
                </button>
                {dropdownOpen === index && (
                  <div className="absolute bg-white text-black mt-2 py-2 w-48 shadow-lg z-50">
                    {dropdown.links.map((link, i) => (
                      <Link
                        key={i}
                        to={link.path}
                        className={`block px-4 py-2 hover:bg-gray-200 text-sm ${
                          location.pathname === link.path ? "text-yellow-500 font-bold" : ""
                        }`}
                        onClick={() => setDropdownOpen(null)}
                      >
                        {link.name}
                      </Link>
                      
                    ))}
                  </div>
                  
                )}
              </div>
              
            );
          })}
<button>
<Link to="/admin" className="text-2xl text-white" aria-label="Admin Dashboard">
  <FaUserShield />
</Link>

</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

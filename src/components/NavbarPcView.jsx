import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const NavbarPcView = ({ navigate }) => {
  const [dropdowns, setDropdowns] = useState({
    countries: false,
    courses: false,
  });

  const toggleDropdown = (menu) => {
    setDropdowns((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Our Services", path: "/services" },
    { label: "Scholarship", path: "/scholarship" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact Us", path: "/contact-us" },
  ];

  const dropdownItems = {
    countries: [
      { label: "China", path: "/countries/china" },
      { label: "Canada", path: "/countries/canada" },
      { label: "UK", path: "/countries/uk" },
    ],
    courses: [
      { label: "Engineering", path: "/courses/engineering" },
      { label: "Medicine", path: "/courses/medicine" },
      { label: "Business", path: "/courses/business" },
    ],
  };

  return (
    <div className="hidden lg:flex space-x-8 text-white font-medium items-center">
      {menuItems.map((item) => (
        <div
          key={item.path}
          className="hover:text-gray-300 cursor-pointer"
          onClick={() => navigate(item.path)}
        >
          {item.label}
        </div>
      ))}

      {Object.keys(dropdownItems).map((menu) => (
        <div key={menu} className="relative">
          <div
            className="hover:text-gray-300 cursor-pointer flex items-center"
            onClick={() => toggleDropdown(menu)}
          >
            {menu.charAt(0).toUpperCase() + menu.slice(1)}{" "}
            <FaChevronDown className="ml-1" />
          </div>
          {dropdowns[menu] && (
            <div className="absolute left-0 bg-white text-black shadow-md mt-2 py-2 w-48">
              {dropdownItems[menu].map((subItem) => (
                <div
                  key={subItem.path}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => navigate(subItem.path)}
                >
                  {subItem.label}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default NavbarPcView;

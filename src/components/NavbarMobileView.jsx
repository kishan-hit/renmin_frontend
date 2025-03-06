import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const NavbarMobileView = ({ navigate, setMobileMenuOpen }) => {
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
      { label: "USA", path: "/countries/usa" },
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
    <div className="lg:hidden bg-[#bf1d1d] text-white flex flex-col items-start py-6 px-6 space-y-4">
      {menuItems.map((item) => (
        <div
          key={item.path}
          className="cursor-pointer"
          onClick={() => {
            navigate(item.path);
            setMobileMenuOpen(false);
          }}
        >
          {item.label}
        </div>
      ))}

      {Object.keys(dropdownItems).map((menu) => (
        <div
          key={menu}
          className="cursor-pointer"
          onClick={() => toggleDropdown(menu)}
        >
          {menu.charAt(0).toUpperCase() + menu.slice(1)}{" "}
          <FaChevronDown className="ml-1" />
          {dropdowns[menu] && (
            <div className="pl-4">
              {dropdownItems[menu].map((subItem) => (
                <div
                  key={subItem.path}
                  className="cursor-pointer"
                  onClick={() => {
                    navigate(subItem.path);
                    setMobileMenuOpen(false);
                  }}
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

export default NavbarMobileView;

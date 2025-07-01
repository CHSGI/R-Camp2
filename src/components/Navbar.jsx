import React from 'react'
import logo from '../../public/logo.svg'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";


const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false);

 const toggleSidebar = () => {
   setIsOpen(!isOpen);
 };

  return (
    <div className="flex justify-between xs:px-[16px] lg:px-[100px] items-center xs:py-[24px] lg:py-[16px]">
      <img src={logo} alt="IMAGE" />
      <div></div>

      <ul className="xs:hidden lg:flex gap-[32px]">
        <li>Home</li>
        <li>About</li>
        <li>Volunteer</li>
        <li>Store</li>
        <li>Exhibitors</li>
        <li>Speakers</li>
      </ul>
      <a
        className="xs:hidden lg:block xs:w-[] lg:w-[175px] text-center rounded-[32px]  bg-[#178A2D] xs:py-[14px] text-white "
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
      >
        Register{" "}
      </a>
      <div className="xs:block lg:hidden">
        <GiHamburgerMenu onClick={toggleSidebar} />
        <div
          className={`fixed inset-0 transition-opacity duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 hidden"
          }`}
          onClick={toggleSidebar}
        ></div>
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-amber-600 z-20 text-black transition-transform duration-300 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="block text-white">
            <li>Home</li>
            <li>About</li>
            <li>Volunteer</li>
            <li>Store</li>
            <li>Exhibitors</li>
            <li>Speakers</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar
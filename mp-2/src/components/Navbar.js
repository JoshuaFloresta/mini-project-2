import React, { useEffect, useState } from "react";
import "../index.css";
import HamburgerButton from "./BurgerButton";
import "./navbar.css";
import Femi from "./Femi logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
    className={`fixed top-0 left-0 right-0 z-10 max-w-7xl mx-auto p-3 md:p-4 md:rounded-full sm:px-6 lg:px-8  md:w-3/4  ${
      isSticky ? "bg-white shadow-xl lg:mt-5 z-10" : ""
    }`}
  >
    <div className="flex justify-between items-center">
  <div className="flex items-center">
        <div className="flex-shrink-0 hidden md:block">
         <Link to ="/"> <img src={Femi} alt="Logo" width={100} height={30} /></Link>
        </div>
        <div className="hidden md:block">
        <div className="ml-10 flex space-x-4">
            <Link
              to="/health"
              className="text-black p-1 rounded-md text-sm font-medium "
              id="links"
            >
              Health Libraries
            </Link>
            <Link
              to="/calculator"
              className="text-black p-1 rounded-md text-sm font-medium"
              id="links"
            >
              Calculators
            </Link>
            <Link
              to="/calendar"
              className="text-black p-1 rounded-md text-sm font-medium"
              id="links"
            >
              Calendar
            </Link>
          </div>
        </div>
        <div className="md:hidden">
          <button
            className="p-2 transition duration-150 ease-in-out"
            onClick={toggleNavbar}
          >
            <HamburgerButton />
          </button>
        </div>
      </div>
      <div className="flex align-middle ">
        <Link
          to="/login"
          className="hidden lg:inline text-black   px-3 py-2 mt-2 rounded-md text-sm font-medium"
          id="links"
        >
          Manage Subscription
        </Link>
        <button
          className="hidden md:block lg:block p-3 whitespace-nowrap lg:p-4 rounded-full text-white md:text-sm lg:text-lg"
          style={{ backgroundColor: "#7936EB" }}
        >
          Try App Today
        </button>
        <div className="flex-shrink-0 block md:hidden lg:hidden">
        <Link to ="/"> <img src={Femi} alt="Logo" width={100} height={30} /></Link>
        </div>
      </div>
    </div>
<div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
<div className="px-2 pt-2 pb-3">
        <Link
          to="/health"
          className="block text-black   px-3 py-2 rounded-md text-md font-medium"
          id="links"
        >
          Health Libraries
        </Link>
        <Link
          to="/calculator"
          className="block text-black   px-3 py-2 rounded-md text-md font-medium"
          id="links"
        >
          Calculators
        </Link>
        <Link
          to="/calendar"
          className="block text-black   px-3 py-2 rounded-md text-md font-medium"
          id="links"
        >
          Calendar
        </Link>

        <button
          className="p-3 block px-5 lg:py-4 rounded-full mx-3 text-white text-xs md:text-lg lg:text-lg lg:font-bold font-semibold"
          style={{ backgroundColor: "#7936EB" }}
        >
          Try App Today
        </button>
      </div>
</div>


    </nav>
  );
};

export default Navbar;

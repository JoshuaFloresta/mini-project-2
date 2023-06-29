import React, { useEffect, useState } from 'react';
import '../index.css';
import HamburgerButton from './BurgerButton';
import './navbar.css'
import Femi from './Femi logo.png'
import { Link } from 'react-router-dom';




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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 max-w-7xl mx-auto p-3 md:p-4 md:rounded-full sm:px-6 lg:px-8  md:w-3/4  ${isSticky ? 'bg-white shadow-xl lg:mt-5' : ''}`}>
      <div className='flex justify-between'>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-between ">
            <div className="flex-shrink-0 hidden md:block">
            <img src={Femi} alt="Logo" width={100} height={30} />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="#" className=" text-black hover:bg-gray-700  px-3 py-2 rounded-md text-sm font-medium" id="links">Link 1</Link>
                <a href="#" className=" text-black hover:bg-gray-700  px-3 py-2 rounded-md text-sm font-medium" id="links">Link 2</a>
                <a href="#" className=" text-black hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" id="links">Link 3</a>
              </div>
            </div>
          </div>
          <div className="mr-2 flex md:hidden" onClick={toggleNavbar}> 
            <HamburgerButton className="inline-flex items-center justify-center p-2 transition duration-150 ease-in-out" onClick={toggleNavbar}/>
          </div>
          <div className="lg:hidden flex ms-36 md:ms-50">
          <img src={Femi} alt="Logo" width={100} height={30} />
            </div>
        </div>
        <div className='my-auto'>
              <a href="#" className=" hidden lg:inline text-black hover:bg-gray-700  px-3 py-2 rounded-md text-sm font-medium" id="links">Manage Subscription</a>
              <button className='md:p-3 lg:p-4 rounded-full mx-3 text-white p-3 text-xs md:text-lg font-semibold' style={{backgroundColor:'#FF398E'}}>
                  Try App Today
              </button>
            </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 ">
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Link 1</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Link 2</a>
          <a href="#" className="text-gray-300 hover:bg-red-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Link 3</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

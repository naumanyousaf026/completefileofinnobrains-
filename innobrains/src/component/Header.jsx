import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#F6F6F6] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:px-[44px]">
          {/* Left navigation */}
          <ul className="items-center space-x-5 font-bold hidden md:flex">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/Services'>Services</Link></li>
            <Link to='/blog'>Blog</Link>
            <li><Link to='/products'>Products</Link></li>
          </ul>

          {/* Center logo */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <img
              className="h-10 w-auto"
              src="https://portal.innobrains.pk/files/system/_file64d57376183f5-site-logo.png"
              alt="Innobrains Official Logo"
            />
          </div>

          {/* Right navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to='/contact' className="bg-[#103153] text-white px-3 py-2 rounded-full text-sm font-medium">Contact us</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-800 focus:outline-none">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <ul>
              <li><Link to='/' className="block text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-base font-medium">Home</Link></li>
              <li><Link to='/about' className="block text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-base font-medium">About</Link></li>
              <li><Link to='/services' className="block text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-base font-medium">Services</Link></li>
              <li><Link to='/products' className="block text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-base font-medium">Products</Link></li>
              <li><Link to='/blog' className="block text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-base font-medium">Blog</Link></li>
              <li>
                <Link to='/contact' className="block bg-[#103153] text-white px-3 py-2 rounded-full w-full mt-5 text-center text-base font-medium">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
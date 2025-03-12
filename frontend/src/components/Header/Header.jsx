import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50
           ">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <h1 className="text-3xl font-bold text-green-500"><i className="fa-regular fa-square-caret-up text-yellow-500 mr-2"></i>Rental House</h1>
          <nav>
            <ul className="flex space-x-6 text-lg font-medium animate-pulse">
              <li>
                <Link
                  to="/"
                  className="text-yellow-500 hover:text-yellow-500 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-yellow-500 transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/service"
                  className="text-gray-700 hover:text-yellow-500 transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-700 hover:text-yellow-500 transition"
                >
                  Booking
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-gray-700 hover:text-yellow-500 transition"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-yellow-500 transition"
                >
                  <Link to="/ContactForm"> Contact</Link>
                </Link>
              </li>
            </ul>
          </nav>
          <div>
        
         <button className="bg-green-500 text-white px-5 py-2
             rounded-lg shadow-md hover:bg-yellow-500 transition  animate-pulse">
           <Link to="/Login">   Login </Link>
            </button>
            
            
            
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;

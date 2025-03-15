// import React from "react";
// import { Link } from "react-router-dom";

// function Header() {
//   return (
//     <div>
//       <header
//         className="bg-white shadow-md fixed top-0 left-0 w-full z-50
//            "
//       >
//         <div className="container mx-auto flex items-center justify-between py-4 px-6">
//           <h1 className="text-3xl font-bold text-green-500">
//             <i className="fa-regular fa-square-caret-up text-yellow-500 mr-2"></i>
//             Rental House
//           </h1>
//           <nav>
//             <ul className="flex space-x-6 text-lg font-medium animate-pulse">
//               <li>
//                 <Link
//                   to="/"
//                   className="text-yellow-500 hover:text-green-500 transition
//                      "
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/about"
//                   className="text-gray-700 hover:text-yellow-500 transition hover:underline"
//                 >
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/service"
//                   className="text-gray-700 hover:text-yellow-500 transition hover:underline"
//                 >
//                   Services
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/booking"
//                   className="text-gray-700 hover:text-yellow-500 transition hover:underline"
//                 >
//                   Booking
//                 </Link>
//               </li>
//               {/* <li>
//                 <Link
//                   to="/pricing"
//                   className="text-gray-700 hover:text-yellow-500 transition hover:underline"
//                 >
//                   Pricing
//                 </Link>
//               </li> */}
//               <li>
//                 <Link
//                   to="/contact"
//                   className="text-gray-700 hover:text-yellow-500 transition hover:underline"
//                 >
//                   <Link to="/ContactForm"> Contact</Link>
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//           <div>
// <<<<<<< HEAD
//             <button
//               className="bg-green-500 text-white px-5 py-2
//              rounded-lg shadow-md hover:bg-yellow-500 transition  animate-pulse"
//             >
//               <Link to="/Login">Login</Link>
// =======

//          <button className="bg-green-500 text-white px-5 py-2
//              rounded-lg shadow-md hover:bg-yellow-500 transition  animate-pulse">
//            <Link to="/Login">   Login </Link>
// >>>>>>> 126bf3f93a6856a9f6c9e8fd394822b1aa3212a7
//             </button>

//           </div>
//         </div>
//       </header>
//     </div>
//   );
// }

// export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      {/* <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <h1 className="text-3xl font-bold text-green-500">
            <i className="fa-regular fa-square-caret-up text-yellow-500 mr-2"></i>
            Rental House
          </h1>
          <nav>
            <ul className="flex space-x-6 text-lg font-medium animate-pulse">
              <li>
                <Link
                  to="/"
                  className="text-yellow-500 hover:text-green-500 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-yellow-500 transition hover:underline"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/service"
                  className="text-gray-700 hover:text-yellow-500 transition hover:underline"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/booking"
                  className="text-gray-700 hover:text-yellow-500 transition hover:underline"
                >
                  Booking
                </Link>
              </li>
              <li>
                <Link
                  to="/ContactForm"
                  className="text-gray-700 hover:text-yellow-500 transition hover:underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <button className="bg-green-500 text-white px-5 py-2 rounded-lg 
            shadow-md hover:bg-yellow-500 transition animate-pulse">
              <Link to="/login">Login</Link>
            </button>
          </div>
        </div>
      </header> */}


<header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-green-500">
          <i className="fa-regular fa-square-caret-up text-yellow-500 mr-2"></i>
          Rental House
        </h1>

        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <i className="fas fa-times text-2xl"></i> 
          ) : (
            <i className="fas fa-bars text-2xl"></i> 
          )}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex lg:items-center lg:space-x-6">
          <ul className="flex space-x-6 text-lg font-medium  animate-pulse">
            <li>
              <Link to="/" className="text-yellow-500 hover:text-green-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-700 hover:text-yellow-500 transition hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/service" className="text-gray-700 hover:text-yellow-500 transition hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link to="/booking" className="text-gray-700 hover:text-yellow-500 transition hover:underline">
                Booking
              </Link>
            </li>
            <li>
              <Link to="/ContactForm" className="text-gray-700 hover:text-yellow-500 transition hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Login Button (Desktop) */}
        <div className="hidden lg:block">
          <button className="bg-green-500 text-white px-5 py-2 rounded-lg
           shadow-md hover:bg-yellow-500 transition  animate-pulse">
            <Link to="/login">Login</Link>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-4 p-6 text-lg font-medium  animate-pulse">
            <li>
              <Link to="/" className="text-yellow-500 hover:text-green-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-700 hover:text-yellow-500 transition hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/service" className="text-gray-700 hover:text-yellow-500 transition hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link to="/booking" className="text-gray-700 hover:text-yellow-500 transition hover:underline">
                Booking
              </Link>
            </li>
            <li>
              <Link to="/ContactForm" className="text-gray-700 hover:text-yellow-500 transition hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <button className="bg-green-500 text-white px-5 py-2 
              rounded-lg shadow-md hover:bg-yellow-500 transition">
                <Link to="/login">Login</Link>
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>

      
    </div>
  );
}

export default Header;

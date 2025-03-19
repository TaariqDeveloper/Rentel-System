// // import React from "react";
// // import { Link } from "react-router-dom";
// // import { FaBox, FaUsers, FaShoppingCart, FaUserShield } from "react-icons/fa";

// // function SideNav() {
// //   return (
// //     <div>
// //       {/* Sidebar */}
// //       <div className="bg-slate-800 w-[20%] h-screen fixed flex flex-col p-5 text-white">
// //         <h2 className="text-2xl font-bold mb-6 text-center">Admin Dashboard</h2>
// //         <ul className="space-y-4">
// //           <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-slate-600">
// //             <FaBox />{" "}
// //             <Link to="">
// //               <span>Products</span>
// //             </Link>
// //           </li>
// //           <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-slate-600">
// //             <FaUsers /> <span>Customers</span>
// //           </li>
// //           <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-slate-600">
// //             <FaShoppingCart /> <span>Orders</span>
// //           </li>
// //           <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-slate-600">
// //             <FaUserShield /> <span>Users</span>
// //           </li>
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // }

// // export default SideNav;

// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaBox, FaUsers, FaShoppingCart, FaUserShield } from "react-icons/fa";

// function SideNav() {
//   const navigate = useNavigate();

//   // Logout function
//   const handleLogout = () => {
//     localStorage.removeItem("token"); // Remove authentication token
//     navigate("/login"); // Redirect to login page
//   };

//   return (
//     <>
//       {/* Header (Fixed at the Top) */}
//       <header className="bg-white shadow-md fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 z-10">
//         <h1 className="text-2xl font-bold text-gray-700">Admin Panel</h1>
//         <button
//           onClick={handleLogout}
//           className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
//         >
//           Sign Out
//         </button>
//       </header>

//       {/* Sidebar */}
//       <div className="bg-slate-800 w-[20%] h-screen fixed flex flex-col p-5 text-white mt-16">
//         <h2 className="text-2xl font-bold mb-6 text-center">Admin Dashboard</h2>
//         <ul className="space-y-4">
//           <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-slate-600">
//             <FaBox />
//             <Link to="/" className="hover:underline">
//               <span>Products</span>
//             </Link>
//           </li>
//           <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-slate-600">
//             <FaUsers />
//             <Link to="" className="hover:underline">
//               <span>
//                 <Link to="/customers">Customers</Link>
//               </span>
//             </Link>
//           </li>
//           <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-slate-600">
//             <FaShoppingCart />
//             <Link to="/orders" className="hover:underline">
//               <span>Orders</span>
//             </Link>
//           </li>
//           <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-slate-600">
//             <FaUserShield />
//             <Link to="/users" className="hover:underline">
//               <span>Users</span>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }

// export default SideNav;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   FaBox,
//   FaUsers,
//   FaShoppingCart,
//   FaUserShield,
//   FaAngleDown,
// } from "react-icons/fa";

// import { useAuth } from "../../components/context/ContextProvide";
// function SideNav() {
//   const { user } = useAuth();
//   const navigate = useNavigate();
//   const [openUsers, setOpenUsers] = useState(false); // State to toggle Users submenu

//   // Logout function
//   const handleLogout = () => {
//     localStorage.removeItem("token"); // Remove authentication token
//     navigate("/login"); // Redirect to login page
//   };

//   return (
//     <>
//       {/* Header (Fixed at the Top) */}
//       <header className="bg-green-500 shadow-md fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 z-10">
//         <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
//         <button
//           onClick={handleLogout}
//           className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-300"
//         >
//           Logout
//         </button>
//         <button
//           onClick={handleLogout}
//           className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-300"
//         >
//           Login
//         </button>

//         <button
//           onClick={handleLogout}
//           className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-300"
//         >
//           singup
//         </button>
//       </header>

//       {/* Sidebar */}
//       <div className="bg-gray-900 text-white w-[250px] h-screen fixed flex flex-col p-5 mt-16 transition-all duration-500 shadow-lg">
//         <h2 className="text-xl font-bold mb-6 text-center">Admin Dashboard</h2>

//         <ul className="space-y-3">
//           {/* Products */}
//           <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-700 transition duration-300">
//             <FaBox className="text-lg" />
//             <Link to="" className="hover:underline">
//               <span>Products</span>
//             </Link>
//           </li>

//           {/* Users (Animated Dropdown) */}
//           <li>
//             <button
//               onClick={() => setOpenUsers(!openUsers)}
//               className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-700 transition duration-300"
//             >
//               <div className="flex items-center gap-3">
//                 <FaUsers className="text-lg" />
//                 <span>Users</span>
//               </div>
//               <FaAngleDown
//                 className={`transition-transform duration-300 ${
//                   openUsers ? "rotate-180" : ""
//                 }`}
//               />
//             </button>

//             {/* Smooth Dropdown Animation */}
//             <div
//               className={`overflow-hidden transition-all duration-500 ${
//                 openUsers ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
//               }`}
//             >
//               <ul className="pl-6 mt-1 space-y-2">
//                 <li>
//                   <Link
//                     to="/users/list"
//                     className="block p-2 rounded-lg hover:bg-gray-700 transition duration-300"
//                   >
//                     User List
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/users/add"
//                     className="block p-2 rounded-lg hover:bg-gray-700 transition duration-300"
//                   >
//                     Add User
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </li>

//           {/* Customers */}
//           <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-700 transition duration-300">
//             <FaShoppingCart className="text-lg" />
//             <Link to="/customers" className="hover:underline">
//               <span>Customers</span>
//             </Link>
//           </li>

//           {/* Orders */}
//           <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-700 transition duration-300">
//             <FaUserShield className="text-lg" />
//             <Link to="/orders" className="hover:underline">
//               <span>Orders</span>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }

// export default SideNav;

// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   FaBox,
//   FaUsers,
//   FaShoppingCart,
//   FaUserShield,
//   FaAngleDown,
//   FaUser,
//   FaComments,
// } from "react-icons/fa";
// import { useAuth } from "../../components/context/ContextProvide";

// function SideNav() {
//   const { user } = useAuth(); // Check user authentication
//   const navigate = useNavigate();
//   const [openUsers, setOpenUsers] = useState(false); // State to toggle Users submenu
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown menu

//   // Logout function
//   const handleLogout = () => {
//     localStorage.removeItem("token"); // Remove authentication token
//     navigate("/login"); // Redirect to login page
//   };

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const closeDropdown = (e) => {
//       if (!e.target.closest(".dropdown-menu")) {
//         setIsDropdownOpen(false);
//       }
//     };
//     document.addEventListener("click", closeDropdown);
//     return () => document.removeEventListener("click", closeDropdown);
//   }, []);

//   return (
//     <>
//       {/* Header (Fixed at the Top) */}
//       <header className="bg-green-500 shadow-md fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 z-10">
//         <h1 className="text-2xl font-bold text-white">Admin Panel</h1>

//         {/* User Dropdown Menu */}
//         <div className="relative dropdown-menu">
//           <button
//             onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//             className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg hover:bg-gray-200 transition-all duration-300"
//           >
//             <FaBell className="text-lg text-gray-700" />
//             <FaUser className="text-lg text-gray-700" />
//             <span className="text-gray-700">
//               {user ? user.name : "Account"}
//             </span>
//             <FaAngleDown
//               className={`transition-transform duration-300 ${
//                 isDropdownOpen ? "rotate-180" : ""
//               }`}
//             />
//           </button>

//           {/* Dropdown Menu */}
//           {isDropdownOpen && (
//             <div className="absolute right-0 mt-2 w-40 bg-white text-black shadow-lg rounded-md">
//               {!user ? (
//                 <>
//                   <Link
//                     to="/login"
//                     className="block px-4 py-2 hover:bg-gray-200 transition text-center"
//                   >
//                     Login
//                   </Link>
//                   <Link
//                     to="/register"
//                     className="block px-4 py-2 hover:bg-gray-200 transition text-center"
//                   >
//                     Signup
//                   </Link>
//                 </>
//               ) : (
//                 <button
//                   onClick={handleLogout}
//                   className="w-full text-left px-4 py-2 hover:bg-gray-200 transition"
//                 >
//                   Logout
//                 </button>
//               )}
//             </div>
//           )}
//         </div>
//       </header>

//       {/* Sidebar */}
//       <div className="bg-[#0a1636] text-white w-[250px] h-screen fixed flex flex-col p-5 mt-16 transition-all duration-500 shadow-lg">
//         <h2 className="text-xl font-bold mb-6 text-center">Admin Dashboard</h2>

//         <ul className="space-y-3 mt-10">
//           <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-700 transition duration-300">
//             <Link to="/dashboard" className="hover:underline">
//               <span>
//                 {" "}
//                 <i class="fa-brands fa-windows mr-3 text-lg"></i>Dashboard
//               </span>
//             </Link>
//           </li>
//           {/* Products */}
//           <li
//             className="flex items-center gap-3 p-3 rounded-lg cursor-pointer
//            hover:bg-gray-700 transition duration-300"
//           >
//             <FaBox className="text-lg" />
//             <Link to="/bookingList" className="hover:underline">
//               <span>bookings</span>
//             </Link>
//           </li>

//           {/* Users (Animated Dropdown) */}
//           <li>
//             <button
//               onClick={() => setOpenUsers(!openUsers)}
//               className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-700 transition duration-300"
//             >
//               <div className="flex items-center gap-3">
//                 <FaUsers className="text-lg" />
//                 <span>Users</span>
//               </div>
//               <FaAngleDown
//                 className={`transition-transform duration-300 ${
//                   openUsers ? "rotate-180" : ""
//                 }`}
//               />
//             </button>

//             {/* Smooth Dropdown Animation */}
//             <div
//               className={`overflow-hidden transition-all duration-500 ${
//                 openUsers ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
//               }`}
//             >
//               <ul className="pl-6 mt-1 space-y-2">
//                 <li>
//                   <Link
//                     to="/UserList"
//                     className="block p-2 rounded-lg hover:bg-gray-700 transition duration-300"
//                   >
//                     User List
//                   </Link>
//                 </li>
//                 {/* <li>
//                   <Link
//                     to="/register"
//                     className="block p-2 rounded-lg hover:bg-gray-700 transition duration-300"
//                   >
//                     Add User
//                   </Link>
//                 </li> */}
//               </ul>
//             </div>
//           </li>

//           {/* Customers */}
//           <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-700 transition duration-300">
//             <FaShoppingCart className="text-lg" />
//             <Link to="/displayCustomer" className="hover:underline">
//               <span>Customers</span>
//             </Link>
//           </li>

//           {/* Orders */}
//           <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-700 transition duration-300">
//             <FaUserShield className="text-lg" />
//             <Link to="/orders" className="hover:underline">
//               <span>Orders</span>
//             </Link>
//           </li>

//           {/* inpox */}
//           <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-700 transition duration-300">
//             <FaComments className="text-lg" />
//             <Link to="/" className="hover:underline">
//               <span>Inpox</span>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }

// export default SideNav;

// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   FaBox,
//   FaUsers,
//   FaShoppingCart,
//   FaUserShield,
//   FaAngleDown,
//   FaUser,
//   FaComments,
//   FaBell,
// } from "react-icons/fa";
// import { useAuth } from "../../components/context/ContextProvide";

// function SideNav() {
//   const { user } = useAuth();
//   const navigate = useNavigate();
//   const [openUsers, setOpenUsers] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [notifications, setNotifications] = useState(2); // Example: 2 new notifications

//   // Logout function
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   useEffect(() => {
//     const closeDropdown = (e) => {
//       if (!e.target.closest(".dropdown-menu")) {
//         setIsDropdownOpen(false);
//       }
//     };
//     document.addEventListener("click", closeDropdown);
//     return () => document.removeEventListener("click", closeDropdown);
//   }, []);

//   return (
//     <>
//       {/* Header (Fixed at the Top) */}
//       <header className="bg-green-500 shadow-md fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 z-10">
//         <h1 className="text-2xl font-bold text-white">Admin Panel</h1>

//         {/* Right Section: Bell Notification + User Dropdown */}
//         <div className="flex items-center space-x-6">
//           {/* 🔔 Notification Bell (Positioned Before User Dropdown) */}
//           <div className="relative cursor-pointer">
//             <FaBell className="text-lg text-gray-700" />
//             {notifications > 0 && (
//               <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full -mt-1 -mr-1">
//                 {notifications}
//               </span>
//             )}
//           </div>

//           {/* 👤 User Dropdown */}
//           <div className="relative dropdown-menu">
//             <button
//               onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//               className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg hover:bg-gray-200 transition-all duration-300"
//             >
//               <FaUser className="text-lg text-gray-700" />
//               <span className="text-gray-700">
//                 {user ? user.name : "Account"}
//               </span>
//               <FaAngleDown
//                 className={`transition-transform duration-300 ${
//                   isDropdownOpen ? "rotate-180" : ""
//                 }`}
//               />
//             </button>

//             {/* Dropdown Menu */}
//             {isDropdownOpen && (
//               <div className="absolute right-0 mt-2 w-40 bg-white text-black shadow-lg rounded-md">
//                 {!user ? (
//                   <>
//                     <Link
//                       to="/login"
//                       className="block px-4 py-2 hover:bg-gray-200 transition text-center"
//                     >
//                       Login
//                     </Link>
//                     <Link
//                       to="/register"
//                       className="block px-4 py-2 hover:bg-gray-200 transition text-center"
//                     >
//                       Signup
//                     </Link>
//                   </>
//                 ) : (
//                   <button
//                     onClick={handleLogout}
//                     className="w-full text-left px-4 py-2 hover:bg-gray-200 transition"
//                   >
//                     Logout
//                   </button>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </header>

//       {/* Sidebar */}
//       <div className="bg-[#0a1636] text-white w-[250px] h-screen fixed flex flex-col p-5 mt-16 transition-all duration-500 shadow-lg">
//         <h2 className="text-xl font-bold mb-6 text-center">Admin Dashboard</h2>

//         <ul className="space-y-3 mt-10">
//           <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-700 transition duration-300">
//             <Link to="/dashboard" className="hover:underline">
//               <span>
//                 <i className="fa-brands fa-windows mr-3 text-lg"></i>Dashboard
//               </span>
//             </Link>
//           </li>

//           {/* Bookings */}
//           <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-700 transition duration-300">
//             <FaBox className="text-lg" />
//             <Link to="/bookingList" className="hover:underline">
//               <span>Bookings</span>
//             </Link>
//           </li>

//           {/* Users (Dropdown) */}
//           <li>
//             <button
//               onClick={() => setOpenUsers(!openUsers)}
//               className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-700 transition duration-300"
//             >
//               <div className="flex items-center gap-3">
//                 <FaUsers className="text-lg" />
//                 <span>Users</span>
//               </div>
//               <FaAngleDown
//                 className={`transition-transform duration-300 ${
//                   openUsers ? "rotate-180" : ""
//                 }`}
//               />
//             </button>

//             <div
//               className={`overflow-hidden transition-all duration-500 ${
//                 openUsers ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
//               }`}
//             >
//               <ul className="pl-6 mt-1 space-y-2">
//                 <li>
//                   <Link
//                     to="/UserList"
//                     className="block p-2 rounded-lg hover:bg-gray-700 transition duration-300"
//                   >
//                     User List
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </li>

//           {/* Customers */}
//           <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-700 transition duration-300">
//             <FaShoppingCart className="text-lg" />
//             <Link to="/displayCustomer" className="hover:underline">
//               <span>Customers</span>
//             </Link>
//           </li>

//           {/* Orders */}
//           <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-700 transition duration-300">
//             <FaUserShield className="text-lg" />
//             <Link to="/orders" className="hover:underline">
//               <span>Orders</span>
//             </Link>
//           </li>

//           {/* ✅ Inbox Section with Correct Spelling */}
//           <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-700 transition duration-300">
//             <FaComments className="text-lg" />
//             <Link to="/inbox" className="hover:underline">
//               <span>Inbox</span>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }

// export default SideNav;

// i will comabck
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaBox,
  FaUsers,
  FaShoppingCart,
  FaUserShield,
  FaAngleDown,
  FaUser,
  FaComments,
  FaBell,
} from "react-icons/fa";
import { useAuth } from "../../components/context/ContextProvide";
import { io } from "socket.io-client";
import axios from "axios";

const socket = io("http://localhost:5000"); // Ensure this matches your backend

function SideNav() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [openUsers, setOpenUsers] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [notifications, setNotifications] = useState(0);
  const [messages, setMessages] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    // Fetch messages from backend on load
    axios.get("http://localhost:5000/api/contacts").then((response) => {
      setMessages(response.data);
      setNotifications(response.data.length);
    });

    // Listen for new messages in real-time
    socket.on("newMessage", (newMessage) => {
      setMessages((prev) => [newMessage, ...prev]);
      setNotifications((prev) => prev + 1);
    });

    return () => {
      socket.off("newMessage");
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      {/* Header */}
      <header className="bg-green-500 shadow-md fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 z-10">
        <h1 className="text-2xl font-bold text-white">Admin Panel</h1>

        <div className="flex items-center space-x-6">
          {/* 🔔 Notification Bell */}
          <div
            className="relative cursor-pointer"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <FaBell className="text-lg text-gray-700" />
            {notifications > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full -mt-1 -mr-1">
                {notifications}
              </span>
            )}

            {/* Dropdown Messages */}
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-64 bg-white text-black shadow-lg rounded-md p-2">
                {messages.length > 0 ? (
                  messages.map((msg, index) => (
                    <div key={index} className="border-b p-2 text-sm">
                      <strong>
                        {msg.firstName} {msg.lastName}:
                      </strong>
                      <p>{msg.message}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-500">No new messages</p>
                )}
              </div>
            )}
          </div>

          {/* 👤 User Dropdown */}
          <div className="relative dropdown-menu">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg hover:bg-gray-200 transition-all duration-300"
            >
              <FaUser className="text-lg text-gray-700" />
              <span className="text-gray-700">
                {user ? user.name : "Account"}
              </span>
              <FaAngleDown
                className={`transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-black shadow-lg rounded-md">
                {!user ? (
                  <>
                    <Link
                      to="/login"
                      className="block px-4 py-2 hover:bg-gray-200 transition text-center"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="block px-4 py-2 hover:bg-gray-200 transition text-center"
                    >
                      Signup
                    </Link>
                  </>
                ) : (
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-200 transition"
                  >
                    Logout
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div className="bg-[#0a1636] text-white w-[250px] h-screen fixed flex flex-col p-5 mt-16 transition-all duration-500 shadow-lg">
        <h2 className="text-xl font-bold mb-6 text-center">Admin Dashboard</h2>

        <ul className="space-y-3 mt-10">
          <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-700 transition duration-300">
            <Link to="/dashboard" className="hover:underline">
              <span>
                <i className="fa-brands fa-windows mr-3 text-lg"></i>Dashboard
              </span>
            </Link>
          </li>

          {/* Bookings */}
          <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-700 transition duration-300">
            <FaBox className="text-lg" />
            <Link to="/bookingList" className="hover:underline">
              <span>Bookings</span>
            </Link>
          </li>

          {/* Users (Dropdown) */}
          <li>
            <button
              onClick={() => setOpenUsers(!openUsers)}
              className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-700 transition duration-300"
            >
              <div className="flex items-center gap-3">
                <FaUsers className="text-lg" />
                <span>Users</span>
              </div>
              <FaAngleDown
                className={`transition-transform duration-300 ${
                  openUsers ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                openUsers ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <ul className="pl-6 mt-1 space-y-2">
                <li>
                  <Link
                    to="/UserList"
                    className="block p-2 rounded-lg hover:bg-gray-700 transition duration-300"
                  >
                    User List
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          {/* Customers */}
          <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-700 transition duration-300">
            <FaShoppingCart className="text-lg" />
            <Link to="/displayCustomer" className="hover:underline">
              <span>Customers</span>
            </Link>
          </li>

          {/* Orders */}
          <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-700 transition duration-300">
            <FaUserShield className="text-lg" />
            <Link to="/orders" className="hover:underline">
              <span>Orders</span>
            </Link>
          </li>

          {/* Inbox */}
          <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-700 transition duration-300">
            <FaComments className="text-lg" />
            <Link to="/ContactMessages" className="hover:underline">
              <span>Inbox</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideNav;

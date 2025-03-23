// import React, { useEffect, useState } from "react";
// import {
//   FaBox,
//   FaUsers,
//   FaShoppingCart,
//   FaUserShield,
//   FaDollarSign,
// } from "react-icons/fa";
// import SideNav from "../Sidenav/Sidenav";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Pie } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// // Register Chart.js components
// ChartJS.register(ArcElement, Tooltip, Legend);

// function Dashboard() {
//   const [getAllbookings, setBookings] = useState(0);
//   const [getAllUsers, setUsers] = useState(0);
//   const [getAllCustomers, setCustomers] = useState(0);
//   const [totalBookingPrice, setTotalBookingPrice] = useState(0); // ✅ Total Booking Price State

//   // Fetch Total Bookings
//   const HandleAllBookings = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/total/bookings");
//       setBookings(res.data.total || 0);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // Fetch Total Users
//   const HandleAllUsers = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/total/users");
//       setUsers(res.data.total || 0);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // Fetch Total Customers
//   const HandleAllCustomers = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/total/customers");
//       setCustomers(res.data.total || 0);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // ✅ Fetch Total Booking Price
//   const HandleTotalBookingPrice = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/total/price");
//       setTotalBookingPrice(res.data.totalPrice || 0);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // Fetch data initially and update every 5 seconds
//   useEffect(() => {
//     HandleAllBookings();
//     HandleAllUsers();
//     HandleAllCustomers();
//     HandleTotalBookingPrice(); // ✅ Fetch Total Price

//     const interval = setInterval(() => {
//       HandleAllBookings();
//       HandleAllUsers();
//       HandleAllCustomers();
//       HandleTotalBookingPrice(); // ✅ Refresh Total Price
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   // Booking Pie Chart Data
//   const bookingChartData = {
//     labels: ["Bookings", "Available"],
//     datasets: [
//       {
//         data: [getAllbookings, 100 - getAllbookings],
//         backgroundColor: ["#2563EB", "#E5E7EB"],
//         borderWidth: 1,
//         borderColor: "#ffffff",
//         hoverOffset: 6,
//       },
//     ],
//   };

//   // User Pie Chart Data
//   const userChartData = {
//     labels: ["Users", "Available"],
//     datasets: [
//       {
//         data: [getAllUsers, 100 - getAllUsers],
//         backgroundColor: ["#9333EA", "#D8BFD8"],
//         borderWidth: 1,
//         borderColor: "#ffffff",
//         hoverOffset: 6,
//       },
//     ],
//   };

//   // Customer Pie Chart Data
//   const customerChartData = {
//     labels: ["Customers", "Available"],
//     datasets: [
//       {
//         data: [getAllCustomers, 100 - getAllCustomers],
//         backgroundColor: ["#F97316", "#FDE68A"],
//         borderWidth: 1,
//         borderColor: "#ffffff",
//         hoverOffset: 6,
//       },
//     ],
//   };

//   // ✅ Total Revenue Pie Chart Data
//   const revenueChartData = {
//     labels: ["Total Revenue ($)", "Remaining Goal"],
//     datasets: [
//       {
//         data: [totalBookingPrice, 100000 - totalBookingPrice], // Assume goal is $100,000
//         backgroundColor: ["#FFD700", "#E5E7EB"], // Gold and Grey
//         borderWidth: 1,
//         borderColor: "#ffffff",
//         hoverOffset: 6,
//       },
//     ],
//   };

//   return (
//     <>
//       <SideNav />
//       {/* Four Stat Boxes */}
//       <div className="ml-[22%] pt-20 flex gap-6 flex-wrap">
//         {/* Booking Box */}
//         <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg flex items-center gap-4 w-[250px]">
//           <FaBox className="text-4xl" />
//           <div>
//             <h3 className="text-xl font-semibold">
//               <Link to="/bookingList">Booking</Link>
//             </h3>
//             <p className="text-lg">{getAllbookings > 0 ? getAllbookings : 0}</p>
//           </div>
//         </div>

//         {/* Users Box */}
//         <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg flex items-center gap-4 w-[250px]">
//           <FaUsers className="text-4xl" />
//           <div>
//             <h3 className="text-xl font-semibold">Users Overview</h3>
//             <p className="text-lg">{getAllUsers > 0 ? getAllUsers : 0}</p>
//           </div>
//         </div>

//         {/* Customers Box */}
//         <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg flex items-center gap-4 w-[250px]">
//           <FaUserShield className="text-4xl" />
//           <div>
//             <Link to="/displayCustomer">
//               <h3 className="text-xl font-semibold">Customers</h3>
//             </Link>
//             <p className="text-lg">
//               {getAllCustomers > 0 ? getAllCustomers : 0}
//             </p>
//           </div>
//         </div>

//         {/* ✅ Total Booking Price Box */}
//         <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg flex items-center gap-4 w-[250px]">
//           <FaDollarSign className="text-4xl" />
//           <div>
//             <h3 className="text-xl font-semibold">Total Revenue</h3>
//             <p className="text-lg">${totalBookingPrice.toLocaleString()}</p>
//           </div>
//         </div>
//       </div>

//       {/* Charts Section */}
//       <div className="ml-[22%] mt-10 flex gap-10 flex-wrap">
//         {/* Booking Pie Chart */}
//         <div className="p-6 w-full max-w-[250px] bg-white shadow-lg rounded-lg flex flex-col items-center">
//           <h2 className="text-lg font-bold text-gray-800 mb-3">
//             Booking Overview
//           </h2>
//           <Pie data={bookingChartData} />
//         </div>

//         {/* User Pie Chart */}
//         <div className="p-6 w-full max-w-[250px] bg-white shadow-lg rounded-lg flex flex-col items-center">
//           <h2 className="text-lg font-bold text-gray-800 mb-3">
//             Users Overview
//           </h2>
//           <Pie data={userChartData} />
//         </div>

//         {/* Customer Pie Chart */}
//         <div className="p-6 w-full max-w-[250px] bg-white shadow-lg rounded-lg flex flex-col items-center">
//           <h2 className="text-lg font-bold text-gray-800 mb-3">
//             Customers Overview
//           </h2>
//           <Pie data={customerChartData} />
//         </div>

//         {/* ✅ Total Revenue Pie Chart */}
//         <div className="p-6 w-full max-w-[250px] bg-white shadow-lg rounded-lg flex flex-col items-center">
//           <h2 className="text-lg font-bold text-gray-800 mb-3">
//             Total Revenue Overview
//           </h2>
//           <Pie data={revenueChartData} />
//         </div>
//       </div>
//     </>
//   );
// }

// export default Dashboard;

import React, { useEffect, useState } from "react";
import { FaBox, FaUsers, FaUserShield, FaDollarSign } from "react-icons/fa";
import SideNav from "../Sidenav/Sidenav";
import { Link } from "react-router-dom";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

function Dashboard() {
  const [getAllbookings, setBookings] = useState(0);
  const [getAllUsers, setUsers] = useState(0);
  const [getAllCustomers, setCustomers] = useState(0);
  const [totalBookingPrice, setTotalBookingPrice] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [bookings, users, customers, price] = await Promise.all([
          axios.get("http://localhost:5000/api/total/bookings"),
          axios.get("http://localhost:5000/api/total/users"),
          axios.get("http://localhost:5000/api/total/customers"),
          axios.get("http://localhost:5000/api/total/price"),
        ]);
        setBookings(bookings.data.total || 0);
        setUsers(users.data.total || 0);
        setCustomers(customers.data.total || 0);
        setTotalBookingPrice(price.data.totalPrice || 0);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  const bookingChartData = {
    labels: ["Bookings", "Available"],
    datasets: [
      {
        data: [getAllbookings, 100 - getAllbookings],
        backgroundColor: ["#2563EB", "#E5E7EB"],
        borderColor: "#fff",
        borderWidth: 1,
        hoverOffset: 6,
      },
    ],
  };

  const userChartData = {
    labels: ["Users", "Available"],
    datasets: [
      {
        data: [getAllUsers, 100 - getAllUsers],
        backgroundColor: ["#9333EA", "#D8BFD8"],
        borderColor: "#fff",
        borderWidth: 1,
        hoverOffset: 6,
      },
    ],
  };

  const customerChartData = {
    labels: ["Customers", "Available"],
    datasets: [
      {
        data: [getAllCustomers, 100 - getAllCustomers],
        backgroundColor: ["#F97316", "#FDE68A"],
        borderColor: "#fff",
        borderWidth: 1,
        hoverOffset: 6,
      },
    ],
  };

  const revenueChartData = {
    labels: ["Total Revenue ($)", "Remaining Goal"],
    datasets: [
      {
        data: [totalBookingPrice, 100000 - totalBookingPrice],
        backgroundColor: ["#FFD700", "#E5E7EB"],
        borderColor: "#fff",
        borderWidth: 1,
        hoverOffset: 6,
      },
    ],
  };

  return (
    <>
      <SideNav />

      {/* Stats Section */}
      <div className="pt-20 px-4 md:ml-[22%] flex flex-wrap gap-6 justify-center">
        {/* Booking Box */}
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg flex items-center gap-4 w-full md:w-[250px]">
          <FaBox className="text-4xl" />
          <div>
            <h3 className="text-xl font-semibold">
              <Link to="/bookingList">Booking</Link>
            </h3>
            <p className="text-lg">{getAllbookings}</p>
          </div>
        </div>

        {/* Users Box */}
        <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg flex items-center gap-4 w-full md:w-[250px]">
          <FaUsers className="text-4xl" />
          <div>
            <h3 className="text-xl font-semibold">Users Overview</h3>
            <p className="text-lg">{getAllUsers}</p>
          </div>
        </div>

        {/* Customers Box */}
        <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg flex items-center gap-4 w-full md:w-[250px]">
          <FaUserShield className="text-4xl" />
          <div>
            <Link to="/displayCustomer">
              <h3 className="text-xl font-semibold">Customers</h3>
            </Link>
            <p className="text-lg">{getAllCustomers}</p>
          </div>
        </div>

        {/* Revenue Box */}
        <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg flex items-center gap-4 w-full md:w-[250px]">
          <FaDollarSign className="text-4xl" />
          <div>
            <h3 className="text-xl font-semibold">Total Revenue</h3>
            <p className="text-lg">${totalBookingPrice.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="mt-10 px-4 md:ml-[22%] flex flex-wrap gap-6 justify-center">
        {/* Booking Chart */}
        <div className="p-6 w-full md:max-w-[250px] bg-white shadow-lg rounded-lg flex flex-col items-center">
          <h2 className="text-lg font-bold text-gray-800 mb-3">
            Booking Overview
          </h2>
          <Pie data={bookingChartData} />
        </div>

        {/* Users Chart */}
        <div className="p-6 w-full md:max-w-[250px] bg-white shadow-lg rounded-lg flex flex-col items-center">
          <h2 className="text-lg font-bold text-gray-800 mb-3">
            Users Overview
          </h2>
          <Pie data={userChartData} />
        </div>

        {/* Customers Chart */}
        <div className="p-6 w-full md:max-w-[250px] bg-white shadow-lg rounded-lg flex flex-col items-center">
          <h2 className="text-lg font-bold text-gray-800 mb-3">
            Customers Overview
          </h2>
          <Pie data={customerChartData} />
        </div>

        {/* Revenue Chart */}
        <div className="p-6 w-full md:max-w-[250px] bg-white shadow-lg rounded-lg flex flex-col items-center">
          <h2 className="text-lg font-bold text-gray-800 mb-3">
            Revenue Overview
          </h2>
          <Pie data={revenueChartData} />
        </div>
      </div>
    </>
  );
}

export default Dashboard;

import React from "react";
import { FaBox, FaUsers, FaShoppingCart, FaUserShield } from "react-icons/fa";
import SideNav from "../Sidenav/Sidenav";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <SideNav />
      {/* Four Stat Boxes */}
      <div className="ml-[22%] pt-20 flex gap-6  ">
        {/* Products Box */}
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg flex items-center gap-4 w-[250px]">
          <FaBox className="text-4xl" />
          <div>
            <h3 className="text-xl font-semibold">
              <Link to="/bookingList">Booking</Link>{" "}
            </h3>
            <p className="text-lg">120</p>
          </div>
        </div>

        {/* Customers Box */}
        <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg flex items-center gap-4 w-[250px]">
          <FaUsers className="text-4xl" />
          <div>
            <h3 className="text-xl font-semibold">Customers</h3>
            <p className="text-lg">350</p>
          </div>
        </div>

        {/* Orders Box */}
        <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg flex items-center gap-4 w-[250px]">
          <FaShoppingCart className="text-4xl" />
          <div>
            <h3 className="text-xl font-semibold">Orders</h3>
            <p className="text-lg">75</p>
          </div>
        </div>

        {/* Users Box */}
        <div className="bg-purple-500 text-white p-6 rounded-lg shadow-lg flex items-center gap-4 w-[250px]">
          <FaUserShield className="text-4xl" />
          <div>
            <h3 className="text-xl font-semibold">Users</h3>
            <p className="text-lg">50</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

// import React, { useEffect, useState } from "react";
// import { FaBox, FaUsers, FaShoppingCart, FaUserShield } from "react-icons/fa";
// import SideNav from "../Sidenav/Sidenav";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// function Dashboard() {
//   const [bookingCount, setBookingCount] = useState(0);
//   const [customerCount, setCustomerCount] = useState(0);
//   const [orderCount, setOrderCount] = useState(0);
//   const [userCount, setUserCount] = useState(0);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/bookings/count")
//       .then((response) => setBookingCount(response.data.count));
//     axios
//       .get("http://localhost:5000/api/customers/count")
//       .then((response) => setCustomerCount(response.data.count));
//     axios
//       .get("http://localhost:5000/api/orders/count")
//       .then((response) => setOrderCount(response.data.count));
//     axios
//       .get("http://localhost:5000/api/users/count")
//       .then((response) => setUserCount(response.data.count));
//   }, []);

//   const data = {
//     labels: ["Bookings", "Customers", "Orders", "Users"],
//     datasets: [
//       {
//         label: "Dashboard Overview",
//         data: [bookingCount, customerCount, orderCount, userCount],
//         backgroundColor: ["#3b82f6", "#10b981", "#ef4444", "#9333ea"],
//       },
//     ],
//   };

//   return (
//     <>
//       <SideNav />
//       <div className="ml-[22%] pt-20 flex gap-6 flex-wrap">
//         {/* Booking Box */}
//         <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg flex items-center gap-4 w-[250px]">
//           <FaBox className="text-4xl" />
//           <div>
//             <h3 className="text-xl font-semibold">
//               <Link to="/bookingList">Booking</Link>
//             </h3>
//             <p className="text-lg">{bookingCount}</p>
//           </div>
//         </div>

//         {/* Customers Box */}
//         <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg flex items-center gap-4 w-[250px]">
//           <FaUsers className="text-4xl" />
//           <div>
//             <h3 className="text-xl font-semibold">Customers</h3>
//             <p className="text-lg">{customerCount}</p>
//           </div>
//         </div>

//         {/* Orders Box */}
//         <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg flex items-center gap-4 w-[250px]">
//           <FaShoppingCart className="text-4xl" />
//           <div>
//             <h3 className="text-xl font-semibold">Orders</h3>
//             <p className="text-lg">{orderCount}</p>
//           </div>
//         </div>

//         {/* Users Box */}
//         <div className="bg-purple-500 text-white p-6 rounded-lg shadow-lg flex items-center gap-4 w-[250px]">
//           <FaUserShield className="text-4xl" />
//           <div>
//             <h3 className="text-xl font-semibold">Users</h3>
//             <p className="text-lg">{userCount}</p>
//           </div>
//         </div>
//       </div>
//       {/* Chart Section */}
//       <div className="ml-[22%] mt-10 p-6 w-full max-w-4xl bg-white shadow-lg rounded-lg">
//         <h2 className="text-2xl font-bold text-gray-700 mb-4">
//           Dashboard Overview
//         </h2>
//         <Bar data={data} />
//       </div>
//     </>
//   );
// }

// export default Dashboard;

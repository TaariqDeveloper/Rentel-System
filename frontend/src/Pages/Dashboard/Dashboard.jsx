// import React, { useEffect, useState } from "react";
// import { FaBox, FaUsers, FaShoppingCart, FaUserShield } from "react-icons/fa";
// import SideNav from "../Sidenav/Sidenav";
// import { Link } from "react-router-dom";
// import axios from "axios";

// function Dashboard() {
//   const [getAllbookings, setbookings] = useState([]);

//   const HandleAllBookings = () => {
//     axios
//       .get("http://localhost:5000/api/total/bookings")
//       .then((res) => {
//         setbookings(res.data.total);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   useEffect(() => {
//     HandleAllBookings();
//   }, []);
//   return (
//     <>
//       <SideNav />
//       {/* Four Stat Boxes */}
//       <div className="ml-[22%] pt-20 flex gap-6  ">
//         {/* Products Box */}
//         <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg flex items-center gap-4 w-[250px]">
//           <FaBox className="text-4xl" />
//           <div>
//             <h3 className="text-xl font-semibold">
//               <Link to="/bookingList">Booking</Link>{" "}
//             </h3>
//             <p className="text-lg">
//               {" "}
//               {getAllbookings > 0 ? getAllbookings : 0}
//             </p>
//           </div>
//         </div>

//         {/* Customers Box */}
//         <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg flex items-center gap-4 w-[250px]">
//           <FaUsers className="text-4xl" />
//           <div>
//             <h3 className="text-xl font-semibold">Customers</h3>
//             <p className="text-lg">350</p>
//           </div>
//         </div>

//         {/* Orders Box */}
//         <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg flex items-center gap-4 w-[250px]">
//           <FaShoppingCart className="text-4xl" />
//           <div>
//             <h3 className="text-xl font-semibold">Orders</h3>
//             <p className="text-lg">75</p>
//           </div>
//         </div>

//         {/* Users Box */}
//         <div className="bg-purple-500 text-white p-6 rounded-lg shadow-lg flex items-center gap-4 w-[250px]">
//           <FaUserShield className="text-4xl" />
//           <div>
//             <h3 className="text-xl font-semibold">Users</h3>
//             <p className="text-lg">50</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Dashboard;

import React, { useEffect, useState } from "react";
import { FaBox, FaUsers, FaShoppingCart, FaUserShield } from "react-icons/fa";
import SideNav from "../Sidenav/Sidenav";
import { Link } from "react-router-dom";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

function Dashboard() {
  const [totalBookings, setTotalBookings] = useState(0);

  // Fetch total bookings
  const fetchTotalBookings = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/total/bookings"
      );
      if (response.data && typeof response.data.total === "number") {
        setTotalBookings(response.data.total);
      } else {
        console.error("Unexpected API response:", response.data);
      }
    } catch (error) {
      console.error("Error fetching booking data:", error);
    }
  };

  // Fetch bookings initially and update every 5 seconds
  useEffect(() => {
    fetchTotalBookings();
    const interval = setInterval(fetchTotalBookings, 5000);
    return () => clearInterval(interval);
  }, []);

  // Pie Chart Data with Improved Colors
  const pieData = {
    labels: ["Bookings", "Available"],
    datasets: [
      {
        data: [totalBookings, 100 - totalBookings], // Show ratio of bookings
        backgroundColor: ["#2563EB", "#E5E7EB"], // Deep blue & light gray
        borderWidth: 1,
        borderColor: "#ffffff",
        hoverOffset: 6,
      },
    ],
  };

  return (
    <>
      <SideNav />
      <div className="ml-[22%] pt-20 flex gap-6 flex-wrap">
        {/* Booking Box */}
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md flex items-center gap-4 w-[250px]">
          <FaBox className="text-4xl" />
          <div>
            <h3 className="text-xl font-semibold">
              <Link to="/bookingList">Booking</Link>
            </h3>
            <p className="text-lg">{totalBookings}</p>
          </div>
        </div>

        {/* Customers Box */}
        <div className="bg-green-500 text-white p-6 rounded-lg shadow-md flex items-center gap-4 w-[250px]">
          <FaUsers className="text-4xl" />
          <div>
            <h3 className="text-xl font-semibold">Customers</h3>
            <p className="text-lg">350</p>
          </div>
        </div>

        {/* Orders Box */}
        <div className="bg-red-500 text-white p-6 rounded-lg shadow-md flex items-center gap-4 w-[250px]">
          <FaShoppingCart className="text-4xl" />
          <div>
            <h3 className="text-xl font-semibold">Orders</h3>
            <p className="text-lg">75</p>
          </div>
        </div>

        {/* Users Box */}
        <div className="bg-purple-500 text-white p-6 rounded-lg shadow-md flex items-center gap-4 w-[250px]">
          <FaUserShield className="text-4xl" />
          <div>
            <h3 className="text-xl font-semibold">Users</h3>
            <p className="text-lg">50</p>
          </div>
        </div>
      </div>

      {/* Small Pie Chart Section */}
      <div className="ml-[22%] mt-10 p-6 w-full max-w-[280px] bg-gray-100 shadow-md rounded-lg flex flex-col items-center">
        <h2 className="text-lg font-bold text-gray-800 mb-3">
          Booking Overview
        </h2>
        <Pie data={pieData} />
      </div>
    </>
  );
}

export default Dashboard;

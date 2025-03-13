import React from "react";
import { FaBox, FaUsers, FaShoppingCart, FaUserShield } from "react-icons/fa";
import SideNav from "../Sidenav/Sidenav";

function Dashboard() {
  return (
    <>
      <SideNav  />
      {/* Four Stat Boxes */}
      <div className="ml-[22%] pt-20 flex gap-6  ">
        {/* Products Box */}
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg flex items-center gap-4 w-[250px]">
          <FaBox className="text-4xl" />
          <div>
            <h3 className="text-xl font-semibold">Products</h3>
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

// import React from "react";
// import Home from "./Pages/Home/Home";
// import { Route, Routes } from "react-router-dom";
// import About from "./Pages/About";
// import Service from "./Pages/Service";
// import ContactForm from "./Pages/Contect/ContactForm";
// import Signup from "./Pages/Signup/Signup";
// import Dashboard from "./Pages/Dashboard/Dashboard";
// import Login from "./Pages/Login/Login";
// // import UserList from "./Pages/userList/UserList";
// import UserList from "./Pages/userList/UserList";
// import Booking from "./Pages/Booking/Booking";
// import BookingList from "./Pages/BookingList/BookingList";
// import UpdateBooking from "./Pages/UpdateBooking/UpdateBooking";
// import AddCustomer from "./Pages/AddCustomer/AddCustomer";
// import OrdersPage from "./Pages/OrdersPage/OrdersPage";
// import CustomerDisplay from "./Pages/CustomerDisplay/CustomerDisplay";

// function App() {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/service" element={<Service />} />
//         <Route path="/ContactForm" element={<ContactForm />} />
//         <Route path="/booking" element={<Booking />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/register" element={<Signup />} />
//         <Route path="/Login" element={<Login />} />
//         <Route path="/UserList" element={<UserList />} />
//         <Route path="/booking" element={<Booking />} />
//         <Route path="/bookingList" element={<BookingList />} />
//         <Route path="/update-booking/:id" element={<UpdateBooking />} />
//         <Route path="/addCustomer" element={<AddCustomer />} />
//         <Route path="/order" element={<OrdersPage />} />
//         <Route path="/displayCustomer" element={<CustomerDisplay />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { FaEdit, FaTrash } from "react-icons/fa";

import SideNav from "./Pages/Sidenav/Sidenav";

function CustomerDisplay() {
  const [customers, setCustomers] = useState([]);
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/customers");
      setCustomers(response.data);
    } catch (error) {
      toast.error("Failed to fetch customers.", { position: "top-right" });
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/customers/${id}`);
      toast.success("Customer deleted successfully!", {
        position: "top-right",
      });
      setCustomers(customers.filter((customer) => customer._id !== id));
    } catch (error) {
      toast.error("Failed to delete customer.", { position: "top-right" });
    }
  };

  const handleEdit = (customer) => {
    setEditingCustomer(customer);
    setShowPopup(true);
  };

  const handleUpdate = async () => {
    try {
      await axios.put(
        `http://localhost:5000/api/customers/${editingCustomer._id}`,
        editingCustomer
      );
      toast.success("Customer updated successfully!", {
        position: "top-right",
      });
      setShowPopup(false);
      setEditingCustomer(null);
      fetchCustomers();
    } catch (error) {
      toast.error("Failed to update customer.", { position: "top-right" });
    }
  };

  return (
    <>
      <SideNav />
      <div className="container mx-auto p-6">
        <ToastContainer />

        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Customer List
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="p-3 border">Image</th>
                <th className="p-3 border">Name</th>
                <th className="p-3 border">Email</th>
                <th className="p-3 border">Phone</th>
                <th className="p-3 border">Address</th>
                <th className="p-3 border">Gender</th>
                <th className="p-3 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <motion.tr
                  key={customer._id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center border hover:bg-gray-100"
                >
                  <td className="p-3 border">
                    <img
                      src={
                        customer.image
                          ? `http://localhost:5000/document/${customer.image}`
                          : "https://via.placeholder.com/50"
                      }
                      alt="customer"
                      className="w-12 h-12 rounded-full mx-auto"
                    />
                  </td>
                  <td className="p-3 border">{customer.name}</td>
                  <td className="p-3 border">{customer.email}</td>
                  <td className="p-3 border">{customer.phone}</td>
                  <td className="p-3 border">{customer.address}</td>
                  <td className="p-3 border">{customer.gender}</td>
                  <td className="p-3 border flex justify-center space-x-2">
                    <button
                      onClick={() => handleEdit(customer)}
                      className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(customer._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-md shadow-md w-1/3">
              <h2 className="text-2xl font-bold mb-4">Edit Customer</h2>
              <input
                type="text"
                value={editingCustomer.name}
                onChange={(e) =>
                  setEditingCustomer({
                    ...editingCustomer,
                    name: e.target.value,
                  })
                }
                className="w-full p-2 border rounded-md mb-2"
                placeholder="Name"
              />
              <input
                type="email"
                value={editingCustomer.email}
                onChange={(e) =>
                  setEditingCustomer({
                    ...editingCustomer,
                    email: e.target.value,
                  })
                }
                className="w-full p-2 border rounded-md mb-2"
                placeholder="Email"
              />
              <input
                type="text"
                value={editingCustomer.phone}
                onChange={(e) =>
                  setEditingCustomer({
                    ...editingCustomer,
                    phone: e.target.value,
                  })
                }
                className="w-full p-2 border rounded-md mb-2"
                placeholder="Phone"
              />
              <input
                type="text"
                value={editingCustomer.address}
                onChange={(e) =>
                  setEditingCustomer({
                    ...editingCustomer,
                    address: e.target.value,
                  })
                }
                className="w-full p-2 border rounded-md mb-2"
                placeholder="Address"
              />
              <select
                value={editingCustomer.gender}
                onChange={(e) =>
                  setEditingCustomer({
                    ...editingCustomer,
                    gender: e.target.value,
                  })
                }
                className="w-full p-2 border rounded-md mb-2"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <div className="flex justify-end space-x-2 mt-4">
                <button
                  onClick={() => setShowPopup(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdate}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CustomerDisplay;

import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import Header from "../../components/Header/Header";

function AddCustomer() {
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    gender: "",
    image: null,
  });

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setCustomer({ ...customer, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(customer).forEach((key) => {
      formData.append(key, customer[key]);
    });

    try {
      await axios.post("http://localhost:5000/api/customers", formData);
      toast.success("Customer added successfully!", { position: "top-right" });
      setCustomer({
        name: "",
        email: "",
        phone: "",
        address: "",
        gender: "",
        image: null,
      });
    } catch (error) {
      toast.error("Failed to add customer.", { position: "top-right" });
    }
  };

  return (
    <>
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <ToastContainer />
        <motion.div
          className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
            Add Customer
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-600 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  value={customer.name}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={customer.email}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-600 font-medium">Phone</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter Phone"
                  value={customer.phone}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter Address"
                  value={customer.address}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-600 font-medium">Gender</label>
              <select
                name="gender"
                value={customer.gender}
                onChange={handleChange}
                required
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-600 font-medium">
                Upload Image
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>

            <motion.button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </div>
    </>
  );
}

export default AddCustomer;

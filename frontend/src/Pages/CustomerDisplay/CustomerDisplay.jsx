// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { motion } from "framer-motion";
// import { FaEdit, FaTrash, FaSearch } from "react-icons/fa";
// import SideNav from "../Sidenav/Sidenav";

// function CustomerDisplay() {
//   const [customers, setCustomers] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [editingCustomer, setEditingCustomer] = useState(null);
//   const [showPopup, setShowPopup] = useState(false);
//   const [selectedFile, setSelectedFile] = useState(null);

//   useEffect(() => {
//     fetchCustomers();
//   }, []);

//   const fetchCustomers = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/customers");
//       setCustomers(response.data);
//     } catch (error) {
//       toast.error("Failed to fetch customers.", { position: "top-right" });
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/customers/${id}`);
//       toast.success("Customer deleted successfully!", {
//         position: "top-right",
//       });
//       setCustomers(customers.filter((customer) => customer._id !== id));
//     } catch (error) {
//       toast.error("Failed to delete customer.", { position: "top-right" });
//     }
//   };

//   const handleEdit = (customer) => {
//     setEditingCustomer({ ...customer });
//     setShowPopup(true);
//   };

//   const handleUpdate = async () => {
//     try {
//       const formData = new FormData();
//       formData.append("name", editingCustomer.name);
//       formData.append("email", editingCustomer.email);
//       formData.append("phone", editingCustomer.phone);
//       formData.append("address", editingCustomer.address);
//       formData.append("gender", editingCustomer.gender);

//       if (selectedFile) {
//         formData.append("image", selectedFile);
//       }

//       await axios.put(
//         `http://localhost:5000/api/customers/${editingCustomer._id}`,
//         formData,
//         { headers: { "Content-Type": "multipart/form-data" } }
//       );

//       toast.success("Customer updated successfully!", {
//         position: "top-right",
//       });

//       setCustomers((prev) =>
//         prev.map((cust) =>
//           cust._id === editingCustomer._id
//             ? {
//                 ...editingCustomer,
//                 image: selectedFile
//                   ? URL.createObjectURL(selectedFile)
//                   : editingCustomer.image,
//               }
//             : cust
//         )
//       );

//       setShowPopup(false);
//       setEditingCustomer(null);
//       setSelectedFile(null);
//     } catch (error) {
//       toast.error("Failed to update customer.", { position: "top-right" });
//     }
//   };

//   // 🔍 Search Filter (Matches Name, Email, Phone, Address, Gender)
//   const filteredCustomers = customers.filter((customer) =>
//     Object.values(customer).some(
//       (value) =>
//         typeof value === "string" &&
//         value.toLowerCase().includes(searchQuery.toLowerCase())
//     )
//   );

//   return (
//     <>
//       <SideNav />
//       <div className="container mx-auto p-6 ml-[15%]">
//         <ToastContainer />

//         <motion.h2
//           className="text-3xl font-bold text-center text-blue-600 mb-6"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           Customer List
//         </motion.h2>

//         {/* 🔍 Search Input */}
//         <div className="flex ml-[70%] mb-4">
//           <div className="relative w-full max-w-md">
//             <input
//               type="text"
//               placeholder="Search customers..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full p-3 pl-10 border rounded-md"
//             />
//             <FaSearch className="absolute left-3 top-3 text-gray-500 text-lg" />
//           </div>
//         </div>

//         <motion.div className="overflow-x-auto">
//           <table className="w-full border-collapse border border-gray-300 shadow-lg">
//             <thead>
//               <tr className="bg-blue-500 text-white">
//                 <th className="p-3 border">Image</th>
//                 <th className="p-3 border">Name</th>
//                 <th className="p-3 border">Email</th>
//                 <th className="p-3 border">Phone</th>
//                 <th className="p-3 border">Address</th>
//                 <th className="p-3 border">Gender</th>
//                 <th className="p-3 border">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredCustomers.map((customer) => (
//                 <motion.tr
//                   key={customer._id}
//                   className="text-center border"
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <td className="p-3 border">
//                     <img
//                       src={
//                         customer.image
//                           ? `http://localhost:5000/document/${customer.image}`
//                           : "https://via.placeholder.com/50"
//                       }
//                       alt="customer"
//                       className="w-12 h-12 rounded-full mx-auto shadow-md"
//                     />
//                   </td>
//                   <td className="p-3 border">{customer.name}</td>
//                   <td className="p-3 border">{customer.email}</td>
//                   <td className="p-3 border">{customer.phone}</td>
//                   <td className="p-3 border">{customer.address}</td>
//                   <td className="p-3 border">{customer.gender}</td>
//                   <td className="p-3 border flex justify-center space-x-2">
//                     <motion.button
//                       onClick={() => handleEdit(customer)}
//                       className="bg-green-500 text-white px-3 py-1 rounded-md"
//                     >
//                       <FaEdit />
//                     </motion.button>
//                     <motion.button
//                       onClick={() => handleDelete(customer._id)}
//                       className="bg-red-500 text-white px-3 py-1 rounded-md"
//                     >
//                       <FaTrash />
//                     </motion.button>
//                   </td>
//                 </motion.tr>
//               ))}
//             </tbody>
//           </table>
//         </motion.div>

//         {/* 📝 Edit Popup */}
//         {showPopup && editingCustomer && (
//           <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
//             <motion.div
//               className="bg-white p-6 rounded-lg shadow-lg w-96"
//               initial={{ scale: 0.8 }}
//               animate={{ scale: 1 }}
//             >
//               <h3 className="text-lg font-semibold mb-4">Edit Customer</h3>
//               <input
//                 type="text"
//                 value={editingCustomer.name}
//                 onChange={(e) =>
//                   setEditingCustomer({
//                     ...editingCustomer,
//                     name: e.target.value,
//                   })
//                 }
//                 className="w-full p-2 mb-2 border rounded"
//               />
//               <input
//                 type="email"
//                 value={editingCustomer.email}
//                 onChange={(e) =>
//                   setEditingCustomer({
//                     ...editingCustomer,
//                     email: e.target.value,
//                   })
//                 }
//                 className="w-full p-2 mb-2 border rounded"
//               />
//               <input
//                 type="text"
//                 value={editingCustomer.phone}
//                 onChange={(e) =>
//                   setEditingCustomer({
//                     ...editingCustomer,
//                     phone: e.target.value,
//                   })
//                 }
//                 className="w-full p-2 mb-2 border rounded"
//               />
//               <input
//                 type="text"
//                 value={editingCustomer.address}
//                 onChange={(e) =>
//                   setEditingCustomer({
//                     ...editingCustomer,
//                     address: e.target.value,
//                   })
//                 }
//                 className="w-full p-2 mb-2 border rounded"
//               />
//               <input
//                 type="file"
//                 onChange={(e) => setSelectedFile(e.target.files[0])}
//                 className="w-full p-2 mb-2 border rounded"
//               />
//               <button
//                 onClick={handleUpdate}
//                 className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
//               >
//                 Update
//               </button>
//               <button
//                 onClick={() => setShowPopup(false)}
//                 className="bg-gray-400 text-white px-4 py-2 rounded"
//               >
//                 Cancel
//               </button>
//             </motion.div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default CustomerDisplay;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { FaEdit, FaTrash, FaSearch } from "react-icons/fa";
import SideNav from "../Sidenav/Sidenav";

function CustomerDisplay() {
  const [customers, setCustomers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedGroup, setExpandedGroup] = useState(null); // Track expanded dropdown

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

  // 🔍 Filter customers based on search query
  const filteredCustomers = customers.filter((customer) =>
    Object.values(customer).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // 🔠 Group customers alphabetically by first letter of name
  const groupedCustomers = filteredCustomers.reduce((acc, customer) => {
    const firstLetter = customer.name.charAt(0).toUpperCase();
    acc[firstLetter] = acc[firstLetter] || [];
    acc[firstLetter].push(customer);
    return acc;
  }, {});

  return (
    <>
      <SideNav />
      <div className="container mx-auto p-6 ml-[15%]">
        <ToastContainer />

        <motion.h2
          className="text-3xl font-bold text-center text-blue-600 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          📋 Customer List
        </motion.h2>

        {/* 🔍 Search Input */}
        <div className="flex justify-end mb-4">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search customers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3 pl-10 border rounded-md"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-500 text-lg" />
          </div>
        </div>

        {/* No Data Found Message */}
        {Object.keys(groupedCustomers).length === 0 && searchQuery && (
          <p className="text-center text-red-500">No customers found</p>
        )}

        {/* Grouped Customer Dropdowns */}
        <div className="space-y-6">
          {Object.entries(groupedCustomers).map(([letter, letterCustomers]) => (
            <motion.div
              key={letter}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-white shadow-md rounded-lg p-4"
            >
              {/* Dropdown Header */}
              <div
                className="flex justify-between items-center cursor-pointer bg-gradient-to-r from-blue-400 to-green-400 text-white p-3 rounded-md"
                onClick={() =>
                  setExpandedGroup(expandedGroup === letter ? null : letter)
                }
              >
                <h3 className="text-lg font-semibold">
                  🔠 {letter} ({letterCustomers.length} Customers)
                </h3>
                <span className="text-xl">
                  {expandedGroup === letter ? "▲" : "▼"}
                </span>
              </div>

              {/* Dropdown Content */}
              {expandedGroup === letter && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.4 }}
                  className="p-4 border rounded-md mt-2 bg-gray-50 space-y-4"
                >
                  {letterCustomers.map((customer) => (
                    <div
                      key={customer._id}
                      className="border rounded-md p-4 bg-white shadow-md flex items-center"
                    >
                      <img
                        src={
                          customer.image
                            ? `http://localhost:5000/document/${customer.image}`
                            : "https://via.placeholder.com/50"
                        }
                        alt="customer"
                        className="w-12 h-12 rounded-full shadow-md mr-4"
                      />
                      <div className="flex-1">
                        <p className="text-gray-700">
                          <strong>Name:</strong> {customer.name}
                        </p>
                        <p className="text-gray-700">
                          <strong>Email:</strong> {customer.email}
                        </p>
                        <p className="text-gray-700">
                          <strong>Phone:</strong> {customer.phone}
                        </p>
                        <p className="text-gray-700">
                          <strong>Address:</strong> {customer.address}
                        </p>
                        <p className="text-gray-700">
                          <strong>Gender:</strong> {customer.gender}
                        </p>
                      </div>

                      <div className="flex space-x-2">
                        <motion.button
                          onClick={() => handleDelete(customer._id)}
                          className="text-white bg-red-500 px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-300 transform hover:scale-105"
                        >
                          <FaTrash />
                        </motion.button>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CustomerDisplay;

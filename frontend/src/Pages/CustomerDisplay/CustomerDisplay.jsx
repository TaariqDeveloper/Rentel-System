// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { motion } from "framer-motion";
// import { FaEdit, FaTrash } from "react-icons/fa";
// import SideNav from "../Sidenav/Sidenav";

// function CustomerDisplay() {
//   const [customers, setCustomers] = useState([]);
//   const [editingCustomer, setEditingCustomer] = useState(null);
//   const [showPopup, setShowPopup] = useState(false);

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
//     setEditingCustomer(customer);
//     setShowPopup(true);
//   };

//   const handleUpdate = async () => {
//     try {
//       await axios.put(
//         `http://localhost:5000/api/customers/${editingCustomer._id}`,
//         editingCustomer
//       );
//       toast.success("Customer updated successfully!", {
//         position: "top-right",
//       });
//       setShowPopup(false);
//       setEditingCustomer(null);
//       fetchCustomers();
//     } catch (error) {
//       toast.error("Failed to update customer.", { position: "top-right" });
//     }
//   };

//   return (
//     <>
//       <SideNav />
//       <div className="container mx-auto p-6 ml-[15%]">
//         <ToastContainer />

//         <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
//           Customer List
//         </h2>
//         <div className="overflow-x-auto">
//           <table className="w-full border-collapse border border-gray-300">
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
//               {customers.map((customer) => (
//                 <motion.tr
//                   key={customer._id}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.5 }}
//                   className="text-center border hover:bg-gray-100"
//                 >
//                   <td className="p-3 border">
//                     <img
//                       src={
//                         customer.image
//                           ? `http://localhost:5000/document/${customer.image}`
//                           : "https://via.placeholder.com/50"
//                       }
//                       alt="customer"
//                       className="w-12 h-12 rounded-full mx-auto"
//                     />
//                   </td>
//                   <td className="p-3 border">{customer.name}</td>
//                   <td className="p-3 border">{customer.email}</td>
//                   <td className="p-3 border">{customer.phone}</td>
//                   <td className="p-3 border">{customer.address}</td>
//                   <td className="p-3 border">{customer.gender}</td>
//                   <td className="p-3 border flex justify-center space-x-2">
//                     <button
//                       onClick={() => handleEdit(customer)}
//                       className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
//                     >
//                       <FaEdit />
//                     </button>
//                     <button
//                       onClick={() => handleDelete(customer._id)}
//                       className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
//                     >
//                       <FaTrash />
//                     </button>
//                   </td>
//                 </motion.tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {showPopup && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//             <div className="bg-white p-6 rounded-md shadow-md w-1/3">
//               <h2 className="text-2xl font-bold mb-4">Edit Customer</h2>
//               <input
//                 type="text"
//                 value={editingCustomer.name}
//                 onChange={(e) =>
//                   setEditingCustomer({
//                     ...editingCustomer,
//                     name: e.target.value,
//                   })
//                 }
//                 className="w-full p-2 border rounded-md mb-2"
//                 placeholder="Name"
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
//                 className="w-full p-2 border rounded-md mb-2"
//                 placeholder="Email"
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
//                 className="w-full p-2 border rounded-md mb-2"
//                 placeholder="Phone"
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
//                 className="w-full p-2 border rounded-md mb-2"
//                 placeholder="Address"
//               />
//               <select
//                 value={editingCustomer.gender}
//                 onChange={(e) =>
//                   setEditingCustomer({
//                     ...editingCustomer,
//                     gender: e.target.value,
//                   })
//                 }
//                 className="w-full p-2 border rounded-md mb-2"
//               >
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//               </select>
//               <div className="flex justify-end space-x-2 mt-4">
//                 <button
//                   onClick={() => setShowPopup(false)}
//                   className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={handleUpdate}
//                   className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//                 >
//                   Update
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default CustomerDisplay;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaEdit, FaTrash } from "react-icons/fa";
// import SideNav from "../Sidenav/Sidenav";

// function CustomerDisplay() {
//   const [customers, setCustomers] = useState([]);
//   const [editingCustomer, setEditingCustomer] = useState(null);
//   const [showPopup, setShowPopup] = useState(false);

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
//     setEditingCustomer(customer);
//     setShowPopup(true);
//   };

//   const handleUpdate = async () => {
//     try {
//       await axios.put(
//         `http://localhost:5000/api/customers/${editingCustomer._id}`,
//         editingCustomer
//       );
//       toast.success("Customer updated successfully!", {
//         position: "top-right",
//       });
//       setShowPopup(false);
//       setEditingCustomer(null);
//       fetchCustomers();
//     } catch (error) {
//       toast.error("Failed to update customer.", { position: "top-right" });
//     }
//   };

//   return (
//     <>
//       <SideNav />
//       <div className="container mx-auto p-6 ml-[15%]">
//         <ToastContainer />

//         <motion.h2
//           className="text-3xl font-bold text-center text-blue-600 mb-6"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           Customer List
//         </motion.h2>

//         <motion.div
//           className="overflow-x-auto"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//         >
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
//               {customers.map((customer) => (
//                 <motion.tr
//                   key={customer._id}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   whileHover={{ scale: 1.02 }}
//                   transition={{ duration: 0.3 }}
//                   className="text-center border hover:bg-gray-100 transition-transform"
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
//                       className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition-transform transform hover:scale-105"
//                       whileHover={{ scale: 1.1 }}
//                     >
//                       <FaEdit />
//                     </motion.button>
//                     <motion.button
//                       onClick={() => handleDelete(customer._id)}
//                       className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-transform transform hover:scale-105"
//                       whileHover={{ scale: 1.1 }}
//                     >
//                       <FaTrash />
//                     </motion.button>
//                   </td>
//                 </motion.tr>
//               ))}
//             </tbody>
//           </table>
//         </motion.div>

//         {/* Animated Edit Popup */}
//         <AnimatePresence>
//           {showPopup && (
//             <motion.div
//               className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             >
//               <motion.div
//                 className="bg-white p-6 rounded-md shadow-xl w-1/3"
//                 initial={{ scale: 0.8 }}
//                 animate={{ scale: 1 }}
//                 exit={{ scale: 0.8 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <h2 className="text-2xl font-bold mb-4">Edit Customer</h2>
//                 <input
//                   type="text"
//                   value={editingCustomer.name}
//                   onChange={(e) =>
//                     setEditingCustomer({
//                       ...editingCustomer,
//                       name: e.target.value,
//                     })
//                   }
//                   className="w-full p-2 border rounded-md mb-2"
//                   placeholder="Name"
//                 />
//                 <input
//                   type="email"
//                   value={editingCustomer.email}
//                   onChange={(e) =>
//                     setEditingCustomer({
//                       ...editingCustomer,
//                       email: e.target.value,
//                     })
//                   }
//                   className="w-full p-2 border rounded-md mb-2"
//                   placeholder="Email"
//                 />
//                 <input
//                   type="text"
//                   value={editingCustomer.phone}
//                   onChange={(e) =>
//                     setEditingCustomer({
//                       ...editingCustomer,
//                       phone: e.target.value,
//                     })
//                   }
//                   className="w-full p-2 border rounded-md mb-2"
//                   placeholder="Phone"
//                 />
//                 <input
//                   type="text"
//                   value={editingCustomer.address}
//                   onChange={(e) =>
//                     setEditingCustomer({
//                       ...editingCustomer,
//                       address: e.target.value,
//                     })
//                   }
//                   className="w-full p-2 border rounded-md mb-2"
//                   placeholder="Address"
//                 />
//                 <select
//                   value={editingCustomer.gender}
//                   onChange={(e) =>
//                     setEditingCustomer({
//                       ...editingCustomer,
//                       gender: e.target.value,
//                     })
//                   }
//                   className="w-full p-2 border rounded-md mb-2"
//                 >
//                   <option value="Male">Male</option>
//                   <option value="Female">Female</option>
//                 </select>
//                 <div className="flex justify-end space-x-2 mt-4">
//                   <button
//                     onClick={() => setShowPopup(false)}
//                     className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     onClick={handleUpdate}
//                     className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//                   >
//                     Update
//                   </button>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </>
//   );
// }

// export default CustomerDisplay;

// this code is correct
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
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

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
    setEditingCustomer({ ...customer });
    setShowPopup(true);
  };

  const handleUpdate = async () => {
    try {
      const formData = new FormData();
      formData.append("name", editingCustomer.name);
      formData.append("email", editingCustomer.email);
      formData.append("phone", editingCustomer.phone);
      formData.append("address", editingCustomer.address);
      formData.append("gender", editingCustomer.gender);

      if (selectedFile) {
        formData.append("image", selectedFile);
      }

      await axios.put(
        `http://localhost:5000/api/customers/${editingCustomer._id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      toast.success("Customer updated successfully!", {
        position: "top-right",
      });

      // ✅ Update UI without refreshing
      setCustomers((prev) =>
        prev.map((cust) =>
          cust._id === editingCustomer._id
            ? {
                ...editingCustomer,
                image: selectedFile
                  ? URL.createObjectURL(selectedFile)
                  : editingCustomer.image,
              }
            : cust
        )
      );

      setShowPopup(false);
      setEditingCustomer(null);
      setSelectedFile(null);
    } catch (error) {
      toast.error("Failed to update customer.", { position: "top-right" });
    }
  };

  return (
    <>
      <SideNav />
      <div className="container mx-auto p-6 ml-[15%]">
        <ToastContainer />

        <motion.h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Customer List
        </motion.h2>

        {/* 🔍 Search Input */}
        <div className="flex justify-center mb-4">
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

        <motion.div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 shadow-lg">
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
                <motion.tr key={customer._id} className="text-center border">
                  <td className="p-3 border">
                    <img
                      src={
                        customer.image
                          ? `http://localhost:5000/document/${customer.image}`
                          : "https://via.placeholder.com/50"
                      }
                      alt="customer"
                      className="w-12 h-12 rounded-full mx-auto shadow-md"
                    />
                  </td>
                  <td className="p-3 border">{customer.name}</td>
                  <td className="p-3 border">{customer.email}</td>
                  <td className="p-3 border">{customer.phone}</td>
                  <td className="p-3 border">{customer.address}</td>
                  <td className="p-3 border">{customer.gender}</td>
                  <td className="p-3 border flex justify-center space-x-2">
                    <motion.button
                      onClick={() => handleEdit(customer)}
                      className="bg-green-500 text-white px-3 py-1 rounded-md"
                    >
                      <FaEdit />
                    </motion.button>
                    <motion.button
                      onClick={() => handleDelete(customer._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md"
                    >
                      <FaTrash />
                    </motion.button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* 📝 Edit Popup */}
        {showPopup && editingCustomer && (
          <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h3 className="text-lg font-semibold mb-4">Edit Customer</h3>
              <input
                type="text"
                value={editingCustomer.name}
                onChange={(e) =>
                  setEditingCustomer({
                    ...editingCustomer,
                    name: e.target.value,
                  })
                }
                className="w-full p-2 mb-2 border rounded"
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
                className="w-full p-2 mb-2 border rounded"
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
                className="w-full p-2 mb-2 border rounded"
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
                className="w-full p-2 mb-2 border rounded"
              />
              <select
                value={editingCustomer.gender}
                onChange={(e) =>
                  setEditingCustomer({
                    ...editingCustomer,
                    gender: e.target.value,
                  })
                }
                className="w-full p-2 mb-2 border rounded"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <input
                type="file"
                onChange={(e) => setSelectedFile(e.target.files[0])}
                className="w-full p-2 mb-2 border rounded"
              />
              <button
                onClick={handleUpdate}
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
              >
                Update
              </button>
              <button
                onClick={() => setShowPopup(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CustomerDisplay;

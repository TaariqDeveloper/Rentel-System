// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
// import SideNav from "../Sidenav/Sidenav";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { FaEdit, FaTrash, FaSearch } from "react-icons/fa";

// function UserList() {
//   const [users, setUsers] = useState([]);
//   const [filteredUsers, setFilteredUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [editUser, setEditUser] = useState(null);
//   const [newName, setNewName] = useState("");
//   const [newEmail, setNewEmail] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");

//   const isAdmin = JSON.parse(localStorage.getItem("user"))?.isAdmin || false;

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   useEffect(() => {
//     if (searchTerm === "") {
//       setFilteredUsers(users);
//     } else {
//       setFilteredUsers(
//         users.filter(
//           (user) =>
//             user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             user.email.toLowerCase().includes(searchTerm.toLowerCase())
//         )
//       );
//     }
//   }, [searchTerm, users]);

//   const fetchUsers = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get("http://localhost:5000/users", {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//       });
//       setUsers(response.data);
//       setError("");
//     } catch (err) {
//       setError("Failed to load users");
//       toast.error("Failed to load users!", { position: "top-right" });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!isAdmin) return toast.error("Access Denied! Only Admins can delete.");

//     if (window.confirm("Are you sure you want to delete this user?")) {
//       try {
//         await axios.delete(`http://localhost:5000/users/${id}`, {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         });
//         toast.success("User deleted successfully!", { position: "top-right" });
//         fetchUsers();
//       } catch (err) {
//         toast.error("Failed to delete user!", { position: "top-right" });
//       }
//     }
//   };

//   const handleEdit = (user) => {
//     setEditUser(user);
//     setNewName(user.name);
//     setNewEmail(user.email);
//   };

//   const handleUpdate = async () => {
//     if (!isAdmin) return toast.error("Access Denied! Only Admins can update.");

//     try {
//       await axios.put(
//         `http://localhost:5000/users/${editUser._id}`,
//         { name: newName, email: newEmail },
//         {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         }
//       );
//       setEditUser(null);
//       toast.success("User updated successfully!", { position: "top-right" });
//       fetchUsers();
//     } catch (err) {
//       toast.error("Failed to update user!", { position: "top-right" });
//     }
//   };

//   return (
//     <>
//       <SideNav />
//       <ToastContainer />
//       <div className="ml-[260px] p-6 min-h-screen bg-gray-100 pt-20">
//         <motion.div
//           className="bg-white shadow-lg rounded-lg p-6"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h2 className="text-2xl font-bold text-gray-700 mb-6">User List</h2>

//           {/* 🔍 Search Input with Animation */}
//           <motion.div
//             className="mb-4 flex justify-end"
//             initial={{ opacity: 0, x: 30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search by Name or Email"
//                 className="p-2 border border-gray-300 rounded-lg w-64 focus:ring-2 focus:ring-green-500 transition-all duration-300"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//               <FaSearch className="absolute right-3 top-3 text-gray-500 text-lg" />
//             </div>
//           </motion.div>

//           {loading ? (
//             <p className="text-center text-gray-600">Loading...</p>
//           ) : error ? (
//             <p className="text-center text-red-500">{error}</p>
//           ) : filteredUsers.length === 0 ? (
//             <p className="text-center text-red-500">No users found</p>
//           ) : (
//             <div className="overflow-x-auto">
//               <table className="w-full border-collapse border border-gray-300 shadow-md rounded-md">
//                 <thead>
//                   <tr className="bg-green-500 text-white">
//                     <th className="p-3 border">#</th>
//                     <th className="p-3 border">Name</th>
//                     <th className="p-3 border">Email</th>
//                     {isAdmin && <th className="p-3 border">Actions</th>}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredUsers.map((user, index) => (
//                     <motion.tr
//                       key={user._id}
//                       className="text-center border bg-gray-50 hover:bg-gray-100 transition duration-200"
//                       initial={{ opacity: 0, y: -10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <td className="p-3 border">{index + 1}</td>
//                       <td className="p-3 border">{user.name}</td>
//                       <td className="p-3 border">{user.email}</td>
//                       {isAdmin && (
//                         <td className="p-3 border flex justify-center space-x-2">
//                           <motion.button
//                             onClick={() => handleEdit(user)}
//                             className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105"
//                           >
//                             <FaEdit />
//                           </motion.button>
//                           <motion.button
//                             onClick={() => handleDelete(user._id)}
//                             className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300 transform hover:scale-105"
//                           >
//                             <FaTrash />
//                           </motion.button>
//                         </td>
//                       )}
//                     </motion.tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </motion.div>

//         {/* Edit User Modal */}
//         {editUser && (
//           <motion.div
//             className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//           >
//             <motion.div
//               className="bg-white p-6 rounded-lg shadow-lg w-96"
//               initial={{ scale: 0.8 }}
//               animate={{ scale: 1 }}
//             >
//               <h3 className="text-xl font-bold text-gray-700 mb-4">
//                 Edit User
//               </h3>
//               <input
//                 type="text"
//                 value={newName}
//                 onChange={(e) => setNewName(e.target.value)}
//                 className="w-full p-2 border rounded mb-3"
//               />
//               <input
//                 type="email"
//                 value={newEmail}
//                 onChange={(e) => setNewEmail(e.target.value)}
//                 className="w-full p-2 border rounded mb-3"
//               />
//               <div className="flex justify-end gap-3">
//                 <button
//                   onClick={() => setEditUser(null)}
//                   className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={handleUpdate}
//                   className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
//                 >
//                   Save
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </div>
//     </>
//   );
// }

// export default UserList;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import SideNav from "../Sidenav/Sidenav";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEdit, FaTrash, FaSearch } from "react-icons/fa";

function UserList() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editUser, setEditUser] = useState(null);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const isAdmin = JSON.parse(localStorage.getItem("user"))?.isAdmin || false;

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredUsers(users);
    } else {
      setFilteredUsers(
        users.filter(
          (user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, users]);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/users", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setUsers(res.data);
      setError("");
    } catch (err) {
      setError("Failed to load users");
      toast.error("Failed to load users!", { position: "top-right" });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!isAdmin) return toast.error("Access Denied! Only Admins can delete.");
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`http://localhost:5000/users/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        toast.success("User deleted successfully!", { position: "top-right" });
        fetchUsers();
      } catch (err) {
        toast.error("Failed to delete user!", { position: "top-right" });
      }
    }
  };

  const handleEdit = (user) => {
    setEditUser(user);
    setNewName(user.name);
    setNewEmail(user.email);
  };

  const handleUpdate = async () => {
    if (!isAdmin) return toast.error("Access Denied! Only Admins can update.");
    try {
      await axios.put(
        `http://localhost:5000/users/${editUser._id}`,
        { name: newName, email: newEmail },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setEditUser(null);
      toast.success("User updated successfully!", { position: "top-right" });
      fetchUsers();
    } catch (err) {
      toast.error("Failed to update user!", { position: "top-right" });
    }
  };

  return (
    <>
      <SideNav />
      <ToastContainer />
      <div className="p-4 pt-24 min-h-screen bg-gray-100 md:ml-[260px]">
        <motion.div
          className="bg-white shadow-lg rounded-lg p-4 sm:p-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-700 mb-6">User List</h2>

          {/* 🔍 Search */}
          <motion.div
            className="mb-4 flex justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full max-w-xs sm:max-w-sm">
              <input
                type="text"
                placeholder="Search by Name or Email"
                className="p-2 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-green-500 transition-all duration-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute right-3 top-3 text-gray-500 text-lg" />
            </div>
          </motion.div>

          {/* Table or Message */}
          {loading ? (
            <p className="text-center text-gray-600">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : filteredUsers.length === 0 ? (
            <p className="text-center text-red-500">No users found</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 text-sm md:text-base">
                <thead>
                  <tr className="bg-green-500 text-white text-left">
                    <th className="p-3 min-w-[50px]">#</th>
                    <th className="p-3 min-w-[150px]">Name</th>
                    <th className="p-3 min-w-[200px]">Email</th>
                    {isAdmin && <th className="p-3 min-w-[120px]">Actions</th>}
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user, index) => (
                    <motion.tr
                      key={user._id}
                      className="border-b bg-gray-50 hover:bg-gray-100 transition"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <td className="p-3">{index + 1}</td>
                      <td className="p-3">{user.name}</td>
                      <td className="p-3 break-words">{user.email}</td>
                      {isAdmin && (
                        <td className="p-3">
                          <div className="flex gap-2">
                            <motion.button
                              onClick={() => handleEdit(user)}
                              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                            >
                              <FaEdit />
                            </motion.button>
                            <motion.button
                              onClick={() => handleDelete(user._id)}
                              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                            >
                              <FaTrash />
                            </motion.button>
                          </div>
                        </td>
                      )}
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </motion.div>

        {/* Edit User Modal */}
        {editUser && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
            >
              <h3 className="text-xl font-bold mb-4">Edit User</h3>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="w-full p-2 border rounded mb-3"
              />
              <input
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className="w-full p-2 border rounded mb-3"
              />
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setEditUser(null)}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdate}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Save
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </>
  );
}

export default UserList;

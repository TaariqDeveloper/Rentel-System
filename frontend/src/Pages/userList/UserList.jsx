import React, { useState, useEffect } from "react";
import axios from "axios";
import SideNav from "../Sidenav/Sidenav";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editUser, setEditUser] = useState(null);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  // ✅ Get admin status from localStorage (stored after login)
  const isAdmin = JSON.parse(localStorage.getItem("user"))?.isAdmin || false;

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/users", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setUsers(response.data);
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
        fetchUsers(); // Refresh data
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
      fetchUsers(); // Refresh data after update
    } catch (err) {
      toast.error("Failed to update user!", { position: "top-right" });
    }
  };

  return (
    <>
      <SideNav />
      <ToastContainer />
      <div className="ml-[260px] p-6 min-h-screen bg-gray-100 pt-20">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-6">User List</h2>

          {loading ? (
            <p className="text-center text-gray-600">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 shadow-md rounded-md">
                <thead>
                  <tr className="bg-green-500 text-white">
                    <th className="border border-gray-300 px-6 py-3 text-left">
                      #
                    </th>
                    <th className="border border-gray-300 px-6 py-3 text-left">
                      Name
                    </th>
                    <th className="border border-gray-300 px-6 py-3 text-left">
                      Email
                    </th>
                    {isAdmin && (
                      <th className="border border-gray-300 px-6 py-3 text-center">
                        Actions
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr
                      key={user._id}
                      className="hover:bg-gray-200 transition duration-300"
                    >
                      <td className="border border-gray-300 px-6 py-3 text-center">
                        {index + 1}
                      </td>
                      <td className="border border-gray-300 px-6 py-3">
                        {user.name}
                      </td>
                      <td className="border border-gray-300 px-6 py-3">
                        {user.email}
                      </td>
                      {isAdmin && (
                        <td className="border border-gray-300 px-6 py-3 text-center">
                          <button
                            onClick={() => handleEdit(user)}
                            className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition mr-2"
                          >
                            Update
                          </button>
                          <button
                            onClick={() => handleDelete(user._id)}
                            className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                          >
                            Delete
                          </button>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {editUser && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h3 className="text-xl font-bold text-gray-700 mb-4">
                Edit User
              </h3>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Enter new name"
                className="w-full p-2 border border-gray-300 rounded mb-3"
              />
              <input
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                placeholder="Enter new email"
                className="w-full p-2 border border-gray-300 rounded mb-3"
              />
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setEditUser(null)}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdate}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default UserList;

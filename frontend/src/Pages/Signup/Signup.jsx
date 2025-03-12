import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const navigate = useNavigate();

  // create function for insertion
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name,
          email,
          password,
        }
      );
      if (response.data.success) {
        navigate("/Login");
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-500
       bg-[#0a1636] shadow-xl text-white">
      <div className="bg-gradient-to-r from-green-500
       bg-[#0a1636]  shadow-lg rounded-lg p-8 w-full max-w-md ">
        <h2 className="text-2xl font-bold text-center  mb-6">
          Signup
        </h2>

        {/* Use onSubmit instead of onClick */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block  font-medium">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter Name"
              required
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block  font-medium">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter Email"
              required
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block  font-medium"
            >
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="******"
              required
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit" // Submit action for the form
            className="w-full bg-yellow-500 text-white py-3 rounded-md
             hover:bg-yellow-500  transition duration-300"
          >
            Signup
          </button>
        </form>

        <p className="text-center  text-yellow-500 mt-4">
          Already have an account?{" "}
          <Link to="/Login">
            <a href="#" className="text-white hover:underline text-lg">
              Login
            </a>
          </Link>
        </p>
        <hr className="bg-gradient-to-r from-green-500
       bg-[#0a1636] shadow-xl mt-5"/>
      </div>
    </div>
  );
}

export default Signup;

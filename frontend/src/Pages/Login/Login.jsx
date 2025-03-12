import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const navigate = useNavigate();

  // create function for insertion
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/Login",
        {
          email,
          password,
        }
      );
      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen 
    bg-gradient-to-r from-green-500
       bg-[#0a1636] shadow-xl">
      <div className="bg-gradient-to-r from-green-500
       bg-[#0a1636] shadow-xl rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Login
        </h2>

        {/* Use onSubmit instead of onClick */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="relative">
            <label htmlFor="email" className="block text-white font-medium">
              Email
            </label>
            <i class="fa-solid fa-envelope absolute text-xl
             text-gray-400 top-[50px] transform -translate-y-1/2 left-3 mt-1"></i>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter Email"
              required
              className="w-full mt-1 py-3 p-4 px-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="password"
              className="block text-white font-medium"
            >
              Password
            </label>
            <i className="fa-solid fa-unlock absolute text-gray-400 top-[50px] transform -translate-y-1/2 left-3"></i>
            <input 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="******"
              required
              className="  w-full mt-1 p-3 px-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit" // Submit action for the form
            className="w-full bg-yellow-500 text-white py-3 rounded-md
             hover:bg-yellow-500 transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-center text-white mt-4">
          don't have an account?{" "}
          <Link to="/register">
            <a href="#" className="text-yellow-500 hover:underline text-lg">
              Register
            </a>
          </Link>
        </p>
        <hr className="bg-gradient-to-r from-green-500
       bg-[#0a1636] shadow-xl mt-5"/>
      </div>
    </div>
  );
}

export default Login;

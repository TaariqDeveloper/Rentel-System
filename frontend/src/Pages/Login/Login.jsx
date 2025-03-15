// import React, { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../../components/context/ContextProvide";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   // i will removed
//   const { login } = useAuth();
//   // const navigate = useNavigate();

//   // create function for insertion
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/auth/Login",
//         {
//           email,
//           password,
//         }
//       );
//       if (response.data.success) {
//         login(response.data.user);
//         localStorage.setItem("token", response.data.token);
//         navigate("/dashboard");
//       }
//       console.log(response);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
//           Login
//         </h2>

//         {/* Use onSubmit instead of onClick */}
//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="email" className="block text-gray-600 font-medium">
//               Email
//             </label>
//             <input
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               type="email"
//               placeholder="Enter Email"
//               required
//               className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="password"
//               className="block text-gray-600 font-medium"
//             >
//               Password
//             </label>
//             <input
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               type="password"
//               placeholder="******"
//               required
//               className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit" // Submit action for the form
//             className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300"
//           >
//             Signup
//           </button>
//         </form>

//         <p className="text-center text-gray-500 mt-4">
//           don't have an account?{" "}
//           <Link to="/register">
//             <a href="#" className="text-blue-500 hover:underline">
//               Register
//             </a>
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;

// sabirin code keda wye

// import React, { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// <<<<<<< HEAD
// import { useAuth } from "../../components/context/ContextProvide";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
// =======
//   // import imge from "../images/p-1-png"
// >>>>>>> 126bf3f93a6856a9f6c9e8fd394822b1aa3212a7

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/auth/login",
//         { email, password }
//       );

//       if (response.data.success) {
//         toast.success("Login successful!", { position: "top-right" });
//         login(response.data.user);
//         localStorage.setItem("token", response.data.token);
//         setTimeout(() => navigate("/dashboard"), 2000); // Redirect after success
//       }
//     } catch (error) {
//       toast.error("Invalid email or password. Try again!", {
//         position: "top-right",
//       });
//     }
//   };

//   return (
// <<<<<<< HEAD
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <ToastContainer /> {/* ✅ ToastContainer to show messages */}
//       <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
// =======
//     <div className="flex justify-center items-center min-h-screen
//     bg-gradient-to-r from-green-500
//        bg-[#0a1636] shadow-xl">
//           {/* <img src={imge}  alt="" /> */}
//       <div className="bg-gradient-to-r from-green-500
//        bg-[#0a1636] shadow-xl rounded-lg p-8 w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center text-white mb-6">
// >>>>>>> 126bf3f93a6856a9f6c9e8fd394822b1aa3212a7
//           Login
//         </h2>

//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <div className="relative">
//             <label htmlFor="email" className="block text-white font-medium">
//               Email
//             </label>
//             <i class="fa-solid fa-envelope absolute text-xl
//              text-gray-400 top-[50px] transform -translate-y-1/2 left-3 mt-1"></i>
//             <input
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               type="email"
//               placeholder="Enter Email"
//               required
//               className="w-full mt-1 py-3 p-4 px-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div className="relative">
//             <label
//               htmlFor="password"
//               className="block text-white font-medium"
//             >
//               Password
//             </label>
//             <i className="fa-solid fa-unlock absolute text-gray-400 top-[50px] transform -translate-y-1/2 left-3"></i>
//             <input
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               type="password"
//               placeholder="******"
//               required
//               className="  w-full mt-1 p-3 px-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Submit Button */}
//           <button
// <<<<<<< HEAD
//             type="submit"
//             className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300"
// =======
//             type="submit" // Submit action for the form
//             className="w-full bg-yellow-500 text-white py-3 rounded-md
//              hover:bg-yellow-500 transition duration-300"
// >>>>>>> 126bf3f93a6856a9f6c9e8fd394822b1aa3212a7
//           >
//             Login
//           </button>
//         </form>

// <<<<<<< HEAD
//         <p className="text-center text-gray-500 mt-4">
//           Don't have an account?{" "}
//           <Link to="/register" className="text-blue-500 hover:underline">
//             Register
// =======
//         <p className="text-center text-white mt-4">
//           don't have an account?{" "}
//           <Link to="/register">
//             <a href="#" className="text-yellow-500 hover:underline text-lg">
//               Register
//             </a>
// >>>>>>> 126bf3f93a6856a9f6c9e8fd394822b1aa3212a7
//           </Link>
//         </p>
//         <hr className="bg-gradient-to-r from-green-500
//        bg-[#0a1636] shadow-xl mt-5"/>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../components/context/ContextProvide";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
// import imge from "../images/p-1-png";  // Uncomment if needed

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );

      if (response.data.success) {
        toast.success("Login successful!", { position: "top-right" });
        login(response.data.user);
        localStorage.setItem("token", response.data.token);
        setTimeout(() => navigate("/dashboard"), 2000); // Redirect after success
      }
    } catch (error) {
      toast.error("Invalid email or password. Try again!", {
        position: "top-right",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen
     bg-gradient-to-r from-green-500 bg-[#0a1636] shadow-xl">
      
      <ToastContainer /> {/* ✅ Toast container for notifications */}
      <div className="bg-gradient-to-r from-green-500 bg-[#0a1636] shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Login
        </h2>

        <form className="space-y-4 " onSubmit={handleSubmit}>
          <div className="relative">
            <label htmlFor="email" className="block text-white font-medium">
              Email
            </label>
            <i className="fa-solid fa-envelope absolute text-xl text-gray-400 top-[50px] transform -translate-y-1/2 left-3 mt-1"></i>
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
              className="w-full mt-1 p-3 px-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-3 rounded-md
             hover:bg-yellow-500 transition duration-300 "
          >
            Login
          </button>
        </form>

        <p className="text-center text-white mt-4">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-yellow-500 hover:underline text-lg"
          >
            Register
          </Link>
        </p>
        <hr className="bg-gray-300 mt-5" />
      </div>
    </div>
  );
}

export default Login;

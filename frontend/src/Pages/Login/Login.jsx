// import React, { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../../components/context/ContextProvide";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
// // import imge from "../images/p-1-png";  // Uncomment if needed

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
//     <div className="flex justify-center items-center min-h-screen
//      bg-gradient-to-r from-green-500 bg-[#0a1636] shadow-xl">

//       <ToastContainer /> {/* ✅ Toast container for notifications */}
//       <div className="bg-gradient-to-r from-green-500 bg-[#0a1636] shadow-lg rounded-lg p-8 w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center text-white mb-6">
//           Login
//         </h2>

//         <form className="space-y-4 " onSubmit={handleSubmit}>
//           <div className="relative">
//             <label htmlFor="email" className="block text-white font-medium">
//               Email
//             </label>
//             <i className="fa-solid fa-envelope absolute text-xl text-gray-400 top-[50px] transform -translate-y-1/2 left-3 mt-1"></i>
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
//               className="w-full mt-1 p-3 px-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-yellow-500 text-white py-3 rounded-md
//              hover:bg-yellow-500 transition duration-300 "
//           >
//             Login
//           </button>
//         </form>

//         <p className="text-center text-white mt-4">
//           Don't have an account?{" "}
//           <Link
//             to="/register"
//             className="text-yellow-500 hover:underline text-lg"
//           >
//             Register
//           </Link>
//         </p>
//         <hr className="bg-gray-300 mt-5" />
//       </div>
//     </div>
//   );
// }

// export default Login;

// // import { useState } from "react";
// // import { useNavigate, useLocation } from "react-router-dom";
// // import { useAuth } from "../../components/context/ContextProvide";

// // const Login = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const { login } = useAuth();
// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   const handleLogin = (e) => {
// //     e.preventDefault();

// //     // Get stored user from localStorage
// //     const storedUser = JSON.parse(localStorage.getItem("user"));

// //     // Check if credentials match
// //     if (
// //       storedUser &&
// //       storedUser.email === email &&
// //       storedUser.password === password
// //     ) {
// //       login({ email });
// //       navigate(location.state?.from || "/dashboard", { replace: true });
// //     } else {
// //       alert("Invalid credentials! Please sign up first.");
// //     }
// //   };

// //   return (
// //     <div className="flex items-center justify-center min-h-screen bg-gray-100">
// //       <div className="bg-white p-6 rounded-lg shadow-lg">
// //         <h2 className="text-2xl font-bold mb-4">Login</h2>
// //         <form onSubmit={handleLogin}>
// //           <div className="mb-4">
// //             <label className="block text-gray-700">Email</label>
// //             <input
// //               type="email"
// //               className="w-full px-4 py-2 border rounded-md"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               required
// //             />
// //           </div>
// //           <div className="mb-4">
// //             <label className="block text-gray-700">Password</label>
// //             <input
// //               type="password"
// //               className="w-full px-4 py-2 border rounded-md"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               required
// //             />
// //           </div>
// //           <button
// //             type="submit"
// //             className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
// //           >
// //             Login
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;

// import React, { useState } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { useAuth } from "../../components/context/ContextProvide";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { login } = useAuth();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const storedUser = JSON.parse(localStorage.getItem("user"));

//       // Validate credentials from localStorage
//       if (
//         storedUser &&
//         storedUser.email === email &&
//         storedUser.password === password
//       ) {
//         toast.success("Login successful!", { position: "top-right" });
//         login(storedUser);
//         localStorage.setItem("token", "fake-token"); // Simulate authentication
//         setTimeout(() => navigate(location.state?.from || "/dashboard"), 2000);
//       } else {
//         toast.error("Invalid email or password. Try again!", {
//           position: "top-right",
//         });
//       }
//     } catch (error) {
//       toast.error("Login failed! Try again.", { position: "top-right" });
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-500 bg-[#0a1636] shadow-xl">
//       <ToastContainer />
//       <div className="bg-gradient-to-r from-green-500 bg-[#0a1636] shadow-lg rounded-lg p-8 w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center text-white mb-6">
//           Login
//         </h2>

//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <div className="relative">
//             <label htmlFor="email" className="block text-white font-medium">
//               Email
//             </label>
//             <input
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               type="email"
//               placeholder="Enter Email"
//               required
//               className="w-full mt-1 py-3 px-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div className="relative">
//             <label htmlFor="password" className="block text-white font-medium">
//               Password
//             </label>
//             <input
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               type="password"
//               placeholder="******"
//               required
//               className="w-full mt-1 p-3 px-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-yellow-500 text-white py-3 rounded-md hover:bg-yellow-500 transition duration-300"
//           >
//             Login
//           </button>
//         </form>

//         <p className="text-center text-white mt-4">
//           Don't have an account?{" "}
//           <Link
//             to="/register"
//             className="text-yellow-500 hover:underline text-lg"
//           >
//             Register
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useAuth } from "../../components/context/ContextProvide";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { login } = useAuth();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/auth/login",
//         {
//           email,
//           password,
//         }
//       );

//       if (response.data.success) {
//         toast.success("Login successful!", { position: "top-right" });
//         // Save token and user info
//         localStorage.setItem("token", response.data.token);
//         login(response.data.user);

//         // Redirect to dashboard
//         setTimeout(() => navigate(location.state?.from || "/dashboard"), 2000);
//       } else {
//         toast.error("Invalid email or password!", { position: "top-right" });
//       }
//     } catch (error) {
//       toast.error("Server error! Try again.", { position: "top-right" });
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-500 bg-[#0a1636] shadow-xl">
//       <ToastContainer /> {/* ✅ Toast for notifications */}
//       <div className="bg-gradient-to-r from-green-500 bg-[#0a1636] shadow-lg rounded-lg p-8 w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center text-white mb-6">
//           Login
//         </h2>

//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <div className="relative">
//             <label htmlFor="email" className="block text-white font-medium">
//               Email
//             </label>
//             <i className="fa-solid fa-envelope absolute text-xl text-gray-400 top-[50px] transform -translate-y-1/2 left-3 mt-1"></i>
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
//             <label htmlFor="password" className="block text-white font-medium">
//               Password
//             </label>
//             <i className="fa-solid fa-unlock absolute text-gray-400 top-[50px] transform -translate-y-1/2 left-3"></i>
//             <input
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               type="password"
//               placeholder="******"
//               required
//               className="w-full mt-1 p-3 px-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-yellow-500 text-white py-3 rounded-md hover:bg-yellow-500 transition duration-300"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../components/context/ContextProvide";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );

      if (response.data.success) {
        toast.success("Login successful!", { position: "top-right" });

        // ✅ Save user to localStorage (Fixes logout issue in Chrome)
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", response.data.token);
        login(response.data.user);

        // ✅ Redirect to previous page or dashboard
        navigate(location.state?.from || "/dashboard");
      } else {
        toast.error("Invalid email or password!", { position: "top-right" });
      }
    } catch (error) {
      toast.error("Server error! Try again.", { position: "top-right" });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen
     bg-gradient-to-r from-green-500 bg-[#0a1636] shadow-xl">
      <ToastContainer />
      <div className="bg-gradient-to-r from-green-500 bg-[#0a1636] shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Login
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="relative">
            <label htmlFor="email" className="block text-white font-medium">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter Email"
              required
              className="w-full mt-1 py-3 p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="relative">
            <label htmlFor="password" className="block text-white font-medium">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="******"
              required
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-3 rounded-md hover:bg-yellow-500 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

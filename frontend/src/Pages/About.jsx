// import React from "react";
// import { motion } from "framer-motion";
// import image from "../images/p-4.png";
// import image1 from "../images/abou1.jpg";
// import Footer from "../components/Footer/Footer";
// import Header from "../components/Header/Header";

// function About() {
//   return (
//     <div>
//       <Header />

//       {/* Hero Section */}
//       <motion.div
//         className="relative bg-cover bg-center flex flex-col justify-center items-center text-white pt-20 w-full h-80"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <img className="w-full h-80 object-cover" src={image} alt="About" />
//         <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//         <motion.div
//           className="absolute left-0 ml-40 pt-8"
//           initial={{ x: -50, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           <h1 className="text-xl mt-3 text-yellow-500">About Us</h1>
//           <p className="text-5xl mt-5 font-bold">About Us - Who We Are?</p>
//         </motion.div>
//       </motion.div>

//       {/* Story Section */}
//       <div className="mt-20 ml-40 ">
//         <div className="flex flex-col lg:flex-row gap-12 pt-10 items-center">
//           {/* Left Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1, delay: 0.5 }}
//           >
//             <h1 className="text-5xl font-semibold">Our Agency Story</h1>
//             <p className="text-gray-400 mt-6">
//               Check out our company story and work process
//             </p>
//             <p className="mt-6 leading-8">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br></br>sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br> Ut
//               enim ad minim veniam, quis nostrud exercitation ullamco laboris<br></br>
//               nisi ut aliquip ex ea commodo consequat.
//             </p>
//             <p className="mt-6 leading-8">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br></br>
//               eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br> Ut
//               enim ad minim veniam, quis nostrud exercitation ullamco laboris<br></br>
//               nisi ut aliquip.
//             </p>
//             <motion.button
//               className="bg-green-500 text-white px-8 py-2 rounded-3xl
//                mt-10 shadow-lg hover:bg-yellow-500 transition duration-300"
//               whileHover={{ scale: 1.1 }}
//             >
//               More About Us
//             </motion.button>
//           </motion.div>

//           {/* Right Image */}
//           <motion.div
//             className="mt-10"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1, delay: 0.7 }}
//             whileHover={{ scale: 1.05 }}
//           >
//             <img
//               className="w-[500px] h-[400px] rounded-lg shadow-lg"
//               src={image1}
//               alt="About Us"
//             />
//           </motion.div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }

// export default About;

import React from "react";
import { motion } from "framer-motion";
import image from "../images/p-4.png";
import newImage from "../Assets/About1.png";
import image1 from "../images/abou1.jpg";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function About() {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <motion.div
        className="relative bg-cover bg-center flex flex-col justify-center items-center text-white pt-20 w-full h-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img className="w-full h-80 object-cover" src={image} alt="About" />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div
          className="absolute left-0 ml-40 pt-8"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-xl mt-3 text-yellow-500">About Us</h1>
          <p className="text-5xl mt-5 font-bold">
            The Leading Real Estate Rental Marketplace.
          </p>
        </motion.div>
      </motion.div>

      {/* About Section */}
      <div className="mt-20 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <img
              className="w-[500px] h-[400px] rounded-lg shadow-lg"
              src={newImage}
              alt="Real Estate"
            />
            {/* Play Button Overlay */}
            <div className="absolute bottom-5 left-5 bg-white p-4 rounded-full shadow-md cursor-pointer">
              <span className="text-red-500 text-3xl">▶</span>
            </div>
          </motion.div>

          {/* Right Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2 className="text-5xl font-bold leading-snug">
              The Leading Real Estate <br /> Rental Marketplace.
            </h2>
            <p className="text-gray-500 mt-6 leading-7">
              Over 39,000 people work for us in more than 70 countries all over
              the world. This breadth of global coverage, combined with
              specialist services, ensures we provide the best experience.
            </p>

            {/* Features Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="flex items-center gap-3">
                <span className="bg-red-100 text-red-500 p-2 rounded-full">
                  🏡
                </span>
                <p className="text-gray-700 font-medium">Smart Home Design</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-red-100 text-red-500 p-2 rounded-full">
                  🌅
                </span>
                <p className="text-gray-700 font-medium">
                  Beautiful Scene Around
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-red-100 text-red-500 p-2 rounded-full">
                  🌟
                </span>
                <p className="text-gray-700 font-medium">
                  Exceptional Lifestyle
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-red-100 text-red-500 p-2 rounded-full">
                  🔒
                </span>
                <p className="text-gray-700 font-medium">
                  Complete 24/7 Security
                </p>
              </div>
            </div>

            {/* Highlighted Text Box */}
            <div className="bg-red-100 border-l-4 border-red-500 text-gray-700 p-4 mt-6 rounded">
              <p>
                Enimad minim veniam quis nostrud exercitation ullamco laboris.
                Lorem ipsum dolor sit amet.
              </p>
            </div>

            {/* Call to Action Button */}
            <motion.button
              className="bg-red-500 text-white px-8 py-3 rounded-md mt-8 font-medium text-lg shadow-md hover:bg-red-600 transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              Our Services
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Additional Story Section */}
      <div className="mt-20 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 pt-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="text-5xl font-semibold">Our Agency Story</h1>
            <p className="text-gray-400 mt-6">
              Check out our company story and work process
            </p>
            <p className="mt-6 leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br></br>
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br></br> Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris<br></br>
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="mt-6 leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              <br></br>
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br></br> Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris<br></br>
              nisi ut aliquip.
            </p>
            <motion.button
              className="bg-green-500 text-white px-8 py-2 rounded-3xl
               mt-10 shadow-lg hover:bg-yellow-500 transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              More About Us
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              className="w-[500px] h-[400px] rounded-lg shadow-lg"
              src={image1}
              alt="Agency Story"
            />
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;

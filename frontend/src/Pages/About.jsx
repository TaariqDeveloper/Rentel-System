// import React from 'react'
// import image from "../images/p-4.png";
// import image1 from "../images/abou1.jpg";
// import Footer from '../components/Footer/Footer'
// import Header from '../components/Header/Header'

// function About() {
//   return (

//     <div>
//     <Header/>
//         <div className='mt-5'>
//       <div className='relative bg-cover bg-center  flex flex-col
//         justify-center items-center text-white pt-20 w-full h-80'>

//         <img className='w-full h-80' src={image} alt="" />

//         <div className='absolute inset-0 bg-black bg-opacity-50'></div>
//         <div className=' absolute  left-0 ml-40 pt-8'>
//         <h1 className='text-xl mt-3'>About Us</h1>
//         <p className='text-5xl mt-5'>About Us - Who We Are?</p>
//         </div>
//       </div>

//       {/* section2 */}
//       <div className='mt-10 mp-10 ml-40'>
//       <div className='flex  gap-12 pt-20'>
//         {/* left */}
//         <div>
//          <h1 className=' text-5xl  font-semibold'>Our Agency Story</h1>
//          <p className='text-gray-400 mt-6'>Check out our company story and
//             work process</p>
//             <p className='mt-6  leading-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br></br> eiusmod tempor incididunt ut labore et
//             dolore magna aliqua. Ut <br></br>enim ad minim veniam, quis nostrud
//              exercitation ullamco laboris <br></br>nisi ut aliquip ex ea commodo consequat.</p>

//              <p className='mt-6 leading-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br></br> eiusmod
//              tempor incididunt ut labore et dolore magna aliqua. Ut<br></br> enim ad minim veniam,
//                  quis nostrud exercitation ullamco laboris<br></br> nisi ut aliquip.</p>
//                  <button className='bg-green-500 text-white px-8 py-2 rounded-3xl
//                  mt-10'>More About Us</button>
//         </div>
//         {/* right */}
//         <div className='mt-10'>
//      <img className='w-[500px] h-400px]' src={image1} alt="" />
//         </div>
//       </div>
//       </div>
//         </div>
//     <Footer/>

//     </div>
//   )
// }

// export default About

import React from "react";
import { motion } from "framer-motion";
import image from "../images/p-4.png";
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
          <h1 className="text-xl mt-3">About Us</h1>
          <p className="text-5xl mt-5 font-bold">About Us - Who We Are?</p>
        </motion.div>
      </motion.div>

      {/* Story Section */}
      <div className="mt-20 ml-40">
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="mt-6 leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            <motion.button
              className="bg-green-500 text-white px-8 py-2 rounded-3xl mt-10 shadow-lg hover:bg-green-600 transition duration-300"
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
              alt="About Us"
            />
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;

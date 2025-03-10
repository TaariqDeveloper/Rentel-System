// import React from 'react'
// import Header from '../components/Header/Header'
// import Footer from '../components/Footer/Footer'
// import image from "../images/p-6.png";
// import image1 from "../images/h1.png"
// import image2 from "../images/h2.png"
// import image3 from "../images/h3.png"
// import image4 from "../images/h4.png"
// import image5 from "../images/h6.png"

// function Service() {
//   return (
//     <div>
//         <Header/>
//   <div className='mt-5'>
//   <div className='relative bg-cover bg-center  flex flex-col
//         justify-center items-center text-white pt-20 w-full h-80'>

//           <img className='w-full h-80' src={image} alt="" />

//           <div className='absolute inset-0 bg-black bg-opacity-50'></div>
//           <div className=' absolute  left-0 ml-40 pt-8'>
//           <h1 className='text-xl mt-3'>Services</h1>
//           <p className='text-5xl mt-5'>Services -All Services</p>
//           </div>
//         </div>

//         <div className='mt-10 pt-[80px] px-10 pb-20'>
//           <div className='flex gap-10 ml-20'>
//            <div className='bg-white w-[200px] h-[180px]
//             shadow-lg shadow-gray-400/50 rounded-lg  text-center pt-1'>

//               <img className='w-[80px] h-[80px] mt-2 ml-[60px]' src={image1} alt="" />
//                  <h1 className='text-xl font-semibold mt-1'>Family House</h1>
//                  <p  className='text-gray-400 m-1'>122 Property</p>

//            </div>

//            <div className='bg-white w-[200px] h-[180px]
//             shadow-lg shadow-gray-400/50 rounded-lg  text-center pt-1'>

//               <img className='w-[80px] h-[80px] mt-2 ml-[60px]' src={image2} alt="" />
//                  <h1 className='text-xl font-semibold mt-1'>House & Villa</h1>
//                  <p  className='text-gray-400 m-1'>155 Property</p>

//            </div>
//            <div className='bg-white w-[200px] h-[180px]
//             shadow-lg shadow-gray-400/50 rounded-lg  text-center pt-1'>

//               <img className='w-[80px] h-[80px] mt-2 ml-[60px]' src={image3} alt="" />
//                  <h1 className='text-xl font-semibold mt-1'>Apartment</h1>
//                  <p  className='text-gray-400 m-1'>300 Property</p>

//            </div>
//            <div className='bg-white w-[200px] h-[180px]
//             shadow-lg shadow-gray-400/50 rounded-lg  text-center pt-1'>

//               <img className='w-[80px] h-[80px] mt-2 ml-[60px]' src={image4} alt="" />
//                  <h1 className='text-xl font-semibold mt-1'>Office & Studio</h1>
//                  <p  className='text-gray-400 m-1'>80 Property</p>

//            </div>
//            <div className='bg-white w-[200px] h-[180px]
//             shadow-lg shadow-gray-400/50 rounded-lg  text-center pt-1'>

//               <img className='w-[80px] h-[80px] mt-2 ml-[60px]' src={image5} alt="" />
//                  <h1 className='text-xl font-semibold mt-1'>Villa & Condo</h1>
//                  <p  className='text-gray-400 m-1'>80 Property</p>

//            </div>
//           </div>
//         </div>
//   </div>
// <Footer/>
//     </div>
//   )
// }

// export default Service

import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import image from "../images/p-6.png";
import image1 from "../images/h1.png";
import image2 from "../images/h2.png";
import image3 from "../images/h3.png";
import image4 from "../images/h4.png";
import image5 from "../images/h6.png";

const services = [
  { img: image1, title: "Family House", properties: "122 Property" },
  { img: image2, title: "House & Villa", properties: "155 Property" },
  { img: image3, title: "Apartment", properties: "300 Property" },
  { img: image4, title: "Office & Studio", properties: "80 Property" },
  { img: image5, title: "Villa & Condo", properties: "80 Property" },
];

function Service() {
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
        <img className="w-full h-80 object-cover" src={image} alt="Services" />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div
          className="absolute left-0 ml-40 pt-8"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-xl mt-3">Services</h1>
          <p className="text-5xl mt-5 font-bold">Services - All Services</p>
        </motion.div>
      </motion.div>

      {/* Services Section */}
      <div className="mt-10 pt-20 px-10 pb-20">
        <div className="flex flex-wrap justify-center gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white w-[200px] h-[180px] shadow-lg shadow-gray-400/50 rounded-lg text-center p-4 flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                className="w-[80px] h-[80px] mt-2"
                src={service.img}
                alt={service.title}
              />
              <h1 className="text-xl font-semibold mt-3">{service.title}</h1>
              <p className="text-gray-400">{service.properties}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Service;

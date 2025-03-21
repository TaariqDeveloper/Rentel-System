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
  className="relative bg-cover bg-center flex flex-col justify-center items-center text-white pt-16 sm:pt-20 w-full h-64 sm:h-80"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  <img
    className="w-full h-64 sm:h-80 object-cover"
    src={image}
    alt="Services"
  />
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  <motion.div
    className="absolute left-4 sm:left-10 md:left-20 lg:ml-40 pt-8 text-center sm:text-left"
    initial={{ x: -50, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h1 className="text-lg sm:text-xl mt-3 text-yellow-500">Services</h1>
    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-3 sm:mt-5 font-bold">
      Services - All Services
    </p>
  </motion.div>
</motion.div>

{/* Services Section */}
<div className="mt-8 sm:mt-10 pt-8 sm:pt-12 md:pt-16 lg:pt-20 px-4 sm:px-6 md:px-8 lg:px-10 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
  <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
    {services.map((service, index) => (
      <motion.div
        key={index}
        className="bg-white w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] h-[140px] sm:h-[150px] md:h-[160px] lg:h-[180px] shadow-lg shadow-gray-400/50 rounded-lg text-center p-3 sm:p-4 flex flex-col items-center justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <img
          className="w-[50px] sm:w-[60px] md:w-[70px] lg:w-[80px] h-[50px] sm:h-[60px] md:h-[70px] lg:h-[80px]"
          src={service.img}
          alt={service.title}
        />
        <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mt-2 sm:mt-3">
          {service.title}
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-gray-400">
          {service.properties}
        </p>
      </motion.div>
    ))}
  </div>
</div>


<div>
    {/* section3----------------- */}
    <button className="bg-yellow-500/20 text-white px-1 py-1 ml-[600px] rounded-full">Our Services</button>
    <h1  className="text-center text-4xl font-bold mt-10">Our Core Services</h1>
    <div className="px-10 py-20 grid grid-cols-3 gap-8 ">
      
      <div className="w-[320px] h-[250px] bg-white shadow-lg shadow-gray-500 rounded-lg px-4">
       
      <i class="fa-solid fa-house ml-[130px] text-2xl mt-10 text-green-500"></i>
       <h1 className="text-center text-2xl mt-4 ">Property Management</h1>
       <p className="text-gray-400 mt-4 text-sm">over 1 million+ homes for sale available on the website,
         we can match you with 
        a house you will want to call home.</p>
      </div>


      <div className="w-[320px] h-[250px] bg-white shadow-lg shadow-gray-500 rounded-lg px-4">
       
      <i class="fa-solid fa-house-chimney-user  ml-[130px] text-2xl mt-10
       text-green-500"></i>
        <h1 className="text-center text-2xl mt-4 ">Mortgage Service</h1>
        <p className="text-gray-400 mt-4 text-sm">over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home..</p>
       </div>


       <div className="w-[320px] h-[250px] bg-white shadow-lg shadow-gray-500 rounded-lg px-4">
       
       <i class="fa-solid fa-people-roof   ml-[130px] text-2xl mt-10
       text-green-500"></i>
        <h1 className="text-center text-2xl mt-4 ">Consulting Service</h1>
        <p className="text-gray-400 mt-4 text-sm">over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
       </div>



       <div className="w-[320px] h-[250px] bg-white shadow-lg shadow-gray-500 rounded-lg px-4">
       
       <i class="fa-brands fa-buy-n-large   ml-[130px] text-2xl mt-10
       text-green-500"></i>
        <h1 className="text-center text-2xl mt-4  ">Home Buying</h1>
        <p className="text-gray-400 mt-4 text-sm">over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
       </div>

       <div className="w-[320px] h-[250px] bg-white shadow-lg shadow-gray-500 rounded-lg px-4">
       
       <i class="fa-brands fa-buysellads  ml-[130px] text-2xl mt-10
       text-green-500"></i>
        <h1 className="text-center text-2xl mt-4 ">Home Selling</h1>
        <p className="text-gray-400 mt-4 text-sm">over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
       </div>

       <div className="w-[320px] h-[250px] bg-white shadow-lg shadow-gray-500 rounded-lg px-4">
       
       <i class="fa-solid fa-house-laptop   ml-[130px] text-2xl mt-10
       text-green-500"></i>
        <h1 className="text-center text-2xl mt-4 ">Escrow Services</h1>
        <p className="text-gray-400 mt-4 text-sm">over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
       </div>
    </div>
</div>
      <Footer />
    </div>
  );
}

export default Service;

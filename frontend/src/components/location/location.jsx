// import React from "react";
// import image2 from "../../images/city-1.png";
// import image3 from "../../images/city-2.png";
// import image4 from "../../images/city-3.png";
// import image5 from "../../images/city-4.png";
// import image6 from "../../images/city-5.png";
// import image7 from "../../images/city-6.png";
// function Location() {
//   return (
//     <div className="pt-20">
//       <h1 className="text-5xl text-center font-semibold">
//         Explore By Location
//       </h1>

//       <p className="text-center text-gray-500 mt-6 text-[19px]">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//         tempor<br></br>
//         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
//       </p>

//       <div className="px-8  mt-10  grid grid-cols-3 gap-4 ">
//         <div
//           className="bg-gray-400/25 w-[370px] h-[250px]
//          rounded-lg ml-20 relative  "
//         >
//           {/* Image container */}
//           <div className="absolute top-[-10px] right-[2px] w-[380px] h-[300px] mr-4">
//             <img
//               className="rounded-lg w-[400px] h-[250px] object-cover opacity-200"
//               src={image2}
//             />
//             <div className=" absolute  top-[100px]  text-white ml-10 font-bold text-2xl">
//               <h1>New Orleans, Louisiana</h1>
//               <ul className="text-white text-[14px] flex gap-5 mt-2">
//                 <li>12 Villas</li>
//                 <li>07 Offices</li>
//                 <li>10 Apartments</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* two */}
//         <div
//           className="bg-gray-400/25 w-[370px] h-[250px]
//          rounded-lg ml-20 relative  "
//         >
//           {/* Image container */}
//           <div className="absolute top-[-10px] right-[2px] w-[380px] h-[300px] mr-4">
//             <img
//               className="rounded-lg w-[400px] h-[250px] object-cover opacity-200"
//               src={image3}
//             />
//             <div className=" absolute  top-[100px]  text-white ml-10 font-bold text-2xl">
//               <h1>Jerrsy, United State</h1>
//               <ul className="text-white text-[14px] flex gap-5 mt-2">
//                 <li>12 Villas</li>
//                 <li>07 Offices</li>
//                 <li>10 Apartments</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div
//           className="bg-gray-400/25 w-[370px] h-[250px]
//          rounded-lg ml-20 relative  "
//         >
//           {/* Image container */}
//           <div className="absolute top-[-10px] right-[2px] w-[380px] h-[300px] mr-4">
//             <img
//               className="rounded-lg w-[400px] h-[250px] object-cover opacity-200"
//               src={image4}
//             />
//             <div className=" absolute  top-[100px]  text-white ml-10 font-bold text-2xl">
//               <h1>Liverpool, London</h1>
//               <ul className="text-white text-[14px] flex gap-5 mt-2">
//                 <li>12 Villas</li>
//                 <li>07 Offices</li>
//                 <li>10 Apartments</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div
//           className="bg-gray-400/25 w-[370px] h-[250px]
//          rounded-lg ml-20 relative  "
//         >
//           {/* Image container */}
//           <div className="absolute top-[-10px] right-[2px] w-[380px] h-[300px] mr-4">
//             <img
//               className="rounded-lg w-[400px] h-[250px] object-cover opacity-200"
//               src={image5}
//             />
//             <div className=" absolute  top-[100px]  text-white ml-10 font-bold text-2xl">
//               <h1>NewYork, United States</h1>
//               <ul className="text-white text-[14px] flex gap-5 mt-2">
//                 <li>12 Villas</li>
//                 <li>07 Offices</li>
//                 <li>10 Apartments</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div
//           className="bg-gray-400/25 w-[370px] h-[250px]
//          rounded-lg ml-20 relative  "
//         >
//           {/* Image container */}
//           <div className="absolute top-[-10px] right-[2px] w-[380px] h-[300px] mr-4">
//             <img
//               className="rounded-lg w-[400px] h-[250px] object-cover opacity-200"
//               src={image6}
//             />
//             <div className=" absolute  top-[100px]  text-white ml-10 font-bold text-2xl">
//               <h1>Montreal, Canada</h1>
//               <ul className="text-white text-[14px] flex gap-5 mt-2">
//                 <li>12 Villas</li>
//                 <li>07 Offices</li>
//                 <li>10 Apartments</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div
//           className="bg-gray-400/25 w-[370px] h-[250px]
//          rounded-lg ml-20 relative  "
//         >
//           {/* Image container */}
//           <div className="absolute top-[-10px] right-[2px] w-[380px] h-[300px] mr-4">
//             <img
//               className="rounded-lg w-[400px] h-[250px] object-cover opacity-200"
//               src={image7}
//             />
//             <div className=" absolute  top-[100px]  text-white ml-10 font-bold text-2xl">
//               <h1>California, USA</h1>
//               <ul className="text-white text-[14px] flex gap-5 mt-2">
//                 <li>12 Villas</li>
//                 <li>07 Offices</li>
//                 <li>10 Apartments</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Location;

import React from "react";
import { motion } from "framer-motion";
import image2 from "../../images/city-1.png";
import image3 from "../../images/city-2.png";
import image4 from "../../images/city-3.png";
import image5 from "../../images/city-4.png";
import image6 from "../../images/city-5.png";
import image7 from "../../images/city-6.png";

const locations = [
  { img: image2, name: "New Orleans, Louisiana" },
  { img: image3, name: "Jersey, United States" },
  { img: image4, name: "Liverpool, London" },
  { img: image5, name: "New York, United States" },
  { img: image6, name: "Montreal, Canada" },
  { img: image7, name: "California, USA" },
];

function Location() {
  return (
    <div className="pt-20">
      <motion.h1
        className="text-5xl text-center font-semibold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Explore By Location
      </motion.h1>

      <motion.p
        className="text-center text-gray-500 mt-6 text-[19px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor<br></br>
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
      </motion.p>

      <div className="px-8 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {locations.map((loc, index) => (
          <motion.div
            key={index}
            className="relative bg-gray-400/25 w-[370px] h-[250px] rounded-lg overflow-hidden mx-auto flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              className="absolute inset-0 w-full h-full object-cover"
              src={loc.img}
              alt={loc.name}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute text-center text-white opacity-0 flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="font-bold text-2xl">{loc.name}</h1>
              <ul className="text-white text-[14px] flex justify-center gap-5 mt-2">
                <li>12 Villas</li>
                <li>07 Offices</li>
                <li>10 Apartments</li>
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Location;

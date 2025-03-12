// import React from "react";
// function FeaturedPropertyTypes() {
//   return (
//     <section className="py-12 bg-gray-100 text-center h-[500px]">
//       <div className="container mx-auto">
//         <h2 className="text-3xl font-bold text-gray-800">
//           Featured Property Types
//         </h2>
//         <p className="text-gray-500 mt-2">Find All Type of Property.</p>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
//           <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
//             <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-red-100">
//               <span className="text-3xl text-red-500">🏡</span>
//             </div>
//             <h3 className="text-lg font-semibold text-gray-700 mt-4">
//               Family House
//             </h3>
//             <p className="text-gray-500">122 Property</p>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
//             <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-green-100">
//               <span className="text-3xl text-green-500">🏠</span>
//             </div>
//             <h3 className="text-lg font-semibold text-gray-700 mt-4">
//               House & Villa
//             </h3>
//             <p className="text-gray-500">155 Property</p>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
//             <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-yellow-100">
//               <span className="text-3xl text-yellow-500">🏢</span>
//             </div>
//             <h3 className="text-lg font-semibold text-gray-700 mt-4">
//               Apartment
//             </h3>
//             <p className="text-gray-500">300 Property</p>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
//             <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-purple-100">
//               <span className="text-3xl text-purple-500">🏬</span>
//             </div>
//             <h3 className="text-lg font-semibold text-gray-700 mt-4">
//               Office & Studio
//             </h3>
//             <p className="text-gray-500">80 Property</p>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
//             <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-100">
//               <span className="text-3xl text-blue-500">🏛️</span>
//             </div>
//             <h3 className="text-lg font-semibold text-gray-700 mt-4">
//               Villa & Condo
//             </h3>
//             <p className="text-gray-500">80 Property</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default FeaturedPropertyTypes;

import React from "react";
import { motion } from "framer-motion";

function FeaturedPropertyTypes() {
  return (
    <section className="py-12 bg-gray-100 text-center h-[500px]">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Featured Property Types
        </motion.h2>
        <motion.p
          className="text-gray-500 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Find All Type of Property.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
          {[
            {
              icon: "🏡",
              color: "red-500",
              bg: "red-100",
              title: "Family House",
              count: "122 Property",
            },
            {
              icon: "🏠",
              color: "green-500",
              bg: "green-100",
              title: "House & Villa",
              count: "155 Property",
            },
            {
              icon: "🏢",
              color: "yellow-500",
              bg: "yellow-100",
              title: "Apartment",
              count: "300 Property",
            },
            {
              icon: "🏬",
              color: "purple-500",
              bg: "purple-100",
              title: "Office & Studio",
              count: "80 Property",
            },
            {
              icon: "🏛️",
              color: "blue-500",
              bg: "blue-100",
              title: "Villa & Condo",
              count: "80 Property",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transition 
              transform hover:scale-105 hover:shadow-xl hover:bg-gray-50 cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1, transition: { duration: 0.3 } }}
              transition={{ delay: index * 0.3, duration: 0.6 }}
            >
              <motion.div
                className={`w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-${item.bg} transition-transform duration-300`}
                whileHover={{ rotate: 10 }}
              >
                <span className={`text-3xl text-${item.color}`}>
                  {item.icon}
                </span>
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-700 mt-4">
                {item.title}
              </h3>
              <p className="text-gray-500">{item.count}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedPropertyTypes;

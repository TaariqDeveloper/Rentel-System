// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const Booking = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     checkIn: "",
//     checkOut: "",
//     guests: "1",
//     house: "",
//   });

//   const houses = [
//     "Luxury Villa",
//     "Beach House",
//     "Mountain Cabin",
//     "City Apartment",
//   ];

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:5000/api/book", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();

//       if (result.success) {
//         alert("Booking successful!");
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           checkIn: "",
//           checkOut: "",
//           guests: "1",
//           house: "",
//         });
//       } else {
//         alert("Booking failed! Try again.");
//       }
//     } catch (error) {
//       console.error("Booking Error:", error);
//       alert("Something went wrong!");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-green-500 p-4">
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg"
//       >
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
//           Book Your Stay
//         </h2>

//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             className="w-full p-3 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-blue-500"
//             required
//             value={formData.name}
//             onChange={handleChange}
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             className="w-full p-3 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-blue-500"
//             required
//             value={formData.email}
//             onChange={handleChange}
//           />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone Number"
//             className="w-full p-3 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-blue-500"
//             required
//             value={formData.phone}
//             onChange={handleChange}
//           />
//           <select
//             name="house"
//             className="w-full p-3 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-blue-500"
//             required
//             value={formData.house}
//             onChange={handleChange}
//           >
//             <option value="">Select a House</option>
//             {houses.map((house, index) => (
//               <option key={index} value={house}>
//                 {house}
//               </option>
//             ))}
//           </select>
//           <input
//             type="date"
//             name="checkIn"
//             className="w-full p-3 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-blue-500"
//             required
//             value={formData.checkIn}
//             onChange={handleChange}
//           />
//           <input
//             type="date"
//             name="checkOut"
//             className="w-full p-3 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-blue-500"
//             required
//             value={formData.checkOut}
//             onChange={handleChange}
//           />
//           <input
//             type="number"
//             name="guests"
//             min="1"
//             placeholder="Number of Guests"
//             className="w-full p-3 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-blue-500"
//             required
//             value={formData.guests}
//             onChange={handleChange}
//           />

//           <motion.button
//             type="submit"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition duration-300 shadow-lg"
//           >
//             Confirm Booking
//           </motion.button>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default Booking;

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import Header from "../../components/Header/Header";

// const Booking = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     soogalka: "",
//     bixidda: "",
//     guests: "1",
//     house: "",
//   });

//   const houses = [
//     "Villa Raaxo",
//     "Guri Xeebeed",
//     "Buuraleyda Cabin",
//     "Guri Magaaleed",
//   ];

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:5000/api", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();

//       if (result.success) {
//         alert("Booking successful!");
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           checkIn: "",
//           checkOut: "",
//           guests: "1",
//           house: "",
//         });
//       } else {
//         alert("Booking failed! Try again.");
//       }
//     } catch (error) {
//       console.error("Booking Error:", error);
//       alert("Something went wrong!");
//     }
//   };

//   return (
//     <>
//       <Header />
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-green-500 p-4">
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg"
//         >
//           <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
//             Kireyso Gurigaaga
//           </h2>

//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="name"
//               placeholder="Magaca Buuxa"
//               className="w-full p-3 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-blue-500"
//               required
//               value={formData.name}
//               onChange={handleChange}
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Cinwaanka Emailka"
//               className="w-full p-3 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-blue-500"
//               required
//               value={formData.email}
//               onChange={handleChange}
//             />
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Lambarka Taleefanka"
//               className="w-full p-3 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-blue-500"
//               required
//               value={formData.phone}
//               onChange={handleChange}
//             />
//             <select
//               name="house"
//               className="w-full p-3 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-blue-500"
//               required
//               value={formData.house}
//               onChange={handleChange}
//             >
//               <option value="">Dooro Guri</option>
//               {houses.map((house, index) => (
//                 <option key={index} value={house}>
//                   {house}
//                 </option>
//               ))}
//             </select>
//             <input
//               type="date"
//               name="checkIn"
//               className="w-full p-3 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-blue-500"
//               required
//               value={formData.checkIn}
//               onChange={handleChange}
//             />
//             <input
//               type="date"
//               name="checkOut"
//               className="w-full p-3 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-blue-500"
//               required
//               value={formData.checkOut}
//               onChange={handleChange}
//             />
//             <input
//               type="number"
//               name="guests"
//               min="1"
//               placeholder="Tirada Martida"
//               className="w-full p-3 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-blue-500"
//               required
//               value={formData.guests}
//               onChange={handleChange}
//             />

//             <motion.button
//               type="submit"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition duration-300 shadow-lg"
//             >
//               Xaqiiji Kireynta
//             </motion.button>
//           </form>
//         </motion.div>
//       </div>
//     </>
//   );
// };

// export default Booking;

import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Header from "../../components/Header/Header";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    soogalka: "",
    bixidda: "",
    guests: "1",
    house: "",
  });

  const houses = [
    "Villa Raaxo",
    "Guri Xeebeed",
    "Buuraleyda Cabin",
    "Guri Magaaleed",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/bookings",
        formData
      );
      if (response.data.success) {
        alert("Booking successful!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          checkIn: "",
          checkOut: "",
          guests: "1",
          house: "",
        });
      } else {
        alert("Booking failed! Try again.");
      }
    } catch (error) {
      console.error("Booking Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center 
       bg-gradient-to-r from-green-500 bg-[#0a1636] p-4 pt-20 ">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Kireyso Gurigaaga
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Magaca Buuxa"
              className="w-full p-3 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-blue-500"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Cinwaanka Emailka"
              className="w-full p-3 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-blue-500"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Lambarka Taleefanka"
              className="w-full p-3 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-blue-500"
              required
              value={formData.phone}
              onChange={handleChange}
            />
            <select
              name="house"
              className="w-full p-3 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-blue-500"
              required
              value={formData.house}
              onChange={handleChange}
            >
              <option value="">Dooro Guri</option>
              {houses.map((house, index) => (
                <option key={index} value={house}>
                  {house}
                </option>
              ))}
            </select>
            <input
              type="date"
              name="checkIn"
              className="w-full p-3 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-blue-500"
              required
              value={formData.checkIn}
              onChange={handleChange}
            />
            <input
              type="date"
              name="checkOut"
              className="w-full p-3 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-blue-500"
              required
              value={formData.checkOut}
              onChange={handleChange}
            />
            <input
              type="number"
              name="guests"
              min="1"
              placeholder="Tirada Martida"
              className="w-full p-3 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-blue-500"
              required
              value={formData.guests}
              onChange={handleChange}
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition duration-300 shadow-lg"
            >
              Xaqiiji Kireynta
            </motion.button>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default Booking;

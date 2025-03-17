// import React, { useState } from "react";
// import axios from "axios";
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
//       const response = await axios.post(
//         "http://localhost:5000/api/bookings",
//         formData
//       );
//       if (response.data.success) {
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
//       <div
//         className="min-h-screen flex items-center justify-center
//        bg-gradient-to-r from-green-500 bg-[#0a1636] p-4 pt-20 "
//       >
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
    checkIn: "",
    checkOut: "",
    guests: "1",
    house: "",
    price: "",
  });

  // House Prices Per Night Per Guest Count
  const housePrices = {
    "Villa Raaxo": { 1: 100, 2: 120, 3: 140, 4: 160 },
    "Guri Xeebeed": { 1: 80, 2: 95, 3: 110, 4: 125 },
    "Buuraleyda Cabin": { 1: 60, 2: 75, 3: 90, 4: 105 },
    "Guri Magaaleed": { 1: 50, 2: 65, 3: 80, 4: 95 },
  };

  const houses = Object.keys(housePrices);

  // Function to calculate total price
  const calculatePrice = (house, checkIn, checkOut, guests) => {
    if (!house || !checkIn || !checkOut || !guests) return "";

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const nights = Math.max(
      (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24),
      1
    ); // Ensure at least 1 night

    const guestCount = parseInt(guests, 10);
    const perNightPrice =
      housePrices[house]?.[guestCount] || housePrices[house][1]; // Default to 1 guest price

    return nights * perNightPrice;
  };

  // Handle input change and update price dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedData = { ...formData, [name]: value };

    if (["house", "checkIn", "checkOut", "guests"].includes(name)) {
      updatedData.price = calculatePrice(
        updatedData.house,
        updatedData.checkIn,
        updatedData.checkOut,
        updatedData.guests
      );
    }

    setFormData(updatedData);
  };

  // Handle form submission
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
          price: "",
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
      <div
        className="min-h-screen flex items-center justify-center 
       bg-gradient-to-r from-green-500 bg-[#0a1636] p-4 pt-20"
      >
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
            <select
              name="guests"
              className="w-full p-3 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-blue-500"
              required
              value={formData.guests}
              onChange={handleChange}
            >
              <option value="1">1 Marti</option>
              <option value="2">2 Marti</option>
              <option value="3">3 Marti</option>
              <option value="4">4 Marti</option>
            </select>
            <input
              type="text"
              name="price"
              placeholder="Qiimaha Guud"
              className="w-full p-3 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-blue-500"
              value={formData.price}
              readOnly
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

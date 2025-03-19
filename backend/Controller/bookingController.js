// const Booking = require("../Model/Booking");
// // ✅ Create Booking
// const createBooking = async (req, res) => {
//   try {
//     const { name, email, phone, house, checkIn, checkOut, guests } = req.body;

//     const newBooking = new Booking({
//       name,
//       email,
//       phone,
//       house,
//       checkIn,
//       checkOut,
//       guests,
//     });

//     await newBooking.save();
//     res.status(201).json({ success: true, message: "Booking created!", data: newBooking });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Booking failed!", error: error.message });
//   }
// };

// // ✅ Get All Bookings
// const getAllBookings = async (req, res) => {
//   try {
//     const bookings = await Booking.find();
//     res.status(200).json({ success: true, data: bookings });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Failed to fetch bookings", error: error.message });
//   }
// };

// // ✅ Get Single Booking by ID
// const getBookingById = async (req, res) => {
//   try {
//     const booking = await Booking.findById(req.params.id);
//     if (!booking) return res.status(404).json({ success: false,
//       message: "Booking not found" });

//     res.status(200).json({ success: true, data: booking });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Error fetching booking", error: error.message });
//   }
// };

// // ✅ Update Booking
// const updateBooking = async (req, res) => {
//   try {
//     const updatedBooking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

//     if (!updatedBooking) return res.status(404).json({ success: false, message: "Booking not found" });

//     res.status(200).json({ success: true, message: "Booking updated!", data: updatedBooking });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Error updating booking", error: error.message });
//   }
// };

// // ✅ Delete Booking
// const deleteBooking = async (req, res) => {
//   try {
//     const deletedBooking = await Booking.findByIdAndDelete(req.params.id);
//     if (!deletedBooking) return res.status(404).json({ success: false, message: "Booking not found" });

//     res.status(200).json({ success: true, message: "Booking deleted successfully!" });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Error deleting booking", error: error.message });
//   }
// };





// // ✅ Get Total Number of Bookings
// const TotalBooking = async (req, res) => {
//   try {
//     const total = await Booking.find().countDocuments(); // Use Booking model
//     res.status(200).json({ success: true, total });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Error fetching total bookings", error: error.message });
//   }
// };




// module.exports = { createBooking, getAllBookings, getBookingById, updateBooking,
//    deleteBooking, TotalBooking };


//    // waa kugu soo labana hadii error i qabsado







// const Booking = require("../Model/Booking");

// // ✅ Create Booking with Price
// const createBooking = async (req, res) => {
//   try {
//     const { name, email, phone, house, checkIn, checkOut, guests, price } = req.body;

//     if (!price) {
//       return res.status(400).json({ success: false, message: "Price is required!" });
//     }

//     const newBooking = new Booking({
//       name,
//       email,
//       phone,
//       house,
//       checkIn,
//       checkOut,
//       guests,
//       price, // ✅ Storing price in database
//     });

//     await newBooking.save();
//     res.status(201).json({ success: true, message: "Booking created!", data: newBooking });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Booking failed!", error: error.message });
//   }
// };

// // ✅ Get All Bookings
// const getAllBookings = async (req, res) => {
//   try {
//     const bookings = await Booking.find();
//     res.status(200).json({ success: true, data: bookings });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Failed to fetch bookings", error: error.message });
//   }
// };

// // ✅ Get Single Booking by ID
// const getBookingById = async (req, res) => {
//   try {
//     const booking = await Booking.findById(req.params.id);
//     if (!booking) return res.status(404).json({ success: false, message: "Booking not found" });

//     res.status(200).json({ success: true, data: booking });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Error fetching booking", error: error.message });
//   }
// };

// // ✅ Update Booking (including price)
// const updateBooking = async (req, res) => {
//   try {
//     const updatedBooking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

//     if (!updatedBooking) return res.status(404).json({ success: false, message: "Booking not found" });

//     res.status(200).json({ success: true, message: "Booking updated!", data: updatedBooking });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Error updating booking", error: error.message });
//   }
// };

// // ✅ Delete Booking
// const deleteBooking = async (req, res) => {
//   try {
//     const deletedBooking = await Booking.findByIdAndDelete(req.params.id);
//     if (!deletedBooking) return res.status(404).json({ success: false, message: "Booking not found" });

//     res.status(200).json({ success: true, message: "Booking deleted successfully!" });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Error deleting booking", error: error.message });
//   }
// };

// // ✅ Get Total Number of Bookings
// const TotalBooking = async (req, res) => {
//   try {
//     const total = await Booking.find().countDocuments();
//     res.status(200).json({ success: true, total });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Error fetching total bookings", error: error.message });
//   }
// };
// // ✅ Get Total Price of All Bookings
// const getTotalBookingPrice = async (req, res) => {
//   try {
//     const totalPrice = await Booking.aggregate([
//       { $group: { _id: null, total: { $sum: "$price" } } }
//     ]);

//     const total = totalPrice.length > 0 ? totalPrice[0].total : 0;

//     res.status(200).json({ success: true, totalPrice: total });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Error calculating total price", error: error.message });
//   }
// };

// module.exports = { createBooking, getAllBookings, getBookingById, updateBooking, deleteBooking, TotalBooking, getTotalBookingPrice };





const Booking = require("../Model/Booking");
const Customer = require("../Model/CustomerModel"); // Import Customer model

// ✅ Create Booking with Customer Validation
const createBooking = async (req, res) => {
  try {
    const { name, email, phone, house, checkIn, checkOut, guests, price } = req.body;

    if (!price) {
      return res.status(400).json({ success: false, message: "Price is required!" });
    }

    // ✅ Check if the customer exists
    const existingCustomer = await Customer.findOne({ email, phone });

    if (!existingCustomer) {
      return res.status(400).json({ 
        success: false, 
        message: "Please register first before booking." 
      });
    }

    // ✅ Proceed with booking if customer exists
    const newBooking = new Booking({
      name,
      email,
      phone,
      house,
      checkIn,
      checkOut,
      guests,
      price,
    });

    await newBooking.save();
    res.status(201).json({ success: true, message: "Booking created!", data: newBooking });
  } catch (error) {
    res.status(500).json({ success: false, message: "Booking failed!", error: error.message });
  }
};

// ✅ Get All Bookings
const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json({ success: true, data: bookings });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch bookings", error: error.message });
  }
};

// ✅ Get Single Booking by ID
const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ success: false, message: "Booking not found" });

    res.status(200).json({ success: true, data: booking });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching booking", error: error.message });
  }
};

// ✅ Update Booking
const updateBooking = async (req, res) => {
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

    if (!updatedBooking) return res.status(404).json({ success: false, message: "Booking not found" });

    res.status(200).json({ success: true, message: "Booking updated!", data: updatedBooking });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error updating booking", error: error.message });
  }
};

// ✅ Delete Booking
const deleteBooking = async (req, res) => {
  try {
    const deletedBooking = await Booking.findByIdAndDelete(req.params.id);
    if (!deletedBooking) return res.status(404).json({ success: false, message: "Booking not found" });

    res.status(200).json({ success: true, message: "Booking deleted successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error deleting booking", error: error.message });
  }
};

// ✅ Get Total Number of Bookings
const TotalBooking = async (req, res) => {
  try {
    const total = await Booking.find().countDocuments();
    res.status(200).json({ success: true, total });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching total bookings", error: error.message });
  }
};

// ✅ Get Total Price of All Bookings
const getTotalBookingPrice = async (req, res) => {
  try {
    const totalPrice = await Booking.aggregate([
      { $group: { _id: null, total: { $sum: "$price" } } }
    ]);

    const total = totalPrice.length > 0 ? totalPrice[0].total : 0;

    res.status(200).json({ success: true, totalPrice: total });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error calculating total price", error: error.message });
  }
};

module.exports = { createBooking, getAllBookings, getBookingById, updateBooking, deleteBooking, TotalBooking, getTotalBookingPrice };

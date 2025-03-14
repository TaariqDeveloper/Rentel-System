// const Booking = require("../Model/Booking");

// // ✅ Create a new booking
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
//       guests
//     });

//     await newBooking.save();
//     res.status(201).json({ success: true, message: "Booking successful!", data: newBooking });
//   } catch (error) {
//     console.error("Booking Error:", error);
//     res.status(500).json({ success: false, message: "Booking failed", error: error.message });
//   }
// };

// // ✅ Get all bookings
// const getBookings = async (req, res) => {
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

// module.exports = { createBooking, getBookings , getBookingById, updateBooking, deleteBooking};













const Booking = require("../Model/Booking");
// ✅ Create Booking
const createBooking = async (req, res) => {
  try {
    const { name, email, phone, house, checkIn, checkOut, guests } = req.body;

    const newBooking = new Booking({
      name,
      email,
      phone,
      house,
      checkIn,
      checkOut,
      guests,
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
    if (!booking) return res.status(404).json({ success: false, 
      message: "Booking not found" });

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
    const total = await Booking.find().countDocuments(); // Use Booking model
    res.status(200).json({ success: true, total });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching total bookings", error: error.message });
  }
};




// this is qaas
// Function to count total bookings

// display all bookings
// const TotalBook = async (req, res) => {
//         const total = await Booking.find().countDocuments()
//         if (total) {
//                 res.send({total})
//         }
// }




module.exports = { createBooking, getAllBookings, getBookingById, updateBooking,
   deleteBooking, TotalBooking };

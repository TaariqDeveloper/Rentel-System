// const express = require("express");
// const {
//   createBooking,
//   getAllBookings,
//   getBookingById,
//   updateBooking,
//   deleteBooking,
//   TotalBooking,
//   getTotalBookingPrice
// } = require("../Controller/bookingController");

// const router = express.Router();

// router.post("/bookings", createBooking); // ✅ Create booking with price
// router.get("/bookings", getAllBookings); // ✅ Fetch all bookings
// router.get("/bookings/:id", getBookingById); // ✅ Fetch single booking
// router.put("/bookings/:id", updateBooking); // ✅ Update booking (including price)
// router.delete("/bookings/:id", deleteBooking); // ✅ Delete booking
// router.get("/total/bookings", TotalBooking); // ✅ Get total bookings count
// router.get("/total/price", getTotalBookingPrice); // ✅ Fetch total price of all bookings


// module.exports = router;

const express = require("express");
const { 
  createBooking, 
  getAllBookings, 
  getBookingById, 
  updateBooking, 
  deleteBooking, 
  TotalBooking, 
  getTotalBookingPrice
} = require("../Controller/bookingController");

const router = express.Router();

router.post("/bookings", createBooking); // ✅ Create booking with validation
router.get("/bookings", getAllBookings); // ✅ Fetch all bookings
router.get("/bookings/:id", getBookingById); // ✅ Fetch single booking
router.put("/bookings/:id", updateBooking); // ✅ Update booking
router.delete("/bookings/:id", deleteBooking); // ✅ Delete booking
router.get("/total/bookings", TotalBooking); // ✅ Get total bookings count
router.get("/total/price", getTotalBookingPrice); // ✅ Fetch total price of all bookings

module.exports = router;




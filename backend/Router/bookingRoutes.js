// const express = require("express");
// const { createBooking, getBookings } = require("../Controller/bookingController");
// const router = express.Router();
// router.post("/book", createBooking); // ✅ Create a booking
// router.get("/bookings", getBookings); // ✅ Get all bookings

// module.exports = router;



const express = require("express");
const { createBooking, getAllBookings, getBookingById, updateBooking, deleteBooking,TotalBooking , TotalBook } = require("../Controller/bookingController");
const router = express.Router();
router.post("/bookings", createBooking); // ✅ Create booking
router.get("/bookings", getAllBookings); // ✅ Fetch all bookings
router.get("/bookings/:id", getBookingById); // ✅ Fetch single booking
router.put("/bookings/:id", updateBooking); // ✅ Update booking
router.delete("/bookings/:id", deleteBooking); // ✅ Delete booking
router.get("/total/bookings", TotalBooking);




module.exports = router;

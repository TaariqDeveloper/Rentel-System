// const mongoose = require("mongoose");

// const bookingSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   phone: { type: String, required: true },
//   house: { type: String, required: true },
//   checkIn: { type: Date, required: true },
//   checkOut: { type: Date, required: true },
//   guests: { type: Number, required: true },
//   createdAt: { type: Date, default: Date.now }
// });

// const Booking = mongoose.model("Booking", bookingSchema);
// module.exports = Booking;



const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  house: { type: String, required: true },
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true },
  guests: { type: Number, required: true },
  price: { type: Number, required: true }, // ✅ Add price field
  createdAt: { type: Date, default: Date.now }
});

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;

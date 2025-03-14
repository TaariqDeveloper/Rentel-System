// const mongoose = require("mongoose")
// const CustomerModel = mongoose.Schema({
//         name: {
//                 type: String,
//                 require: true
//         },
//         address: {
//                 type: String,
//                 require: true
//         },
//         phone: {
//                 type: Number,
//                 require: true
//         },

//         gender: {
//                 type: String,
//                 require: true
//         },
//         image: {
//                 type: String,
//                 require: true
//         }
              
// }, { timestamps: true })

// module.exports = mongoose.model("Customer" , CustomerModel)


const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  image: { type: String }, // Store image filename
});

module.exports = mongoose.model("Customer", CustomerSchema);

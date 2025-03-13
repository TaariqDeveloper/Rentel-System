// const mongoose = require("mongoose")
// const UserSchema = mongoose.Schema({
//         name: {type: String, required: true},
//         email: {type: String, required: true , unique: true},
//         password: {type: String, required: true },
// })



// module.exports = mongoose.model("User" , UserSchema)


const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false } // ✅ Add this field
});

module.exports = mongoose.model("User", UserSchema);

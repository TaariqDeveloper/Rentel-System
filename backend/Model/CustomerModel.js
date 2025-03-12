const mongoose = require("mongoose")

const CustomerModel = mongoose.Schema({
        name: {
                type: String,
                require: true
        },
        address: {
                type: String,
                require: true
        },
        phone: {
                type: Number,
                require: true
        },

        gender: {
                type: String,
                require: true
        },
        image: {
                type: String,
                require: true
        }
              
}, { timestamps: true })

module.exports = mongoose.model("Customer" , CustomerModel)
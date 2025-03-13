const CustomerModel = require("../Model/CustomerModel")
// Create product
const RegisterCustomer = async (req, res) => {
    try {
        const newData = new CustomerModel({
            name: req.body.name,
            address: req.body.address,
            phone: req.body.phone,
            gender: req.body.gender,
            image: req.file ? req.file.filename : null
        });
        const SaveData = await newData.save();
        res.status(201).json(SaveData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};

module.exports = {RegisterCustomer};






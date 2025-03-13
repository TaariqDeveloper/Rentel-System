const express = require("express")
const CustomerController = require("../controller/CustomerControler")
const ImageUpload = require("../middleware/imageupload")
const Router = express.Router()

Router.post("/create/customer", ImageUpload.single("image"), CustomerController.RegisterCustomer)



module.exports = Router
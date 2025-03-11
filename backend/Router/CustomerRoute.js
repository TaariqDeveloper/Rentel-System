const express = require("express")
const CustomerControler = require("../Controller/CustomerControler")
const imageUpload = require("../middleware/imageupload")
const Router = express.Router()


Router.post("/create/Customer", imageUpload.single("image"), CustomerControler.RegisterCustomer)


module.exports = Router
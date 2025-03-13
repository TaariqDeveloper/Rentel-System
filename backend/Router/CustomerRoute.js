const express = require("express");
const customer = require("../Controller/CustomerControler");
const imageUpload = require("../middleware/imageupload");

const Router = express.Router();
Router.post("/create/customer", imageUpload.single("image"), customer.RegisterCustomer)


module.exports = Router;

const express = require("express");
const CustomerController = require("../Controller/CustomerControler");
const imageUpload = require("../middleware/imageupload");
const Router = express.Router();
Router.post("/customers", imageUpload.single("image"), CustomerController.createCustomer);
Router.get("/customers", CustomerController.getCustomers);
Router.get("/customers/:id", CustomerController.getCustomerById);
Router.put("/customers/:id", imageUpload.single("image"), CustomerController.updateCustomer);
Router.delete("/customers/:id", CustomerController.deleteCustomer);
Router.get("/total/customers", CustomerController.TotalCustomers);


module.exports = Router;


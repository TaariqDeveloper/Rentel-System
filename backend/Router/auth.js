const express = require("express")
const userControllers = require("../Controller/UserController")
const Router = express.Router()
Router.post("/api/auth/register", userControllers.CreateUser )
Router.post("/api/auth/Login", userControllers.CreateLogin )

module.exports = Router
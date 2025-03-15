// const express = require("express")
// const userControllers = require("../Controller/UserController")
// const Router = express.Router()
// Router.post("/api/auth/register", userControllers.CreateUser )
// Router.post("/api/auth/Login", userControllers.CreateLogin )

// Router.get("/users", userControllers.getUser)

// Router.delete("/users/:id", userControllers.deleteUser)

// Router.put("/users/:id" , userControllers.updateUser )
// module.exports = Router


const express = require("express");
const userControllers = require("../Controller/UserController");
const { isAuthenticated, isAdmin } = require("../middleware/authMiddleware"); // ✅ Import middleware

const Router = express.Router();

// ✅ Public Routes (Registration & Login)
Router.post("/api/auth/register", userControllers.CreateUser);
Router.post("/api/auth/Login", userControllers.CreateLogin);

// ✅ Protected Routes (Only Authenticated Users)
Router.get("/users", userControllers.getUser);

// ✅ Admin-Only Routes
Router.delete("/users/:id", isAuthenticated, isAdmin, userControllers.deleteUser);
Router.put("/users/:id", isAuthenticated, isAdmin, userControllers.updateUser);


// display user
// this is i will comback
// Router.get("/api/total/users", isAuthenticated, userControllers.TotalUsers);
Router.get("/api/total/users", userControllers.TotalUsers);


module.exports = Router;

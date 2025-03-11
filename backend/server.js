const express = require("express");
const mongoose = require("mongoose");
const CustomerRouter = require("./Router/CustomerRoute")

const app = express();
const port = 6000;
app.use(express.json)

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/Rental");
        console.log("Connected to database");
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1); // Exit the process if the database connection fails
    }
};

// Call the database connection function
connectDB();

app.use(CustomerRouter)
app.listen(port, () => {
    console.log(`Server is running on port number ${port}`);
});

// const express =  require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const CustomerRouter = require("./Router/CustomerRoute");
// const UserRoute = require("./Router/auth");
// const bookingRoutes = require("./Router/bookingRoutes");
// const app = express();
// const port = 5000;
// // Middleware
// app.use(express.json());
// app.use(cors());

// const connectDB = async () => {
//     try {
//         await mongoose.connect("mongodb://localhost:27017/Rental");
//         console.log("Connected to database");
//     } catch (error) {
//         console.error("Database connection failed:", error);
//         process.exit(1); // Exit the process if the database connection fails
//     }
// };

// // Call the database connection function
// connectDB();
// app.use(CustomerRouter)
// app.use(UserRoute)
// app.use("/allimages", express.static("document"))
// app.use("/api", bookingRoutes);
// app.listen(port, () => {
//     console.log(`Server is running on port number ${port}`);
// });


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Importing routes
const CustomerRouter = require("./Router/CustomerRoute");
const UserRoute = require("./Router/auth");
const bookingRoutes = require("./Router/bookingRoutes");
const contactRoutes = require("./Router/contactRoutes");


const app = express();
const port = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/Rental", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ Connected to database successfully.");
    } catch (error) {
        console.error("❌ Database connection failed:", error);
        process.exit(1); // Exit the process if the database connection fails
    }
};

// Call the database connection function
connectDB();

// Routes
app.use("/api", bookingRoutes);
app.use("/api" ,CustomerRouter);
app.use(UserRoute);
// app.use("/allimages", express.static("documents")); // Ensure "documents" folder exists
app.use("/document", express.static("document")); 
app.use("/api", contactRoutes);
app.use(contactRoutes)


// Start server
app.listen(port, () => {
    console.log(`🚀 Server is running on http://localhost:${port}`);
});







// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const CustomerRouter = require("./Router/CustomerRoute");
// const UserRoute = require("./Router/auth");

// const app = express();
// const PORT = process.env.PORT || 5000; // Use environment variable or default to 5000

// // Middleware
// app.use(express.json());
// app.use(cors());

// // ✅ Database Connection Function
// const connectDB = async () => {
//     try {
//         await mongoose.connect("mongodb://localhost:27017/Rental", {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log("✅ MongoDB Connected");
//     } catch (error) {
//         console.error("❌ Database Connection Failed:", error);
//         process.exit(1); // Exit if database connection fails
//     }
// };

// // ✅ Ensure MongoDB is connected before starting server
// connectDB().then(() => {
//     app.use(CustomerRouter);
//     app.use(UserRoute);
//     app.use("/allimages" , express.static("document"))

//     app.listen(PORT, () => {
//         console.log(`🚀 Server is running on port ${PORT}`);
//     });
// }).catch((err) => {
//     console.error("❌ Server failed to start:", err);
// });


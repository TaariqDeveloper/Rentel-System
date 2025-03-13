// // const express = require("express");
// // const mongoose = require("mongoose");
// // const CustomerRouter = require("./Router/CustomerRoute")
// // const UserRoute = require("./Router/auth.js")
// // const cors = require("cors")
// // const app = express();
// // const port = 6000;
// // app.use(express.json)
// // app.use(cors())
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const CustomerRouter = require("./Router/CustomerRoute");
// const UserRoute = require("./Router/auth");

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
// app.listen(port, () => {
//     console.log(`Server is running on port number ${port}`);
// });


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const CustomerRouter = require("./Router/CustomerRoute");
const UserRoute = require("./Router/auth");

const app = express();
const PORT = process.env.PORT || 5000; // Use environment variable or default to 5000

// Middleware
app.use(express.json());
app.use(cors());

// ✅ Database Connection Function
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/Rental", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ MongoDB Connected");
    } catch (error) {
        console.error("❌ Database Connection Failed:", error);
        process.exit(1); // Exit if database connection fails
    }
};

// ✅ Ensure MongoDB is connected before starting server
connectDB().then(() => {
    app.use(CustomerRouter);
    app.use(UserRoute);
    app.use("/allimages" , express.static("document"))

    app.listen(PORT, () => {
        console.log(`🚀 Server is running on port ${PORT}`);
    });
}).catch((err) => {
    console.error("❌ Server failed to start:", err);
});


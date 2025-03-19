// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// // Importing routes
// const CustomerRouter = require("./Router/CustomerRoute");
// const UserRoute = require("./Router/auth");
// const bookingRoutes = require("./Router/bookingRoutes");
// const contactRoutes = require("./Router/contactRoutes");
// const app = express();
// const port = 5000;

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Database Connection
// const connectDB = async () => {
//     try {
//         await mongoose.connect("mongodb://localhost:27017/Rental", {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log("✅ Connected to database successfully.");
//     } catch (error) {
//         console.error("❌ Database connection failed:", error);
//         process.exit(1); // Exit the process if the database connection fails
//     }
// };

// // Call the database connection function
// connectDB();
// // Routes
// app.use("/api", bookingRoutes);
// app.use("/api" ,CustomerRouter);
// app.use(UserRoute);
// // app.use("/allimages", express.static("documents")); // Ensure "documents" folder exists
// app.use("/document", express.static("document")); 
// app.use("/api", contactRoutes);
// app.use(contactRoutes)



// // Start server
// app.listen(port, () => {
//     console.log(`🚀 Server is running on http://localhost:${port}`);
// });




const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http"); // For Socket.io
const { Server } = require("socket.io"); // Import Socket.io
const contactRoutes = require("./Router/contactRoutes");
const { setSocket } = require("./Controller/ContactController"); // Import socket setup

const CustomerRouter = require("./Router/CustomerRoute");
const UserRoute = require("./Router/auth");
const bookingRoutes = require("./Router/bookingRoutes");

const app = express();
const port = 5000;
const server = http.createServer(app);

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
        process.exit(1);
    }
};

connectDB();

// Initialize Socket.io
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// Pass Socket.io instance to Contact Controller
setSocket(io);

io.on("connection", (socket) => {
  console.log("🔵 Admin connected for notifications");

  socket.on("disconnect", () => {
    console.log("🔴 Admin disconnected");
  });
});

// Routes
app.use("/api", bookingRoutes);
app.use("/api", CustomerRouter);
app.use(UserRoute);
app.use("/api", contactRoutes);
app.use("/document", express.static("document"));

// Start server with Socket.io
server.listen(port, () => {
    console.log(`🚀 Server is running on http://localhost:${port}`);
});


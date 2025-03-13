// const User = require("../Model/User")
// const bcrypt = require("bcrypt");
// const jwt = require('jsonwebtoken');

// // Create Data (User Registration)
// const CreateUser = async (req, res) => {
//     try {
//         const { name, email, password } = req.body; // Extract name, email, and password from request body
//         // Check if a user with the same email already exists
//         const user = await User.findOne({ email });
//         if (user) {
//             return res.status(401).json({ success: false, message: "User already exists" }); // Return an error if user exists
//         }

//         // Hash the password using bcrypt with a salt round of 10
//         const hashPassword = await bcrypt.hash(password, 10);

//         // Create a new user instance with hashed password
//         const NewUser = new User({
//             name,
//             email,
//             password: hashPassword
//         });

//         // Save the new user in the database
//         await NewUser.save();

//         // Respond with success message
//         return res.status(200).json({ success: true, message: "Account Created Successfully" });

//     } catch (error) {
//         return res.status(500).json({ success: false, message: "Error adding user" }); // Handle server errors
//     }
// };





// // User Login Function
// const CreateLogin = async (req, res) => {
//     try {
//         const { email, password } = req.body; // Extract email and password from request body

//         // Find the user by email in the database
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(401).json({ success: false, message: "User Not exists" }); // Return error if user not found
//         }

//         // Compare the provided password with the hashed password stored in the database
//         const checkPassword = await bcrypt.compare(password, user.password); // ✅ Corrected password comparison

//         if (!checkPassword) {
//             return res.status(401).json({ success: false, message: "Wrong credentials" }); // Return error if password does not match
//         }

//         // Generate a JWT token with user ID as payload, secret key, and expiry time of 5 hours
//         const token = jwt.sign({ id: user._id }, "secretkeyofnoteap123@#", { expiresIn: "5hr" });

//         // Respond with success message, token, and user's name
//         return res.status(200).json({
//             success: true,
//             token,
//             user: { name: user.name },
//             message: "Login Successfully"
//         });

//     } catch (error) {
//         return res.status(500).json({ success: false, message: "Error in Login server" }); // Handle server errors
//     }
// };





// // get user
// const getUser = async (req, res) => {
//     try {
//     const users = await User.find({}, "-password"); // Exclude password
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch users" });
//   }
// }


// // delete user:
// const deleteUser = async (req, res) => {
//     try {
//     const user = await User.findByIdAndDelete(req.params.id);
    
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.status(200).json({ message: "User deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Error deleting user", error });
//   }
// }

// // update user
// const updateUser = async (req, res) => {
//     try {
//     const { name, email } = req.body;

//     const updatedUser = await User.findByIdAndUpdate(
//       req.params.id,
//       { name, email }, // Fields to update
//       { new: true, runValidators: true } // Return updated user & validate
//     );

//     if (!updatedUser) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.status(200).json({ message: "User updated successfully", user: updatedUser });
//   } catch (error) {
//     res.status(500).json({ message: "Error updating user", error });
//   }
// }

// module.exports = { CreateUser , CreateLogin , getUser , deleteUser, updateUser};




const User = require("../Model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// ✅ User Registration (Create User)
const CreateUser = async (req, res) => {
    try {
        const { name, email, password, isAdmin } = req.body; // Extract fields from request body

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(401).json({ success: false, message: "User already exists" });
        }

        // Hash the password
        const hashPassword = await bcrypt.hash(password, 10);

        // Create a new user with hashed password and optional admin status
        const newUser = new User({
            name,
            email,
            password: hashPassword,
            isAdmin: isAdmin || false, // Ensure default is false
        });

        // Save user to the database
        await newUser.save();

        return res.status(201).json({ success: true, message: "Account Created Successfully" });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Error creating user", error });
    }
};

// ✅ User Login
const CreateLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ success: false, message: "User does not exist" });
        }

        // Compare password with hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ success: false, message: "Wrong credentials" });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, "secretkeyofnoteap123@#", { expiresIn: "5h" });

        return res.status(200).json({
            success: true,
            token,
            user: { name: user.name, isAdmin: user.isAdmin },
            message: "Login successful"
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Error logging in", error });
    }
};

// ✅ Get All Users (Only Authenticated Users)
const getUser = async (req, res) => {
    try {
        const users = await User.find({}, "-password"); // Exclude password
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch users", error });
    }
};

// ✅ Delete User (Admin Only)
const deleteUser = async (req, res) => {
    try {
        if (!req.user.isAdmin) {
            return res.status(403).json({ message: "Access Denied: Admins only" });
        }

        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting user", error });
    }
};

// ✅ Update User (Admin Only)
const updateUser = async (req, res) => {
    try {
        if (!req.user.isAdmin) {
            return res.status(403).json({ message: "Access Denied: Admins only" });
        }

        const { name, email } = req.body;
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { name, email },
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: "Error updating user", error });
    }
};

module.exports = { CreateUser, CreateLogin, getUser, deleteUser, updateUser };

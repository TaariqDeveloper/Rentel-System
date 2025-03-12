// const multer = require("multer")

// // tilmaan image location
// const imageLocation = multer.diskStorage({
//         destination: (req, file, cb) => {
//                 cb(null, "document")
//         },
//         filename: (req, file, cb) => {
//                 cb(null, file.originalname)
//         }
// })


// const uploadimage = multer({
//         storage: imageLocation
// })

// module.exports = uploadimage

const multer = require("multer");

// Define storage location and filename configuration
const imageStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "documents"); // Changed "document" to "documents" (assuming it's a folder)
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname); // Added timestamp to prevent filename conflicts
    }
});

// Configure multer with storage options
const uploadImage = multer({ storage: imageStorage });

module.exports = uploadImage;

// const multer = require("multer")
// // tilmaan image location ama image ka meshi la dhigin   lahaa
// const imageLocation = multer.diskStorage({
//         destination: (req, file, cb) => {
//                 cb(null, "document")
//         },
//         filename: (req, file, cb) => {
//                 cb(null, file.originalname)
//         }
// })

// const uploadImage = multer({
//         storage: imageLocation
// })

// module.exports = uploadImage


const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save files in the 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

module.exports = upload;

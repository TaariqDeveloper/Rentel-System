const CustomerModel = require("../Model/CustomerModel")
// Create product
const RegisterCustomer = async (req, res) => {
    try {
        const newData = new CustomerModel({
            name: req.body.name,
            address: req.body.address,
            phone: req.body.phone,
            gender: req.body.gender,
            image: req.file ? req.file.filename : null
        });

        const SaveData = await newData.save();
        res.status(201).json(SaveData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};



module.exports ={RegisterCustomer}






// const readCustomer = async (req, res) => {
//     try {
//         const readData = await productModel.find()
//         res.status(200).json(readData);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Server error" });
//     }
// };





// // Read single product by ID
// const ReadSingleData = async (req, res) => {
//     try {
//         const GetSingleData = await productModel.findById( req.params.id);
//         if (!GetSingleData) {
//             return res.status(404).json({ error: "Product not found" });
//         }
//         res.status(200).json(GetSingleData);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Server error" });
//     }
// };

// // Update product by ID
// const UpdateData = async (req, res) => {
//     try {
//         const updatedProduct = await productModel.findByIdAndUpdate(
//             req.params.id,
//             {
//                 $set: {
//                     prName: req.body.prName,
//                     description: req.body.description,
//                     price: req.body.price,
//                     category: req.body.category,
//                     image: req.file ? req.file.filename : undefined // Only update image if a new one is uploaded
//                 }
//             },
//         //     { new: true, runValidators: true } // Returns updated document and applies validation
//         );

//         if (!updatedProduct) {
//             return res.status(404).json({ error: "Product not found" });
//         }

//         res.status(200).json({ message: "Update successful", updatedProduct });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Server error" });
//     }
// };


// //delete

// const DeleteData = async (req, res) => {
//     try {
//         const removedata = await productModel.deleteOne({ _id: req.params.id });

//         if (removedata.deletedCount === 0) {
//             return res.status(404).json({ error: "Product not found" });
//         }

//         res.status(200).json({ message: "Deleted successfully" });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Server error" });
//     }
// };

// module.exports = { RegisterProduct, readProduct, ReadSingleData, UpdateData , DeleteData, readProduct2};


















































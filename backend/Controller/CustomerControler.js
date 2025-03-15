// const CustomerModel = require("../Model/")
// // Create product
// const RegisterCustomer = async (req, res) => {
//     try {
//         const newData = new CustomerModel({
//             name: req.body.name,
//             address: req.body.address,
//             phone: req.body.phone,
//             gender: req.body.gender,
//             image: req.file ? req.file.filename : null
//         });

//         const SaveData = await newData.save();
//         res.status(201).json(SaveData);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Server error" });
//     }
// };



// module.exports ={RegisterCustomer}




const Customer = require("../Model/CustomerModel");

// ✅ Create Customer
const createCustomer = async (req, res) => {
  try {
    const newCustomer = new Customer({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      gender: req.body.gender,
      image: req.file ? req.file.filename : null, // Handle image
    });

    const savedCustomer = await newCustomer.save();
    res.status(201).json({ success: true, message: "Customer added", data: savedCustomer });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error adding customer", error });
  }
};

// ✅ Get All Customers
const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch customers" });
  }
};

// ✅ Get Single Customer
const getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) return res.status(404).json({ message: "Customer not found" });

    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ message: "Error fetching customer", error });
  }
};

// ✅ Update Customer
const updateCustomer = async (req, res) => {
  try {
    const updatedData = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      gender: req.body.gender,
      image: req.file ? req.file.filename : req.body.image, // Update image if new one is uploaded
    };

    const updatedCustomer = await Customer.findByIdAndUpdate(req.params.id, updatedData, { new: true });
    if (!updatedCustomer) return res.status(404).json({ message: "Customer not found" });

    res.status(200).json({ message: "Customer updated", data: updatedCustomer });
  } catch (error) {
    res.status(500).json({ message: "Error updating customer", error });
  }
};

// ✅ Delete Customer
const deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndDelete(req.params.id);
    if (!customer) return res.status(404).json({ message: "Customer not found" });

    res.status(200).json({ message: "Customer deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting customer", error });
  }
};



// const TotalCustomers = async (req, res) => {
//   try {
//     const total = await Customer.find().countDocuments();
//     res.status(200).json({ success: true, total });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Error fetching total Customers", error: error.message });
//   }
// };
const TotalCustomers = async (req, res) => {
  try {
    const total = await Customer.find().countDocuments(); // ✅ Corrected
    res.status(200).json({ success: true, total });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching total customers", error: error.message });
  }
};

module.exports = { createCustomer, getCustomers, getCustomerById, updateCustomer, deleteCustomer, TotalCustomers };








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


















































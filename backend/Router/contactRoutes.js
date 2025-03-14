const express = require("express");
const { createContact, getContacts, deleteContact } = require("../Controller/ContactController");

const router = express.Router();

// ✅ Route to submit contact form (Public)
router.post("/contact", createContact);

// ✅ Route to get all contacts (Admin View)
router.get("/contacts", getContacts);

// ✅ Route to delete a contact message (Admin Action)
router.delete("/contacts/:id", deleteContact);

module.exports = router;

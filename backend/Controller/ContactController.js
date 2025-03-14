const Contact = require("../Model/Contact");

// ✅ Create Contact (Save Form Submission)
const createContact = async (req, res) => {
  try {
    const { firstName, lastName, email, subject, message } = req.body;

    if (!firstName || !lastName || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required!" });
    }

    const newContact = new Contact({ firstName, lastName, email, subject, message });
    await newContact.save();

    res.status(201).json({ message: "Message sent successfully!", contact: newContact });
  } catch (error) {
    res.status(500).json({ error: "Server error, please try again later!" });
  }
};

// ✅ Get All Contacts (Admin View)
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch messages!" });
  }
};

// ✅ Delete a Contact (Admin Action)
const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: "Message not found!" });
    }
    res.status(200).json({ message: "Message deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting message!" });
  }
};

module.exports = { createContact, getContacts, deleteContact };

const Contact = require("../models/Contact");

const createContact = async (req, res) => {
  try {
    const { fullName, email, mobile, city } = req.body;

    // Check if the contact already exists
    const existingContact = await Contact.findOne({ email });
    if (existingContact) {
      return res
        .status(409)
        .json({ message: "Contact with this email already exists." });
    }

    // If not, create a new contact
    const newContact = new Contact({ fullName, email, mobile, city });
    await newContact.save();

    res.status(201).json({ message: "Contact saved successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const giveContactArray = async (req, res) => {
  try {
    const allContacts = await Contact.find();
    res.status(200).json(allContacts);
    // console.log(allContacts);
  } catch (e) {
    res
      .status(500)
      .json({
        message: "some error occured , while fetching list of contacts",
      });
  }
};

module.exports = { createContact, giveContactArray };

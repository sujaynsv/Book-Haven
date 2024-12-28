// controllers/contactController.js

import Contact from "../model/contact.model.js";

const contactController = {};

contactController.submitContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error submitting form:", error);
    res.status(500).json({ error: "An error occurred while submitting the form" });
  }
};

export default contactController;

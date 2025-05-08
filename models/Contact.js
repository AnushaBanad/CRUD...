// backend/models/Contact.js
const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String
}, { timestamps: true });

module.exports = mongoose.model("Contact", ContactSchema);

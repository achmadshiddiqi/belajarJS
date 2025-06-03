const mongoose = require("mongoose");

const contactSchema = {
  nama: {
    type: String,
    required: true,
  },
  nomor: {
    type: String,
    required: true,
  },
};
const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;

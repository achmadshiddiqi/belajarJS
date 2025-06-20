const mongoose = require("mongoose");

const tokensSchema = new mongoose.Schema({
  r_token: {
    type: String,
    unique: true,
  },
  userId: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  expiresAt: {
    type: Date,
  },
});

const Token = mongoose.model("Token", tokensSchema);

module.exports = Token;

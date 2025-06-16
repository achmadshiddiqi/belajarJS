const mongoose = require("mongoose");

const tokensSchema = new mongoose.Schema({
  r_token: {
    type: String,
  },
});

const Token = mongoose.model("Token", tokensSchema);

module.exports = Token;

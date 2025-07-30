const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  instance: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  appliedAt: {
    type: Date,
    default: Date.now(),
  },
});

const Jobs = mongoose.model("job", jobSchema);

module.exports = Jobs;

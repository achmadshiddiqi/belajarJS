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
  status: {
    type: String,
    required: true,
    default: "Waiting",
  },
  portal: {
    type: String,
    required: true,
  },
});

const Jobs = mongoose.model("job", jobSchema);

module.exports = Jobs;

const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  RollNo: {
    type: String,
  },
  cs3001: {
    type: String,
  },
  cs3002: {
    type: String,
  },
  cs3003: {
    type: String,
  },
  cs3004: {
    type: String,
  },
  cs3005: {
    type: String,
  },
  cs3006: {
    type: String,
  },
  cs3007: {
    type: String,
  },
  cs3008: {
    type: String,
  },
  cs3009: {
    type: String,
  },
  flag: {
    type: String,
    required: true,
  },
});

const thisSchema = new mongoose.model("registeredcourse", courseSchema);
module.exports = thisSchema;

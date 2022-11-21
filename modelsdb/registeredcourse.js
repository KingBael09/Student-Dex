const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  RollNo: {
    type: String,
    required: true,
  },
  cs3001: {
    type: String,
    required: true,
  },
  cs3002: {
    type: String,
    required: true,
  },
  cs3003: {
    type: String,
    required: true,
  },
  cs3004: {
    type: String,
    required: true,
  },
  cs3005: {
    type: String,
    required: true,
  },
  cs3006: {
    type: String,
    required: true,
  },
  cs3007: {
    type: String,
    required: true,
  },
  cs3008: {
    type: String,
    required: true,
  },
  cs3009: {
    type: String,
    required: true,
  },
  flag: {
    type: String,
    required: true,
  },
});

const thisSchema = new mongoose.model("registeredcourse", courseSchema);
module.exports = thisSchema;
